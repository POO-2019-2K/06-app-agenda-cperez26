export default class Tabla {
    constructor(tabla) {
        this._tabla = tabla;
    }

    actualizarT(contactos) {
        this._RemoveRows();
        contactos.forEach((objContactos) => {
            this._addToTable(objContactos);
        });
    }

    _RemoveRows() {
        for (let i = this._table.rows.lenght; i > 1; i--) {
            this._tabla.deleteRow(i);
        }
    }

    _addToTable(objContactos){
        let row = this._tabla.insertRow(-1);
        let cell = row.insertCell(0);
        cell.innerHTML = objContactos.nombre;
        cell = row.insertCell(1);
        cell.innerHTML = objContactos.telefono;
        cell = row.insertCell(2);
        cell.innerHTML = objContactos.direccion;
        cell = row.insertCell(3);
        cell.innerHTML = objContactos.email;
        cell = row.insertCell(4);
        cell.innerHTML = objContactos.age;
        this._addButtonDelete(row, objContactos);
    }
    _addButtonDelete(row, objC) {
        let btnDelete = document.createElement('input');
        btnDelete.type = "button";
        btnDelete.value = "Eliminar";
        btnDelete.className = "btn btn-danger";

        btnDelete.addEventListener('click', () => {
            this._contactos.borrarContacto(objC.email);
            this.update(this._contactos.getContactsSaved());
        });
        
        let cell = row.insertCell(5);
        cell.appendChild(btnDelete);
    }

    ordenarPorNombre() {
        this._contactos.ordenarPorNombre();
        this.update(this._contactos.getContactsSaved());
    }

    ordenarPorEdad() {
        this._contactos.ordenarPorEdad();
        this.update(this._contactos.getContactsSaved());
    }
}