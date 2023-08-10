import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ["pathInput", "sizeInput", "mimeTypeInput", "nameInput", "link", "size", "thumbnail", "spinner", "uploadIcon", "delete"];

    static values = {
        image: Boolean,
        url: String,
    }

    connect() {
        if (this.pathInputTarget.value) {
            this.linkTarget.href = this.pathInputTarget.value;
            this.sizeTarget.innerText = this.formatSize(this.sizeInputTarget.value);
            this.deleteTarget.style.display = null;

            if (this.imageValue) {
                this.thumbnailTarget.src = this.pathInputTarget.value;
            } else {
                this.linkTarget.innerText = this.nameInputTarget.value;
            }
        } else {
            this.linkTarget.style.display = 'none';
            this.sizeTarget.style.display = 'none';
            this.deleteTarget.style.display = 'none';
        }
    }

    choice() {
        const controller = this;

        let input = document.createElement('input');
        input.type = 'file';
        input.click();
        input.onchange = e => {
            if (input.files.length === 0) {
                return;
            }

            const formData = new FormData();
            formData.append('upload', e.target.files[0]);

            this.spinnerTarget.style.display = null;
            this.uploadIconTarget.style.display = 'none';

            fetch(controller.urlValue, {
                method: 'post',
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                }
            })
                .then(r => r.json())
                .then(data => {
                    if (data.url) {
                        controller.pathInputTarget.value = data.url;
                        controller.nameInputTarget.value = data.originalName;
                        controller.mimeTypeInputTarget.value = data.mimeType;
                        controller.sizeInputTarget.value = data.size;

                        if (controller.imageValue) {
                            controller.thumbnailTarget.src = data.url;
                        } else {
                            controller.linkTarget.innerText = data.originalName;
                        }

                        controller.linkTarget.href = data.url;
                        controller.sizeTarget.innerText = controller.formatSize(data.size);

                        controller.linkTarget.style.display = null;
                        controller.sizeTarget.style.display = null;

                        this.spinnerTarget.style.display = 'none';
                        this.uploadIconTarget.style.display = null;
                        this.deleteTarget.style.display = null;
                    } else if (Array.isArray(data)) {
                        return Promise.reject(data.join('. '));
                    }
                })
                .catch(e => {
                    this.spinnerTarget.style.display = 'none';
                    this.uploadIconTarget.style.display = null;
                    alert(e);
                })
            ;
        }
    }

    delete() {
        this.pathInputTarget.value = null;
        this.sizeInputTarget.value = null;
        this.mimeTypeInputTarget.value = null;
        this.nameInputTarget.value = null;
        this.linkTarget.style.display = 'none';
        this.sizeTarget.style.display = 'none';
        this.deleteTarget.style.display = 'none';
    }

    formatSize(bytes) {
        if (!bytes) return '';
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
    }

    htmlToElements(html) {
        let template = document.createElement('template');
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
    }
}
