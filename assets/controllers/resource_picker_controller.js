import { Controller } from 'stimulus';
import { DataTable } from "../components/data-table";
import {Modal} from 'bootstrap';

export default class extends Controller {
    static targets = ["input", "container", "element", "name"];
    static values = {
        multiple: Boolean,
        url: String,
        prototype: String,
    }

    initialize() {
        this.value = JSON.parse(this.inputTarget.value);
    }

    connect() {

    }

    openModal() {
        const controller = this;

        let modalWrapper = document.createElement('div');
        modalWrapper.innerHTML = `
            <div class="modal" tabindex="-1">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="modal-title">Выбор ресурса</div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <div class="modal-body" data-role="modal-body">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Отмена</button>
                    <button type="button" class="btn btn-primary" data-role="select">Выбрать</button>
                  </div>
                </div>
              </div>
            </div>
        `;
        document.body.append(modalWrapper);

        let modalElement = modalWrapper.querySelector('.modal');
        let modal = new Modal(modalElement);
        modal.show();

        let tempValue = this.value;

        if (controller.multipleValue && !Array.isArray(tempValue)) {
            tempValue = [];
        }

        modalElement.querySelector('[data-role="select"]').addEventListener('click', function (e) {
            e.preventDefault();
            modal.hide();
            controller.updateValue(tempValue);
        });

        modalElement.addEventListener('hidden.bs.modal', function (event) {
            modalWrapper.remove();
        });

        fetch(this.urlValue, {headers: {'X-Requested-With': 'XMLHttpRequest'}})
            .then(r => r.text())
            .then(html => {
                modalElement.querySelector('[data-role="modal-body"]').innerHTML = html;
                const table = new DataTable(modalElement.querySelector('[data-role="table-widget"]'), true, function (table) {
                    table.hideCheckAll();
                    if (controller.multipleValue) {
                        tempValue.forEach(item => table.checkItem(item.id));
                    } else if (tempValue !== null){
                        table.checkItem(tempValue.id);
                    }
                });

                table.addEventListener('check', function (e) {
                    if (e.detail.checked) {
                        if (controller.multipleValue) {
                            tempValue.push(e.detail.item);
                        } else {
                            table.uncheckAll();
                            table.checkItem(e.detail.item.id);
                            tempValue = e.detail.item;
                        }
                    } else {
                        if (controller.multipleValue) {
                            tempValue = tempValue.filter(i => i.id !== e.detail.item.id);
                        } else {
                            tempValue = null;
                        }
                    }
                });
            })
        ;
    }

    updateValue(value) {
        this.value = value;
        this.inputTarget.value = JSON.stringify(value);

        if (this.multipleValue) {
            this.containerTarget.innerHTML = '';
            value.forEach(item => {
                this.containerTarget.appendChild(
                    this.htmlToElements(
                        this.containerTarget.dataset.prototype
                            .replace(/__id__/g, item === null ? '' : item.id)
                            .replace(/__label__/g, item === null ? '' : item.name)
                    )
                );
            });
        } else {
            this.nameTarget.innerText = value === null ? '' : value.name;
        }
    }

    delete({target}) {
        const element = target.closest('[data-resource-picker-target="element"]');
        if (this.multipleValue) {
            this.updateValue(this.value.filter(i => i.id != element.dataset.id));
        } else {
            this.updateValue(null);
        }
    }

    htmlToElements(html) {
        let template = document.createElement('template');
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
    }
}
