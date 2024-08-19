let itemIdToRemove = null;
let itemElementToUpdate = null;
const envioCosto = 5000;

function addToCart(element) {
    let productoParent = $(element).closest('div.card-related-products');
    let id = element.dataset.id;
    let priceText = $(productoParent).find('.card-text').text();
    let price = parseFloat(priceText.replace(/[^0-9.-]+/g, ""));
    let name = $(productoParent).find('.card-title').text();

    let cartItem = {
        id: id,
        name: name,
        price: price,
        quantity: 1,
        subTotal: price
    };

    let cartArray = JSON.parse(localStorage.getItem('compra')) || [];
    let itemIndex = cartArray.findIndex((producto) => producto.id == id);

    if (itemIndex != -1) {
        cartArray[itemIndex].quantity += 1;
        cartArray[itemIndex].subTotal = cartArray[itemIndex].price * cartArray[itemIndex].quantity;
    } else {
        cartArray.push(cartItem);
    }

    localStorage.setItem('compra', JSON.stringify(cartArray));

    Swal.fire({
        icon: 'success',
        title: 'Producto Agregado',
        text: `${name} ha sido agregado al carrito.`,
        confirmButtonText: 'Aceptar'
    });

    showDetailShop2();
}

function removeCartItem(idProducto) {
    let cartArray = JSON.parse(localStorage.getItem('compra')) || [];
    if (cartArray) {
        let index = cartArray.findIndex((obj) => obj.id == idProducto);
        if (index !== -1) {
            cartArray.splice(index, 1);
            localStorage.setItem('compra', JSON.stringify(cartArray));

            Swal.fire({
                icon: 'warning',
                title: 'Producto Eliminado',
                text: 'El producto ha sido eliminado del carrito.',
                confirmButtonText: 'Aceptar'
            });

            showDetailShop();
        }
    }
}

function updateCartItemQty(element) {
    let idProducto = element.dataset.id;
    let quantity = parseInt(element.value);
    let cartArray = JSON.parse(localStorage.getItem('compra')) || [];

    if (isNaN(quantity) || quantity === '') {
        return;
    }

    if (quantity <= 0) {
        itemIdToRemove = idProducto;
        itemElementToUpdate = element;
        $('#confirmDeleteModal').modal('show');
        return;
    }

    if (cartArray) {
        let itemIndex = cartArray.findIndex((obj) => obj.id == idProducto);
        if (itemIndex != -1) {
            cartArray[itemIndex].quantity = quantity;
            cartArray[itemIndex].subTotal = cartArray[itemIndex].price * quantity;
            localStorage.setItem('compra', JSON.stringify(cartArray));
            showDetailShop();
        }
    }
}

$('#confirmDelete').click(function () {
    if (itemIdToRemove !== null) {
        removeCartItem(itemIdToRemove);
        itemIdToRemove = null;
    } else if (itemElementToUpdate !== null) {
        itemElementToUpdate.value = 1;
        itemElementToUpdate = null;
    }

    $('#confirmDeleteModal').modal('hide');
    showDetailShop();
});

$('#cancelDelete').click(function () {
    if (itemElementToUpdate !== null) {
        itemElementToUpdate.value = 1;
        itemElementToUpdate = null;
    }

    $('#confirmDeleteModal').modal('hide');
});

function emptyCart() {
    localStorage.removeItem('compra');
    showDetailShop();
}

function actualizarMetodoEntrega(input) {
    const envioContainer = $("#envioContainer");
    const costoEnvio = $("#envioCosto");

    if (input.value === "envio") {
        envioContainer.show();
        localStorage.setItem("costoEnvio", envioCosto);
    } else if (input.value === "retiro") {
        envioContainer.hide();
        localStorage.removeItem("costoEnvio");
    }
    showDetailShop();
}

function showDetailShop() {
    let cartRowHTML = "";
    let itemCount = 0;
    let total = 0;

    let cart = JSON.parse(localStorage.getItem('compra')) || [];
    let envio = parseFloat(localStorage.getItem("costoEnvio")) || 0;

    if (cart.length > 0) {
        itemCount = cart.length;

        cart.forEach(function (item) {
            let subTotal = item.subTotal || 0;
            cartRowHTML += `<div class="row mb-4 align-items-center">
                                <div class="col-md-4 col-lg-4 col-xl-4">
                                    <p class="text-muted mb-0 name-producto">${item.name}</p>
                                </div>
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                    <input min="0" name="quantity" value="${item.quantity}" type="number" onChange="updateCartItemQty(this)"
                                        class="form-control form-control-sm quantity-libro" data-id="${item.id}" />
                                </div>
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                    <p class="mb-0 price-producto">&cent; ${item.price.toFixed(2)}</p>
                                </div>
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                    <p class="mb-0 subtotal-producto">&cent; ${subTotal.toFixed(2)}</p>
                                </div>
                                <div class="col-md-2 col-lg-2 col-xl-2 text-end">
                                    <button type="button" class="btn btn-outline-danger btn-sm" onclick="confirmRemoveCartItem(${item.id})">
                                        <i class="bi bi-trash-fill"></i>
                                    </button>
                                </div>
                            </div>
                            <hr class="my-4">`;

            total += subTotal;
        });

        if (envio > 0) {
            cartRowHTML += `<div class="row mb-4 align-items-center">
                                <div class="col-md-8 col-lg-8 col-xl-8 text-end">
                                    <p class="text-muted mb-0">Costo de Envío:</p>
                                </div>
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                    <p class="mb-0 envio-cost">&cent; ${envio.toFixed(2)}</p>
                                </div>
                            </div>
                            <hr class="my-4">`;
            total += envio;
        }
    }

    $('#detail').html(cartRowHTML);
    $('#total-items').text(`${itemCount} artículo(s)`);
    $('#total-compra').text(`₡${total.toFixed(2)}`);
}

function showDetailShop2() {
    let cartRowHTML = "";
    let itemCount = 0;
    let total = 0;

    let cart = JSON.parse(localStorage.getItem('compra')) || [];
    if (cart.length > 0) {
        itemCount = cart.length;

        cart.forEach(function (item) {
            let subTotal = item.subTotal || 0;
            if (typeof subTotal !== 'number') {
                console.error("subTotal no es un número:", subTotal);
            }
            cartRowHTML += `<div class="row mb-4 align-items-center">
                                <div class="col-md-4 col-lg-4 col-xl-4">
                                    <p class="text-muted mb-0 name-producto">${item.name}</p>
                                </div>
                                <div class="col-md-2 col-lg-2 col-xl-4">
                                    <p class="mb-0 price-producto">&cent; ${item.price.toFixed(2)}</p>
                                </div>
                                <div class="col-md-2 col-lg-2 col-xl-4">
                                    <p class="mb-0 subtotal-producto">&cent; ${subTotal.toFixed(2)}</p>
                                </div>
                            </div>
                            <hr class="my-4">`;

            total += subTotal;
        });
    }

    $('#detail').html(cartRowHTML);
    $('#total-items').text(`${itemCount} artículo(s)`);
    $('#total-compra').text(`₡${total.toFixed(2)}`);
}

function confirmRemoveCartItem(id) {
    itemIdToRemove = id;
    $('#confirmDeleteModal').modal('show');
}
function initializeInvoiceNumbers() {
    if (!localStorage.getItem('invoiceNumber')) {
        localStorage.setItem('invoiceNumber', '1000'); // Empieza en 1000, por ejemplo
    }
    if (!localStorage.getItem('documentNumber')) {
        localStorage.setItem('documentNumber', 'DOC-0001'); // Empieza en DOC-0001, por ejemplo
    }
}

// Incrementa el número de documento y el número consecutivo
function getNextInvoiceNumbers() {
    let invoiceNumber = parseInt(localStorage.getItem('invoiceNumber')) || 1001;
    let documentNumber = localStorage.getItem('documentNumber') || 'DOC-0000';

    // Incrementa el número consecutivo
    invoiceNumber += 1;
    // Incrementa el número de documento
    let newDocumentNumber = 'DOC-' + ('0000' + (parseInt(documentNumber.split('-')[1]) + 1)).slice(-4);

    // Guarda los nuevos números en localStorage
    localStorage.setItem('invoiceNumber', invoiceNumber.toString());
    localStorage.setItem('documentNumber', newDocumentNumber);

    return {
        invoiceNumber: invoiceNumber.toString(),
        documentNumber: newDocumentNumber
    };
}

function showInvoice() {
    initializeInvoiceNumbers(); // Asegúrate de que los números están inicializados

    let invoiceHTML = "";
    let cart = JSON.parse(localStorage.getItem('compra')) || [];
    let total = 0;

    if (cart.length > 0) {
        let { invoiceNumber, documentNumber } = getNextInvoiceNumbers();

        invoiceHTML += `<div class="invoice-header text-center mb-4">
                            <h1 class="fw-bold">Factura</h1>
                            <p><strong>Número de Factura:</strong> ${invoiceNumber}</p>
                            <p><strong>Número de Documento:</strong> ${documentNumber}</p>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr class="table-primary text-center">
                                        <th>Nombre del Producto</th>
                                        <th>Cantidad</th>
                                        <th>Precio</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>`;

        cart.forEach(function (item) {
            let subTotal = item.subTotal || 0;
            if (typeof subTotal !== 'number') {
                console.error("subTotal no es un número:", subTotal);
            }
            invoiceHTML += `<tr>
                                <td>${item.name}</td>
                                <td class="text-center">${item.quantity}</td>
                                <td class="text-end">&cent; ${item.price.toFixed(2)}</td>
                                <td class="text-end">&cent; ${subTotal.toFixed(2)}</td>
                            </tr>`;

            total += subTotal;
        });

        // Verificar si hay un costo de envío almacenado en localStorage
        let envio = parseFloat(localStorage.getItem("costoEnvio")) || 0;
        if (envio > 0) {
            invoiceHTML += `<tr>
                                <td colspan="3" class="text-end"><strong>Costo de Envío</strong></td>
                                <td class="text-end">&cent; ${envio.toFixed(2)}</td>
                            </tr>`;
            total += envio;
        }

        invoiceHTML += `</tbody>
                        </table>
                        </div>
                        <div class="invoice-total text-end mt-4">
                            <h3>Total: &cent; ${total.toFixed(2)}</h3>
                        </div>
                        <div class="invoice-footer text-center mt-4">
                            <p>Gracias por su compra. Para cualquier consulta, contáctenos en fleycout@gmail.com o mediante nuestro formulario de contacto.</p>
                        </div>`;

        // Mostrar la factura
        $('#invoice').html(invoiceHTML).show();

        // Limpiar el carrito y el costo de envío
        localStorage.removeItem('compra');
        localStorage.removeItem('costoEnvio');
        showDetailShop(); // Actualizar la vista del carrito
    } else {
        alert('El carrito está vacío.');
    }
}

