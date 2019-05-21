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
}