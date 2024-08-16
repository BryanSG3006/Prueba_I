const scriptUrl = 'https://script.google.com/macros/s/AKfycbzPBLo4J0s8bFKGil7xdZEb05k_lbQs6-PGUgTLqq7aQ0gWsv5tR8XAXpcpK4z_RQoxmg/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
        .then(response => {
            Swal.fire({
                icon: 'success',
                title: '¡Enviado!',
                text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
                confirmButtonColor: '#026852',
                customClass: {
                    confirmButton: 'btn btn-lg btn-success',
                },
                buttonsStyling: false
            });
        })
        .then(() => {
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.',
                confirmButtonColor: '#d33',
                customClass: {
                    confirmButton: 'btn btn-lg btn-danger',
                },
                buttonsStyling: false
            });
            console.error("Error", error.message);
        });
});
