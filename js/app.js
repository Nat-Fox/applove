/*
 * Archivo principal de funcionalidad de JS
 */



// Función que se invoca así misma
(function modalesPorFoto() {
    // Array.from para que reconozca la clase como un arreglo
    var fotos = Array.from(document.getElementsByClassName('img-galery'));
    // Id perteneciente al div donde ubicaremos el modal
    var modalFoto = document.getElementById('work-galery-modal');
    var modalGaleria, close, img;
    fotos.forEach(function(foto) {
        foto.addEventListener('click', function() {
            // Borro todo lo que esta dentro del modal
            modalFoto.innerHTML = '';
            // En modalGaleria crearemos el div que contendra al modal
            modalGaleria = document.createElement('div');
            // Le creamos la clase modal-galeria donde incluiremos la foto, y sus estilos en main.css
            modalGaleria.classList.add('modal-galeria');
            modalGaleria.innerHTML = foto.innerHTML;

            //Hacemos hide el modal para antes del click
            modalFoto.appendChild(modalGaleria);
            modalFoto.classList.remove('hide');

            // La imagen x para cerrar la foto ira en otro div
            close = document.createElement('div');
            // En la clase close se tratan los estilos para la x
            close.classList.add('close');

            // Se agrega la imagen a img con src
            img = document.createElement('img');
            img.setAttribute('src', 'https://www.iconfinder.com/data/icons/geomicons/32/672366-x-128.png');

            // Se apenda la img de x a close y esto al modal foto
            close.appendChild(img);
            modalFoto.appendChild(close);

            // Cuando se haga click en close se escondera el modal nuevamente
            close.addEventListener('click', function() {
                modalFoto.classList.add('hide');
            });

            var close = document.querySelector('#img-galery-modal .close');
            close.addEventListener('click', function() {
                modalFoto.classList.add('hide');
            });
        });
    });
})();


/* Ejemplo blanca sobre modales */
(function main() {
    var boxes = Array.from(document.getElementsByClassName('box-services'));
    var modal = document.getElementById('box-services-modal');
    var bodyModal, close, img;
    boxes.forEach(function(box) {
        box.addEventListener('click', function() {
            // Borro todo lo que esta dentro del modal
            modal.innerHTML = '';
            bodyModal = document.createElement('div');
            bodyModal.classList.add('modal-body');
            bodyModal.innerHTML = box.innerHTML;

            modal.appendChild(bodyModal);
            modal.classList.remove('hide');

            close = document.createElement('div');
            close.classList.add('close');

            img = document.createElement('img');
            img.setAttribute('src', 'https://www.iconfinder.com/data/icons/geomicons/32/672366-x-128.png');

            close.appendChild(img);
            modal.appendChild(close);

            close.addEventListener('click', function() {
                modal.classList.add('hide');
            });

        });
    });

    var close = document.querySelector('#box-services-modal .close');
    close.addEventListener('click', function() {
        modal.classList.add('hide');
    });


})();