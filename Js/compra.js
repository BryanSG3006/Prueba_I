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
    console.log(JSON.parse(localStorage.getItem('compra')));
    $.notify("Producto Agregado : " + name, "success");
}


function removeCartItem(idProducto) {
    let cartArray = JSON.parse(localStorage.getItem('compra')) || [];
    if (cartArray) {
        let index = cartArray.findIndex((obj) => obj.id == idProducto);
        if (index !== -1) {
            cartArray.splice(index, 1);
            localStorage.setItem('compra', JSON.stringify(cartArray));
            $.notify("Producto Eliminado de la Compra", "warn");
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
        // Mostrar el modal de confirmación
        $('#confirmDeleteModal').modal('show');

        // Almacena el ID y el input actual en los botones del modal
        $('#confirmDelete').data('idProducto', idProducto);
        $('#confirmDelete').data('element', element);

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
    let idProducto = $(this).data('idProducto');
    let element = $(this).data('element');

    removeCartItem(idProducto);

    // Ocultar el modal después de la acción
    $('#confirmDeleteModal').modal('hide');
});

$('#cancelDelete').click(function () {
    // Reiniciar el valor del input a 1 si se cancela la eliminación
    let element = $('#confirmDelete').data('element');
    element.value = 1;

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
            cartRowHTML += `<div class="row mb-4 d-flex justify-content-between align-items-center">
                                <div class="col-md-3 col-lg-3 col-xl-3">
                                  <h6 class="text-muted name-producto">${item.name}</h6>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                  <input min="0" name="quantity" value="${item.quantity}" type="number" onChange="updateCartItemQty(this)"
                                    class="form-control form-control-sm quantity-producto" data-id="${item.id}" />
                                </div>
                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                  <h6 class="mb-0 price-producto">&cent; ${item.price.toFixed(2)}</h6>
                                </div>
                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                  <h6 class="mb-0 subtotal-producto">&cent; ${subTotal.toFixed(2)}</h6>
                                </div>
                                <div class="col-md-1 col-lg-1 col-xl-1 ">
                                  <button type="button" class="btn btn-secondary"><i class="bi bi-trash2-fill" onclick="removeCartItem(${item.id})"></i></button>
                                </div>
                              </div>
                              <hr class="my-4">`;

            total += subTotal;
        });
    }

    $('#detail').html(cartRowHTML);
    $('#total-items').text(itemCount);
    $('#total-compra').text("₡" + total.toFixed(2));
}
