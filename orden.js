export default class {
    constructor() {
        this._contactos = new Array();
    }

    guardarContactos(objContact) {

        this._actualizarContactos();
        this._contactos.push(objContact);

        localStorage.setItem("contactos", JSON.stringify(this._contactos));
    }
    
    mostrarContactosGuardados() {
        this._actualizarContactos();
        return this._contactos;
    }
    
    _actualizarContactos() {
        if (localStorage.getItem("contactos") != null) {
            this._contactos = JSON.parse(localStorage.getItem("contactos"));
        }
    }

    borrarContactos(email) {

        this._actualizarContactos();
        this._contactos.forEach((objectContact, index) => {
            if (objectContact.email === email) {
                this._contactos.splice(index, 1);

                localStorage.setItem("contactos", JSON.stringify(this._contactos));
                return;
            }
        });
    }

    conyactoRegistrado(email) {
        let registered = false;
        this._contactos.forEach((objContact) => {
            if (objContact.email === email) {
                registered = true;
                return;
            }
        });

        return registered;
    }

    OrdenarPorNombre() {
        this._contactos.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            } else {
                return -1;
            }
        });

        localStorage.setItem("contactos", JSON.stringify(this._contactos));
    }

    odenarPorEdad() {
        this._contactos.sort(function (a, b) {
            return (a.age - b.age);
        });

        localStorage.setItem("contactos", JSON.stringify(this._contactos));
    }
}