document.getElementById('fetchButton').addEventListener('click', function () {
    const bin = document.getElementById('binInput').value;
    if (bin.length === 16) {
        fetch(`https://data.handyapi.com/bin/${bin}`)
            .then(response => response.json())
            .then(data => {
                let logo = '';
                if (data.Scheme.toLowerCase() === 'visa') {
                    logo = '<img src="./img/Visa.jpeg" alt="Visa" />';
                } else if (data.Scheme.toLowerCase() === 'mastercard') {
                    logo = '<img src="./img/Mastercard.png" alt="MasterCard" />';
                }

                document.getElementById('result').innerHTML = `
                    <p class="title"></p><p> ${logo}</p>
                    <p class="title">Tipo</p><p>${data.Type}</p>
                    <p class="title">Nivel</p><p>${data.CardTier}</p>
                    
                    <p class="title">Editora/Bank</p><p>${data.Issuer}</p>
                    <p class="title">País</p><p>${data.Country.Name} <img src="https://flagcdn.com/24x18/${data.Country.A2.toLowerCase()}.png" alt="${data.Country.Name}"></p>
                `;

                // Mostrar alerta de éxito con SweetAlert2 y ejecutar showInvoice() al hacer clic en "OK"
                Swal.fire({
                    icon: 'success',
                    title: 'Pago realizado con éxito',
                    text: 'Ya puede ver la factura.',
                    confirmButtonText: 'Ver factura'
                }).then((result) => {
                    if (result.isConfirmed) {
                        showInvoice();
                    }
                });
            })
            .catch(error => {
                document.getElementById('result').innerHTML = `<p>Error al cargar los datos: ${error}</p>`;
            });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Número de tarjeta inválido',
            text: 'Por favor ponga todos los dígitos de su tarjeta.',
            confirmButtonText: 'OK'
        });
    }
});
