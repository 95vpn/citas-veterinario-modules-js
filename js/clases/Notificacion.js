import { formulario } from '../selectores.js'


export default class Notificacion {
    constructor({ texto, tipo }) {
        this.texto = texto
        this.tipo = tipo
        this.mostrar()
    }

    mostrar() {
        //crear notificación
        const alerta = document.createElement('div')
        alerta.classList.add('alerta')

        //elminar alertas ducplicada
        const alertaPrevia = document.querySelector('.alerta');

        alertaPrevia?.remove()


        // si es un tipo de error , agrega una clase
        this.tipo === 'error' ? alerta.classList.add('alerta-roja') : alerta.classList.add('alerta-verde');

        //mensaje de error
        alerta.textContent = this.texto

        //insertar en el DOM
        formulario.parentElement.insertBefore(alerta, formulario)

        //quitar despues de 5 segundos
        setInterval(() => {
            alerta.remove()
        }, 3000);
    }
}