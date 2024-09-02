import { cargarEdicion } from "../funciones.js";
import { contenerdorCitas } from "../selectores.js";

export default class AdminCitas {
    constructor() {
        this.citas = []
    }

    agregar(cita) {
        this.citas = [...this.citas, cita]
        this.mostrar();
    }

    editar(citaActualizada) {
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita)
        this.mostrar()   
    }

    eliminar(id) {
        this.citas = this.citas.filter(cita => cita.id !== id)
        this.mostrar()
    }

    mostrar() {
        //limpiar el html previo
        while (contenerdorCitas.firstChild) {
            contenerdorCitas.removeChild(contenerdorCitas.firstChild)
        }

        //Si hay citas
        if(this.citas.length === 0) {
            contenerdorCitas.textContent = 'No hay pacientes'
            return;
        }

        //generando las citas
        this.citas.forEach(cita => {
            const divCita = document.createElement('div');
            divCita.classList.add('container-citas-paciente');

            const paciente = document.createElement('p');
            paciente.classList.add('container-citas-paciente')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;

            const propietario = document.createElement('p');
            propietario.classList.add('container-citas-paciente')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;

            const email = document.createElement('p');
            email.classList.add('container-citas-paciente')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

            const fecha = document.createElement('p');
            fecha.classList.add('container-citas-paciente')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;

            const sintomas = document.createElement('p');
            sintomas.classList.add('container-citas-paciente')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('button-editar');
            btnEditar.innerHTML = 'Editar '
            const clone = structuredClone(cita)
            btnEditar.onclick = () => cargarEdicion(clone);
            

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('button-eliminar');
            btnEliminar.innerHTML = 'Eliminar '
            btnEliminar.onclick = () => this.eliminar(cita.id)

            const contenedorBotones = document.createElement('DIV');
            contenedorBotones.classList.add('botones');

            contenedorBotones.appendChild(btnEditar);
            contenedorBotones.appendChild(btnEliminar);


            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);
            contenerdorCitas.appendChild(divCita);
        });
    }
}
