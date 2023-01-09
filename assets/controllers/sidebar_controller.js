import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    connect() {
        const sidebar = this.element;

        window.addEventListener('admin.open-sidebar', function () {
            if (sidebar.classList.contains('admin-sidebar--opened')) {
                sidebar.classList.remove('admin-sidebar--opened');
                document.body.style.overflow = '';
            } else {
                sidebar.classList.add('admin-sidebar--opened');
                document.body.style.overflow = 'hidden';
            }
        });
    }
}
