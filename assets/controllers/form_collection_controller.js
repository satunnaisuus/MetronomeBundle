import { Controller } from '@hotwired/stimulus';
import Sortable from 'sortablejs';

const SORTING_STEP = 10;

export default class extends Controller {
    static targets = ["container", "item", "sortInput", "controls"];

    static values = {
        prototype: String,
        prototypeName: String,
        sortable: Boolean,
    }

    initialize() {
        this.index = this.itemTargets.length;
    }

    connect() {
        if (this.sortableValue) {
            new Sortable(this.containerTarget, {
                onSort: (evt) => this.normalizeSortInputs(),
                handle: '[data-role="drag"]',
            });
        }
    }

    add({target, params: {type}}) {
        let index = this.itemTargets.length;
        const targetItem = target.closest('[data-form-collection-target="item"]');

        if (targetItem) {
            index = this.itemTargets.indexOf(targetItem) + 1;
        }

        if (type) {
            this.addFromPrototype(
                index,
                this.containerTarget.getAttribute('data-prototype-name-' + type),
                this.containerTarget.getAttribute('data-prototype-' + type),
            );
        } else {
            this.addFromPrototype(index, this.prototypeNameValue, this.prototypeValue);
        }
    }

    addFromPrototype(index, prototypeName, prototype) {
        prototype = prototype
            .replace(new RegExp(prototypeName + 'label__', 'g'), this.index)
            .replace(new RegExp(prototypeName, 'g'), this.index)
        ;

        const newNode = this.htmlToElements(prototype);
        const after = this.containerTarget.children[index - 1];

        if (after) {
            after.after(newNode);
        } else {
            this.containerTarget.append(newNode);
        }

        for (let oldScript of newNode.querySelectorAll('script')) {
            const newScript = document.createElement("script");
            for (let attr of oldScript.attributes) {
                newScript.setAttribute(attr.name, attr.value)
            }
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        }

        this.normalizeSortInputs();
        this.index++;
    }

    delete(event) {
        event.target.closest('[data-form-collection-target="item"]').remove();
        this.normalizeSortInputs();
    }

    normalizeSortInputs() {
        for (let i = 0; i < this.sortInputTargets.length; i++) {
            this.sortInputTargets[i].value = (i + 1) * SORTING_STEP;
        }
    }

    htmlToElements(html) {
        let template = document.createElement('template');
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
    }

    controlOpen({target}) {
        target.closest('[data-form-collection-target="controls"]').classList.add('open');
    }

    controlClose({target}) {
        target.closest('[data-form-collection-target="controls"]').classList.remove('open');
    }
}