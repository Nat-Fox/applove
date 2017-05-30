/*
 * Archivo principal de funcionalidad de JS
 */

// Array.from para que reconozca la clase como un arreglo

var fotos = Array.from(document.getElementsByClassName('col-4'));

fotos.forEach(function(foto) {
    foto.addEventListener('click', test);
});




function test() {
    alert('ahdjasd');
}