let itemIdToRemove = null; // Variable para almacenar el ID del ítem a eliminar
let itemElementToUpdate = null; // Variable para almacenar el input del ítem a actualizar

function addToCart(element) {
    let productoParent = $(element).closest('div.card-related-products');
    let id = element.dataset.id;
    let priceText = $(productoParent).find('.card-text').text();
    let price = parseFloat(priceText.replace(/[^0-9.-]+/g, "")); // Asegúrate de que esto sea un número válido
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
        // No hacer nada si el valor es vacío
        return;
    }

    if (quantity <= 0) {
        itemIdToRemove = idProducto; // Almacena el ID del ítem a eliminar
        itemElementToUpdate = element; // Almacena el input actual
        $('#confirmDeleteModal').modal('show'); // Muestra el modal
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

// Manejar la confirmación de eliminación en el modal
$('#confirmDelete').click(function () {
    if (itemIdToRemove !== null) {
        removeCartItem(itemIdToRemove);
        itemIdToRemove = null; // Resetea el ID del ítem a eliminar
    } else if (itemElementToUpdate !== null) {
        // Si la eliminación fue cancelada pero el valor fue actualizado a 0
        itemElementToUpdate.value = 1; // Reinicia la cantidad a 1
        itemElementToUpdate = null; // Limpia el input
    }

    $('#confirmDeleteModal').modal('hide'); // Oculta el modal
    showDetailShop(); // Actualiza la vista del carrito
});

$('#cancelDelete').click(function () {
    // Reiniciar el valor del input a 1 si se cancela la eliminación
    if (itemElementToUpdate !== null) {
        itemElementToUpdate.value = 1;
        itemElementToUpdate = null; // Limpia el input
    }

    // Ocultar el modal
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
            let subTotal = item.subTotal || 0; // Asegura que subTotal no sea null
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

function confirmRemoveCartItem(id) {
    itemIdToRemove = id; // Almacena el ID del ítem a eliminar
    $('#confirmDeleteModal').modal('show'); // Muestra el modal
}
