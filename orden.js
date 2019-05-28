export default class {
    constructor() {
        this._contactos = new Array();
    }

    _updateArrayContacts() {
        if (localStorage.getItem("contactos") != null) {
            this._contactos = JSON.parse(localStorage.getItem("contactos"));
        }
    }

    getContactsSaved() {
        this._updateArrayContacts();
        return this._contactos;
    }

    guardarContacto(objContact) {
        this._updateArrayContacts();
        this._contactos.push(objContact);
        localStorage.setItem("contactos", JSON.stringify(this._contactos));
    }

    borrarContacto(email) {
        this._updateArrayContacts();
        this._contactos.forEach((objectC, index) => {
            if (objectC.email === email) {
                this._contactos.splice(index, 1);
                localStorage.setItem('contactos', JSON.stringify(this._contactos));
                return;
            }
        });
    }

    contactoRegistrado(email) {
        let registrado = false;
        this._contactos.forEach((objContact) => {
            if (objContact.email === email) {
                registrado = true;
                return;
            }
        });

        return registrado;
    }

    ordenarPorNombre() {
        this._contactos.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            } else {
                return -1;
            }
        });
        
        localStorage.setItem('contactos', JSON.stringify(this._contactos));
    }

    ordenarPorEdad() {
        this._contactos.sort(function (a, b) {
            return (a.age - b.age)
        })

        localStorage.setItem('contactos', JSON.stringify(this._contactos));
    }
}