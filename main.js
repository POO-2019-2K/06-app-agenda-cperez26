import Contactos from "./contactos.js";
import Tabla from "./agenda.js";

export default class Main {
    constructor() {
        this._contactos = new Contactos();
        this._tabla = new Tabla(document.querySelector("#table"), this._contactos);
        this._tabla.update(this._contactos.mostrarContactosGuardados());
    }

    activeListenners() {
        document.querySelector("#btnAdd").addEventListener("click", () => {
            if (document.querySelector("#info").checkValidity()) {

                if (!this._contactos.contactoRegistrado(document.querySelector("#email").value)) {
                    this._contactos.guardarContactos(this._createObjectContact());
                    this._tabla.update(this._contactos.mostrarContactosGuardados());
                }else{
                    window.swal.fire({
                        type: "warning",
                        title: "Advertencia",
                        text: "Este contacto ya esta registrado"
                    });
                }
            } else {
                window.swal.fire({
                    type: "warning",
                    title: "Advertencia",
                    text: "Llene los datos para continuar"
                });
            }
        });

        document.querySelector("#sort").addEventListener("change", () => {
            if(document.querySelector("#sort").value === "tname"){
                this._tabla.ordenarPorNombre();
            }else{
                this._tabla.ordenarPorEdad();
            }
        });
    }

    _createObjectContact() {
        let objContact = {
            name: document.querySelector("#nombre").value,
            age: document.querySelector("#edad").value,
            phone: document.querySelector("#telefono").value,
            address: document.querySelector("#direccion").value,
            email: document.querySelector("#email").value
        };

        return objContact;
    }
}

let main = new Main();

main.activeListenners();