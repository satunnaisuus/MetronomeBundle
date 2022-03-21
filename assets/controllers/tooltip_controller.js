import { Controller } from 'stimulus';
import { Tooltip } from 'bootstrap';

export default class extends Controller {
    static values = {
        title: String
    };

    connect() {
        const tooltip = new Tooltip(this.element, {
            boundary: document.body,
        })
    }
}
