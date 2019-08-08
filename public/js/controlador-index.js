'user strict'

const boton_enviar = document.querySelector('#btn-enviar');
const inputNombre = document.querySelector('#txt_nombre');
const inputEmail = document.querySelector('#txt_email');
const inputFecha = document.querySelector('#txt_fecha');
const comentario = document.querySelector('#txt_area');

let validar = (pnombre, pemail, pfecha, pcomentario) =>{
    let error = false;

    if (pnombre == '') {
        error = true;
        inputNombre.classList.add('input_error')   
    } else {  
        inputNombre.classList.remove('input_error')      
    }

    if (pemail == '') {
        error = true; 
        inputEmail.classList.add('input_error')  
    } else {  
        inputEmail.classList.remove('input_error')    
    }

    if (pcomentario == '') {
        error = true;
       txt_area.classList.add('input_error')   
    } else { 
        txt_area.classList.remove('input_error')     
    }
    if (pfecha == 'Invalid Date') {
        error = true;
       inputFecha.classList.add('input_error')   
    } else { 
        inputFecha.classList.remove('input_error')     
    }

    return error;
};


let saludar = () =>{
    let nombre = inputNombre.value;
    let email = inputEmail.value;
    let fecha = new Date(inputFecha.value);
    let fecha_formateada = fecha.getUTCDate() + '-' + Number (fecha.getUTCMonth() + 1) + '-' + fecha.getFullYear();
    let comentario = txt_area.value;

    let error = validar (nombre, email, fecha, comentario)

    if (!error) {
        console.log(`Hola ${nombre} mucho gusto`);
        console.log (`Su correo es ${email}.`);
        console.log(`Y su fecha de nacimiento es ${fecha_formateada}.`);
        console.log(`Su comentario es: ${comentario}`);
        Swal.fire(
            { //formato JSON
                type: 'success',
                title: 'Se ha enviado su mensaje exitosamente',
                text: 'Nos pondremos en contacto tan pronto como sea posible'
            }
        )
    } else {
        Swal.fire(
            {
                title: 'No se ha enviado su mensaje',
                type: 'warning',
                text: 'Revise los campos resaltados e intentelo de nuevo'
            }
        )
        
    }
 
};


boton_enviar.addEventListener ('click', saludar);

