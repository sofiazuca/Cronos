'user strict'

const btnRegistrar = document.querySelector('#btn');
const inputISBN = document.querySelector ('#isbn');
const inputTitulo = document.querySelector('#titulo');
const inputPrecio = document.querySelector('#precio');
const inputFecha = document.querySelector('#fecha');
const listaAutores = document.querySelector('#autores');

let validar = (isbn, titulo, precio)


let saludar = () =>{
    let isbn = inputISBN.value;
    let  titulo = inputTitulo.value;
    let precio = inputPrecio.value;
    let fecha = new Date (inputFecha.value);
    let autores = listaAutores.value;
};

console

btnRegistrar.addEventListener ('click', saludar);
