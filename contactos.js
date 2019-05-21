export default class Contactos{
    constructor(nombre, birthday){
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

    getBirthdayAsString() {
        let d = this._birthday.getDate() + "/" + this._birthday.getMonth() + "/" + this._birthday.getFullYear();

        return d;
    }
    get birthday() {
        return this._birthday;
    }

    // returns employee age //
    getAge() {
        let oneDay = 24 * 60 * 60 * 1000;
        let oneYear = oneDay * 365;
        let differenceMs = Math.abs(new Date() - this._birthday);
        return Math.round(differenceMs / oneYear);
}
}