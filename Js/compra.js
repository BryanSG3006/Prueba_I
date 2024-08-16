let itemIdToRemove = null;
let itemElementToUpdate = null;

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
        text: ` ${name} ha sido agregado al carrito.`,
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

function showDetailShop() {
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
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                    <input min="0" name="quantity" value="${item.quantity}" type="number" onChange="updateCartItemQty(this)"
                                        class="form-control form-control-sm quantity-libro" data-id="${item.id}" />
                                </div>
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                    <p class="mb-0 price-producto">&dollar; ${item.price.toFixed(2)}</p>
                                </div>
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                    <p class="mb-0 subtotal-producto">&dollar; ${subTotal.toFixed(2)}</p>
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
                                    <p class="mb-0 price-producto">&dollar; ${item.price.toFixed(2)}</p>
                                </div>
                                <div class="col-md-2 col-lg-2 col-xl-4">
                                    <p class="mb-0 subtotal-producto">&dollar; ${subTotal.toFixed(2)}</p>
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

// function showInvoice() {
//     let invoiceHTML = "";
//     let cart = JSON.parse(localStorage.getItem('compra')) || [];
//     let total = 0;

//     if (cart.length > 0) {
//         invoiceHTML += `<h2>Factura</h2>
//                         <div class="row mb-4">
//                             <div class="col-md-4 col-lg-4 col-xl-4"><strong>Nombre del Producto</strong></div>
//                             <div class="col-md-2 col-lg-2 col-xl-2"><strong>Cantidad</strong></div>
//                             <div class="col-md-2 col-lg-2 col-xl-2"><strong>Precio</strong></div>
//                             <div class="col-md-2 col-lg-2 col-xl-2"><strong>Subtotal</strong></div>
//                         </div>
//                         <hr class="my-4">`;

//         cart.forEach(function (item) {
//             let subTotal = item.subTotal || 0;
//             if (typeof subTotal !== 'number') {
//                 console.error("subTotal no es un número:", subTotal);
//             }
//             invoiceHTML += `<div class="row mb-4 align-items-center">
//                                 <div class="col-md-4 col-lg-4 col-xl-4">
//                                     <p class="text-muted mb-0">${item.name}</p>
//                                 </div>
//                                 <div class="col-md-2 col-lg-2 col-xl-2">
//                                     <p class="mb-0">${item.quantity}</p>
//                                 </div>
//                                 <div class="col-md-2 col-lg-2 col-xl-2">
//                                     <p class="mb-0">&dollar; ${item.price.toFixed(2)}</p>
//                                 </div>
//                                 <div class="col-md-2 col-lg-2 col-xl-2">
//                                     <p class="mb-0">&dollar; ${subTotal.toFixed(2)}</p>
//                                 </div>
//                             </div>
//                             <hr class="my-4">`;

//             total += subTotal;
//         });

//         invoiceHTML += `<div class="row mb-4">
//                             <div class="col-md-8 col-lg-8 col-xl-8 text-end">
//                                 <h4>Total:</h4>
//                             </div>
//                             <div class="col-md-4 col-lg-4 col-xl-4">
//                                 <h4>&dollar; ${total.toFixed(2)}</h4>
//                             </div>
//                         </div>`;

//         // Mostrar la factura
//         $('#invoice').html(invoiceHTML).show();

//         // Limpiar el carrito
//         localStorage.removeItem('compra');
//         showDetailShop(); // Actualizar la vista del carrito
//     } else {
//         alert('El carrito está vacío.');
//     }
// }


// Inicializa los números si no están en localStorage
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

        invoiceHTML += `<div class="invoice-header">
                            <h1>Factura</h1>
                            <p><strong>Número de Factura:</strong> ${invoiceNumber}</p>
                            <p><strong>Número de Documento:</strong> ${documentNumber}</p>
                        </div>
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
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
                                <td>${item.quantity}</td>
                                <td>&dollar; ${item.price.toFixed(2)}</td>
                                <td>&dollar; ${subTotal.toFixed(2)}</td>
                            </tr>`;

            total += subTotal;
        });

        invoiceHTML += `</tbody>
                        </table>
                        <div class="invoice-total">
                            <h3>Total: &dollar; ${total.toFixed(2)}</h3>
                        </div>
                        <div class="invoice-footer">
                            <p>Gracias por su compra. Para cualquier consulta, contáctenos en [email@example.com].</p>
                        </div>`;

        // Mostrar la factura
        $('#invoice').html(invoiceHTML).show();

        // Limpiar el carrito
        localStorage.removeItem('compra');
        showDetailShop(); // Actualizar la vista del carrito
    } else {
        alert('El carrito está vacío.');
    }
}

