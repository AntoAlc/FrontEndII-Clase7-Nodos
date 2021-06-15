const a = document.querySelectorAll('.rutas-img');

a.forEach((aa, i) => {
    //const urlImagen = prompt('Ingrese el url de la imagen '+ (i+1)+ ' por favor: ')
    const urlImagen = prompt(`Ingrese la url de la imagen ${(i + 1)} por favor`);

    const imagen = document.createElement('img');
    aa.appendChild(imagen);

    imagen.setAttribute('src', urlImagen);
    imagen.setAttribute('width', '300px');
    aa.setAttribute('href', urlImagen);
    aa.setAttribute('target', '_blank');

});

/* ETAPA 3
- Nodo padre: contenedor
- Nodo hijo repetitivo: .tarjeta
- Explicación:  Seria mejor tener
*/
/*
EJEMPLO:
function crearTarjeta (urlImage){
    const template =`
    <div class="tarjeta">
        <a class="rutas-img"> </a>
    </div>
    `;
    contenedor.innerHTML += template;
}
*/