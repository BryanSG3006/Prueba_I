google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

// Cargar los datos desde un archivo JSON
async function cargarDatos() {
  try {
    const respuesta = await fetch('./json/Grafico.json'); // Asegúrate de que 'grafico.json' esté en la misma carpeta que tu HTML
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error('Error al cargar el archivo JSON:', error);
    return null;
  }
}

// Función para crear y dibujar el gráfico
async function drawChart() {
  const datos = await cargarDatos();

  if (datos) {
    // Ordenar los productos por popularidad en orden descendente
    datos.sort((a, b) => b.sales - a.sales);

    // Crear el array para Google Charts
    const dataArray = [['Producto', 'Popularidad']];
    datos.forEach(producto => {
      dataArray.push([producto.title, producto.sales]);
    });

    // Convertir el array en un DataTable de Google Charts
    const data = google.visualization.arrayToDataTable(dataArray);

    // Configuración del gráfico
    const options = {
      title: 'Popularidad de nuestros productos',
      is3D: true,
      backgroundColor: '#f5e4dc', // Opcional: Ajustar el fondo
      legend: { position: 'bottom' }
    };

    // Dibujar el gráfico
    const chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
  }
}

// Redibujar el gráfico al cambiar el tamaño de la ventana
window.onresize = function () {
  drawChart();
};