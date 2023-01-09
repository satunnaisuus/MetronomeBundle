import { Controller } from '@hotwired/stimulus';
import { DataTable } from "../components/data-table";

export default class extends Controller {
    connect() {
        if ('ajaxUrl' in this.element.dataset) {
            fetch(this.element.dataset.ajaxUrl, {headers: {'X-Requested-With': 'XMLHttpRequest'}})
                .then(r => r.text())
                .then(html => {
                    this.element.innerHTML = html;
                    const table = new DataTable(this.element.querySelector('[data-role="table-widget"]'), 'ajax' in this.element.dataset);
                })
            ;
        } else {
            const table = new DataTable(this.element.querySelector('[data-role="table-widget"]'), 'ajax' in this.element.dataset);
        }
    }
}