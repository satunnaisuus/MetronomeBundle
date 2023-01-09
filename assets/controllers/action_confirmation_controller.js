import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static values = {
        message: String,
        csrf: String,
    };

    connect() {
        const element = this.element;
        const message = this.messageValue;
        const csrf = this.csrfValue;

        element.addEventListener('click', function (e) {
            e.preventDefault();

            if (confirm(message)) {
                let formData = new FormData();
                formData.append('token', csrf);
                fetch(element.href, {method: 'POST', body: formData})
                    .then(r => r.json())
                    .then((data) => {
                        if (data.redirect) {
                            window.location.href = data.redirect;
                        } else {
                            window.location.reload();
                        }
                    })
                ;
            }
        });
    }
}
