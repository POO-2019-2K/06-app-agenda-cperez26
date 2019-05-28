export default class Contactos{
        constructor(objectC){
            this._nombre = objectC.nombre;
            this._edad = objectC.edad;
            this._telefono = objectC.telefono;
            this._direccion = objectC.direccion;
            this._email = objectContact.email;    
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