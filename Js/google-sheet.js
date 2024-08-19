const scriptUrl = 'https://script.google.com/macros/s/AKfycbzPBLo4J0s8bFKGil7xdZEb05k_lbQs6-PGUgTLqq7aQ0gWsv5tR8XAXpcpK4z_RQoxmg/exec';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms['contact-form'];

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío inmediato del formulario

        if (validateForm()) {
            // Si todas las validaciones pasan, se envía el formulario a Google Sheets
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
        }
    });

    function validateForm() {
        let isValid = true;

        // Validar Nombre Completo
        const fullName = document.getElementById('fullName').value.trim();
        if (fullName === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Error en el nombre',
                text: 'El nombre completo es obligatorio',
                confirmButtonColor: '#d33',
            }).then(() => {
                document.getElementById('fullName').focus();
            });
            isValid = false;
            return isValid;
        }

        // Validar Correo Electrónico
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: 'warning',
                title: 'Error en el correo electrónico',
                text: 'Por favor, ingrese un correo electrónico válido',
                confirmButtonColor: '#d33',
            }).then(() => {
                document.getElementById('email').focus();
            });
            isValid = false;
            return isValid;
        }

        // Validar Contraseña
        const password = document.getElementById('password').value.trim();
        if (password.length < 8) {
            Swal.fire({
                icon: 'warning',
                title: 'Error en la contraseña',
                text: 'La contraseña debe tener al menos 8 caracteres',
                confirmButtonColor: '#d33',
            }).then(() => {
                document.getElementById('password').focus();
            });
            isValid = false;
            return isValid;
        }

        // Validar Teléfono
        const phone = document.getElementById('phone').value.trim();
        const phonePattern = /^\+506 \d{4}-\d{4}$/;
        if (!phonePattern.test(phone)) {
            Swal.fire({
                icon: 'warning',
                title: 'Error en el teléfono',
                text: 'El número de teléfono debe seguir el formato +506 8000-0000',
                confirmButtonColor: '#d33',
            }).then(() => {
                document.getElementById('phone').focus();
            });
            isValid = false;
            return isValid;
        }

        // Validar Talla del Usuario
        const talla = document.getElementById('Talla').value.trim().toUpperCase();
        const validSizes = ['S', 'M', 'L', 'XL'];
        if (!validSizes.includes(talla)) {
            Swal.fire({
                icon: 'warning',
                title: 'Error en la talla',
                text: 'La talla debe ser S, M, L, o XL',
                confirmButtonColor: '#d33',
            }).then(() => {
                document.getElementById('Talla').focus();
            });
            isValid = false;
            return isValid;
        }

        // Validar Fecha
        const date = document.getElementById('date').value.trim();
        if (date === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Error en la fecha',
                text: 'Por favor, seleccione una fecha',
                confirmButtonColor: '#d33',
            }).then(() => {
                document.getElementById('date').focus();
            });
            isValid = false;
            return isValid;
        }

        return isValid;
    }
});