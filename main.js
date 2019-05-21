import Tabla from "./agenda.js";
import Contactos from "./contactos.js";

export default class Main {
    constructor() {
        this._tabla = new Tabla(document.querySelector("#agenda"));
        this._contactos = new Contactos();
        this._tabla.update(this._contactos.getSaveContacts());
    }
}

let main = new Main();
