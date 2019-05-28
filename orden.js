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

    saveContact(objContact) {
        this._updateArrayContacts();
        this._contactos.push(objContact);
        localStorage.setItem("contactos", JSON.stringify(this._contactos));
    }

    deleteContact(email) {
        this._updateArrayContacts();
        this._contactos.forEach((objectC, index) => {
            if (objectC.email === email) {
                this._contactos.splice(index, 1);
                localStorage.setItem('contactos', JSON.stringify(this._contactos));
                return;
            }
        });
    }

    isContactRegistered(email) {
        let registrado = false;
        this._contactos.forEach((objContact) => {
            if (objContact.email === email) {
                registrado = true;
                return;
            }
        });

        return registrado;
    }

    sortByName() {
        this._contactos.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            } else {
                return -1;
            }
        });
        //Save in local Storange
        localStorage.setItem('contactos', JSON.stringify(this._contactos));
    }

    sortByAge() {
        this._contactos.sort(function (a, b) {
            return (a.age - b.age)
        })
        //Save in local Storange
        localStorage.setItem('contactos', JSON.stringify(this._contactos));
    }
}