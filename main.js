import data from './data.json' assert {type: 'json'};

/* Trae el contenedor  de las barras */
const container = document.querySelector('.container__data');

/* Creamos una variable que tendra la maxima altura de las barras*/
let alturaMaximaBar = 150;

// Array vacio tendra los precios
const valores = [];

// Recorremos el JSON
data.forEach(evento => {
    // Agregamos el precio a un array vacio
    valores.push(evento.amount);
    // Agregamos al contenedor HTML
    container.innerHTML += `
    <div class="container__data-barra">
        <p class="container__data-precio">$${evento.amount}</p>
        <p class="container__data-dia">${evento.day}</p>
    </div>`;
});

/* Por medio de una funcion escogemos el valor maximo 
    del Array al cual le hicimos .push() */
const valorMaximo = Math.max(...valores);

/* Traemos todas las barras */
let barras = document.querySelectorAll('.container__data-barra');
// Convertimos el nodeList que llega en un Array 
barras =  [...barras];

/* Recorremos cada una de las barras*/
barras.forEach(bar =>{
    /* 

    x = (nuevoValor * 150px) / 52.36 'maximo valor'

    alturaActual = nuevoValor * alturaMaximaBar / valorMaximo;

    */

   /* Traemos el precio en Texto  */
    const precios = bar.childNodes[1].innerText;
    /* Traemos el precio en Texto pero sin el signo '$' */ 
    const nuevoValor = parseFloat(precios.slice(1));
    
    /* Dibujamos la barra mas grande de color Cyan Y preguntamos
       if = el valorMaximo es igual al nuevoValor */
    if (valorMaximo == nuevoValor) {
        bar.style.backgroundColor = 'hsl(186, 34%, 60%)';
    }

    let alturaActual = nuevoValor * alturaMaximaBar / valorMaximo;

    bar.style.height = `${alturaActual}px`
    
    /* Agregamos un evento a las barras*/
    bar.addEventListener('mouseover', event=>{
        let labelPrecio = event.target.childNodes[1];
        console.log(labelPrecio);
        labelPrecio.style.display = 'block';
    })

    /* Agregamos un evento a las barras*/
    bar.addEventListener('mouseout', event=>{
        let labelPrecio = event.target.childNodes[1];
        console.log(labelPrecio);
        labelPrecio.style.display = 'none';
    })
})

