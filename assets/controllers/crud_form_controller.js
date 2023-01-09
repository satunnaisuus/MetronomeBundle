import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ["state"];

    initialize() {

    }

    connect() {

    }

    changeState({params: {key, value}}) {
        let newState = {};
        if (this.stateTarget.value) {
            let currentState = JSON.parse(this.stateTarget.value);
            if (typeof currentState == "object") {
                newState = currentState;
            }
        }
        newState[key] = value;
        this.stateTarget.value = JSON.stringify(newState);
    }

    ajaxSubmit(event) {
        event.preventDefault();

        fetch(this.element.action, {
            method: this.element.method,
            body: new FormData(this.element),
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            }
        }).then(r => r.text()).then(html => {
            this.element.parentElement.innerHTML = html;
        });
    }
}