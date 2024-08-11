document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los elementos de colapso dentro del acordeón
    var accordionElements = document.querySelectorAll('.accordion-collapse');

    accordionElements.forEach(function (accordionElement) {
        accordionElement.addEventListener('show.bs.collapse', function () {
            var button = accordionElement.previousElementSibling.querySelector('.accordion-button');
            button.classList.add('custom');
        });

        accordionElement.addEventListener('hide.bs.collapse', function () {
            var button = accordionElement.previousElementSibling.querySelector('.accordion-button');
            button.classList.remove('custom');
        });
    });
});
