$( document ).ready(function() {
    Swal.fire({
        imageUrl: 'images/festival6.jpg',
        imageWidth: '100%',
        imageHeight: '100%',
        imageAlt: 'Custom image',
        background:' #0aa28e ',
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: true,
        allowEnterKey: true,

        customClass: {
            imageUrl: 'imgalert-class',
        },

        showConfirmButton: false,
        showCloseButton: 'true',
        closeButtonAriaLabel: 'Cerrar Alerta',


        
        

    })
});