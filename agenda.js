import Contactos from "./contactos.js";

export default class Table {
    constructor(tabla, contactos) {
        this._tabla = tabla;
        this._contactos = contactos;
    }

    actualizar(contactos) {
        this._RemoveRows();

        contactos.forEach((objContact) => {
            this._addToTable(objContact);
        });
    }

    _RemoveRows() {
        for (let i = this._tabla.rows.length - 1; i > 2; i--) {
            this._tabla.deleteRow(i);
        }
    }

    _addToTable(objectContactos) {
        objectContactos = new Contactos(objectContactos);

        let row = this._tabla.insertRow(-1);
        let cell = row.insertCell(0);
        cell.appendChild(document.createTextNode(objectContactos.nombre));
        cell = row.insertCell(1);
        cell.appendChild(document.createTextNode(objectContactos.edad));
        cell = row.insertCell(2);
        cell.appendChild(document.createTextNode(objectContactos.telefono));
        cell = row.insertCell(3);
        cell.appendChild(document.createTextNode(objectContactos.direccion));
        cell = row.insertCell(4);
        cell.appendChild(document.createTextNode(objectContactos.email));
        this._addButtonDelete(row, objectContactos);
    }

    _addButtonDelete(row, objContact) {

        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = "Eliminar";
        btnDelete.className = "btn btn-danger";

        btnDelete.addEventListener("click", () => {
            this._contactos.borrarContactos(objContact.email);
            this.actualizar(this._contactos.mostrarContactosGuardados());
        });

        let cell = row.insertCell(5);
        cell.appendChild(btnDelete);
    }

    ordenarPorNombre() {
        this._contactos.ordenarPorNombre();
        this.actualizar(this._contactos.mostrarContactosGuardados());
    }

    ordenarPorEdad() {
        this._contactos.ordenarPorEdad();
        this.actualizar(this._contactos.mostrarContactosGuardados());
    }
}