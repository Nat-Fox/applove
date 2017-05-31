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