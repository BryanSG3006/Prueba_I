function detalleProducto(id) {
  window.location.href = `descripcionD.html?id=${id}`;
}
function displayProducts(data, categoria = '') {
  $("#product-list").html('');
  data.forEach((producto) => {
    if (categoria === '' || producto.categoria.toLowerCase().includes(categoria.toLowerCase())) {
      const cardBook = `
              <div class="col">
                <div class="card card-related-products">
                  <img src="${producto.imagen ? producto.imagen : './img/image-not-found.jpg'}" class="card-img-top" alt="Imagen">
                  <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">&cent;${producto.precio}</p>
                    <div class="d-grid gap-2">
                      <button type="button" class="btn btn-lg" onclick="detalleProducto(${producto.id})">Detalle</button>
                      <button type="button" class="btn btn-lg" onclick="addToCart(this)" data-id="${producto.id}">Comprar</button>
                    </div>
                  </div>
                </div>
              </div>`;
      $("#product-list").append(cardBook);
    }
  });
}

function filterProducts() {
  var input = document.getElementById('search-input').value.toLowerCase();
  displayProducts(productos, input);
  return false; 
}



$(document).ready(function () {
  //Listar Productos
  displayProducts(productos);
});
