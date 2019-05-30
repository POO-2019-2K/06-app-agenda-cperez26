export default class Contactos{
    constructor(objectContactos){
        this._nombre = objectContactos.nombre;
        this._edad = objectContactos.edad;
        this._telefono = objectContactos.telefono;
        this._direccion = objectContactos.direccion;
        this._email = objectContactos.email;    
    }
    
    get nombre(){
        return this._nombre;
    }

    get edad(){
        return this._edad;
    }

    get telefono(){
        return this._telefono;
    }

    get direccion(){
        return this._direccion;
    }

    get email(){
        return this._email;
    }
}