function detalleProducto(id) {
  window.location.href = `descripcionD.html?id=${id}`;
}

function displayProducts(data) {
    $("#product-list").html('');
    data.forEach((productos) => {
        const cardBook = `
      <div class="col">
        <div class="card card-related-products">
          <img src="${productos.imagen ? productos.imagen : './img/image-not-found.jpg'}" class="card-img-top" alt="Imagen">
          <div class="card-body">
            <h5 class="card-title">${productos.nombre}</h5>
            <p class="card-text">&cent;${productos.precio}</p>
            <div class="d-grid gap-2">
              <button type="button" class="btn btn-lg  onclick="detalleProducto(${productos.id})">Detalle</button>
            </div>
          </div>
        </div>
      </div>`;
        $("#product-list").append(cardBook);
    });
}

$(document).ready(function () {
    //Listar Productos
    displayProducts(productos)
});