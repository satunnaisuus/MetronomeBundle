export class DataTable extends EventTarget {
    constructor(element, ajax, onUpdate) {
        super();
        this.element = element;
        this.tableConfig = new TableConfigStorage(element.dataset.id);
        this.init(ajax, onUpdate);
    }

    init(ajax, onUpdate) {
        //filters
        const openFilters = this.element.querySelector('[data-role="open-filters"]');
        const closeFilters = this.element.querySelectorAll('[data-role="close-filters"]');
        const filters = this.element.querySelector('[data-role="filters"]');

        if (openFilters) {
            openFilters.addEventListener('click', function (e) {
                filters.classList.add('active');
            });
        }

        if (closeFilters) {
            closeFilters.forEach(i => {
                i.addEventListener('click', function (e) {
                    filters.classList.remove('active');
                });
            });
        }

        //checkboxes
        this.element.querySelectorAll('[data-role="check"]').forEach(i => {
            const controller = this;
            i.addEventListener('change', function (e) {
                const row = e.target.closest('[data-role="row"]');
                controller.dispatchEvent(new CustomEvent('check', {detail: {checked: e.target.checked, item: {id: row.dataset.id, name: row.dataset.name}}}));
            });
        });

        //confirmations
        this.element.querySelectorAll('[data-role="confirmation"]').forEach(i => {
            const controller = this;
            i.addEventListener('click', function (e) {
                e.preventDefault();

                if (confirm(i.dataset.confirmationText)) {
                    let formData = new FormData();
                    formData.append('token', controller.element.dataset.csrf);
                    fetch(i.href, {method: 'POST', body: formData}).then(() => {
                        if (ajax) {
                            controller.ajaxLoad(controller.element.dataset.url, onUpdate);
                        } else {
                            window.location.reload();
                        }
                    });
                }
            });
        });

        //tree
        const toggleTreeItem = (row) => {
            const opened = row.classList.contains('data-table__row--opened');
            row.classList.toggle('data-table__row--opened');
            toggleChildrenRows(row.dataset.id, opened);
            if (opened) {
                this.tableConfig.closeRow(row.dataset.id);
            } else {
                this.tableConfig.openRow(row.dataset.id);
            }
        };

        const toggleChildrenRows = (parentId, hide) => {
            this.element.querySelectorAll('[data-role="row"][data-parent="' + parentId + '"]').forEach(row => {
                if (hide) {
                    row.classList.add('d-none');
                    toggleChildrenRows(row.dataset.id, true);
                } else {
                    row.classList.remove('d-none');
                    if (row.classList.contains('data-table__row--opened')) {
                        toggleChildrenRows(row.dataset.id, false);
                    }
                }
            });
        };

        const branchOpened = (row) => {
            const parent = this.element.querySelector('[data-role="row"][data-id="' + row.dataset.parent + '"]');

            if (! parent) {
                return true;
            }

            return parent.classList.contains('data-table__row--opened') && branchOpened(parent);
        }

        const rows = this.element.querySelectorAll('[data-role="row"]');
        rows.forEach(row => {
            if (this.tableConfig.isOpenedRow(row.dataset.id)) {
                row.classList.add('data-table__row--opened');
            }
        });
        rows.forEach(row => {
            if (!row.dataset.parent) return;

            if (branchOpened(row)) {
                row.classList.remove('d-none');
            }
        });

        this.element.querySelectorAll('[data-role="collapse-children"]').forEach(i => {
            i.addEventListener('click', function (e) {
                e.preventDefault();
                toggleTreeItem(i.closest('[data-role="row"]'));
            });
        });

        //ajax
        if (ajax) {
            this.element.querySelectorAll('[data-role="sort"]').forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    this.ajaxLoad(link.href, onUpdate);
                })
            });

            this.element.querySelectorAll('form[name="filter"]').forEach(form => {
                form.addEventListener('submit', e => {
                    e.preventDefault();
                    this.ajaxLoad(form.getAttribute('action') + '?' + new URLSearchParams(new FormData(form)).toString(), onUpdate);
                });
            });

            this.element.querySelectorAll('[data-role="pagination"] a').forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    this.ajaxLoad(link.href, onUpdate);
                })
            });

            this.element.querySelectorAll('form[name="search"]').forEach(form => {
                form.addEventListener('submit', e => {
                    e.preventDefault();
                    this.ajaxLoad(form.getAttribute('action') + '?' + new URLSearchParams(new FormData(form)).toString(), onUpdate);
                });
            });

            this.element.querySelectorAll('[data-role="reset-filters"]').forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    this.ajaxLoad(link.href, onUpdate);
                });
            });

            this.element.querySelectorAll('[data-role="reset-search"]').forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    this.ajaxLoad(link.href, onUpdate);
                });
            });
        }

        if (typeof onUpdate === 'function') {
            onUpdate(this);
        }
    }

    ajaxLoad(url, onUpdate, options) {
        options = options || {};
        options.headers = options.headers || {};
        options.headers['X-Requested-With'] = 'XMLHttpRequest';

        fetch(url, options)
            .then(r => r.text())
            .then(html => {
                const node = new DOMParser().parseFromString(html, 'text/html').body.childNodes[0];
                this.element.replaceWith(node);
                this.element = node;
                this.init(true, onUpdate);
            })
        ;
    }

    checkItem(id) {
        const row = this.element.querySelector('[data-role="row"][data-id="' + id + '"]');
        if (row) {
            const checkbox = row.querySelector('[data-role="check"]');
            if (checkbox) {
                checkbox.checked = true;
            }
        }
    }

    uncheckAll() {
        this.element.querySelectorAll('[data-role="check-all"], [data-role="check"]').forEach(i => {
            i.checked = false;
        })
    }

    hideCheckAll() {
        const element = this.element.querySelector('[data-role="check-all"]');
        if (element) {
            element.style.display = 'none';
        }
    }
}

class TableConfigStorage {
    constructor(tableId) {
        this.key = 'admin-table-' + tableId
        this.config = JSON.parse(window.localStorage.getItem(this.key));
        if (this.config === null) {
            this.config = {
                openedRows: {},
            };
        }
    }

    openRow(id) {
        this.config.openedRows[id] = true;
        this.flush();
    }

    closeRow(id) {
        delete this.config.openedRows[id];
        this.flush();
    }

    isOpenedRow(id) {
        return this.config.openedRows[id] === true;
    }

    flush() {
        window.localStorage.setItem(this.key, JSON.stringify(this.config));
    }
}