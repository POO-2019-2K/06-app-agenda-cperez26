export default class Contactos{
    constructor(birthday){
        this._contactos = new Array();
        this._birthday = birthday
    }

    _actualizarContactos() {
        if (localStorage.getItem("contactos") != null) {
            this._contactos = JSON.parse(localStorage.getItem("contactos"));
        }
    }

    getSaveContacts(){
        this._actualizarContactos();
        return this._contactos;
    }

    saveContactos(objContactos){
        this._actualizarContactos();
        this._contactos.push(objContactos);
        localStorage.setItem("contactos", JSON.stringify(this._contactos));
    }
}