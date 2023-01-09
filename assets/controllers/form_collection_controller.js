import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ["container", "item"];

    initialize() {
        this.index = this.itemTargets.length;
    }

    connect() {

    }

    add({params: {prototypeName, prototype}}) {
        prototype = prototype
            .replace(new RegExp(prototypeName + 'label__', 'g'), this.index)
            .replace(new RegExp(prototypeName, 'g'), this.index)
        ;

        const newNode = this.htmlToElements(prototype);

        if (typeof newNode.dataset.sortingField === 'string') {
            const sortingInput = newNode.querySelector('#' + newNode.dataset.sortingField);
            if (sortingInput) {
                sortingInput.value = (this.index + 1) * 10;
            }
        }

        this.containerTarget.appendChild(newNode);

        for (let oldScript of newNode.querySelectorAll('script')) {
            const newScript = document.createElement("script");
            for (let attr of oldScript.attributes) {
                newScript.setAttribute(attr.name, attr.value)
            }
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        }

        this.index++;
    }

    delete(event) {
        event.target.closest('[data-form-collection-target="item"]').remove();
    }

    htmlToElements(html) {
        let template = document.createElement('template');
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
    }
}