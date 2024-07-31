google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Camisas',     11],
          ['Gorras',      2],
          ['Gorros',  2],
          ['Sudaderas', 2]
        ]);

        var options = {
          title: 'Popularidad de productos',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }