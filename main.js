import Tabla from "./agenda.js";
import Contactos from "./contactos.js";

export default class Main {
    constructor() {
        
        this._contactos = new Contactos();
        this._tabla = new Tabla(document.querySelector("#table"), this._contactos);
        this._tabla.update(this._contactos.getContactsSaved());
    }

    activeListenners() {
        document.querySelector("#btnAdd").addEventListener("click", () => {
            if (document.querySelector("#form").checkValidity()) {
                if (!this._contactos.contactoRegistrado(document.querySelector("#email").value)) {
                    this._contactos.guardarContacto(this._createObjectContact());
                    this._tabla.update(this._contactos.getContactsSaved());
                }else{
                    swal.fire({
                        type: "warning",
                        title: "Advertencia",
                        text: "Este correo ya ha sido registrado"
                    });
                }
            } else {
                swal.fire({
                    type: "warning",
                    title: "Advertencia",
                    text: "Complete los datos para continuar"
                });
            }
        });

        document.querySelector('#sort').addEventListener('change', () => {
            if(document.querySelector('#sort').value === 'name'){
                this._tabla.ordenarPorNombre();
            }else{
                this._tabla.ordenarPorEdad();
            }
        });
    }

    _createObjectContact() {
        let objContact = {
            nombre: document.querySelector("#nombre").value,
            edad: document.querySelector("#edad").value,
            telefono: document.querySelector("#telefono").value,
            direccion: document.querySelector("#direccion").value,
            email: document.querySelector("#email").value
        }

        return objContact;
    }
}

let main = new Main();

main.activeListenners();