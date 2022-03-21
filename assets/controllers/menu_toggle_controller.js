import { Controller } from 'stimulus';

export default class extends Controller {
    connect() {
        this.element.addEventListener('click', function (e) {
            e.preventDefault();
            window.dispatchEvent(new Event('admin.open-sidebar'));
            this.classList.toggle('menu-toggle__opened')
        })
    }
}
