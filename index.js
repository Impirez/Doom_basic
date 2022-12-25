const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#btncalcular');
const resultado = document.querySelector('#result') 

boton.addEventListener('click', sumarInputValue)//ejecutamos la funcion sin la necesidad del onclick="" en el documento HTML

function sumarInputValue(){
    const sumaInput = Number(input1.value) + Number(input2.value);
    resultado.innerText = "Resultado: " + sumaInput;
}

// form.addEventListener('submit', sumarInputValue)

// function sumarInputValue(event){
//     console.log({event});
//     event.preventDefault();
//     const sumaInput = Number(input1.value) + Number(input2.value);
//     resultado.innerText = "Resultado: " + sumaInput;
// }