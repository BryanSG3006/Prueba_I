// Obtener el ID del producto de la URL
$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productoId = urlParams.get("id");

    if (productoId) {
        // Lógica para mostrar los detalles del producto
        console.log(`Detalles del producto con ID: ${productoId}`);
        const producto = productos.find((p) => p.id == productoId);
        if (producto) {
            console.table(producto);
            $("#nombre").text(producto.nombre);
            $("#precio").html("&cent;" + producto.precio);
            $("#descripcion").html("<b>Descripción: </b>" + (producto.descripcion ? producto.descripcion : 'Sin descripción'));
            $("#imagen").attr("src", producto.imagen);
            $("#estado").html(`<b>Estado:</b> ${producto.estado}`);
            $("#categoria").text(producto.categoria);
            $("#stock").html(`<b>Stock:</b> ${producto.stock}`);
            $("#tiempoEntrega").html(`<b>Tiempo de entrega:</b> ${producto.tiempoEntrega} días`);
            $("#gastosEnvio").html(`<b>Gastos de envío:</b> &cent;${producto.gastosEnvio}`);
            $("#opcionesEntrega").text(`<b>Opciones de entrega: ${producto.opcionesEntrega}`);
            $("#garantia").html(`<b>Garantía: ${producto.garantia}`);

            // Reseñas
            producto.reseñas.forEach((reseña) => {
                const reseñaItem = document.createElement("div");
                reseñaItem.classList.add("reseña-item");
                reseñaItem.innerHTML = `<b>${reseña.autor}</b>: ${reseña.comentario}`;
                $("#reseñas").append(reseñaItem);
            });

            // Enlace de contacto
            $("#enlaceContacto").attr("href", producto.enlaceContacto).text("Contactar");

            // Información sobre cambios y devoluciones
            $("#informacionCambiosDevoluciones").attr("href", producto.informacionCambiosDevoluciones).text("Cambios y devoluciones");
        }
    }
});