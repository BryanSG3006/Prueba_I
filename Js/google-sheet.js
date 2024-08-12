const scriptUrl = 'https://script.google.com/macros/s/AKfycbzPBLo4J0s8bFKGil7xdZEb05k_lbQs6-PGUgTLqq7aQ0gWsv5tR8XAXpcpK4z_RQoxmg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e=> {
    e.preventDefault()
    fetch(scriptUrl, {method:'POST', body: new FormData(form)})
    .then(response => alert("Gracias por contactarnos."))
    .then(() =>{window.location.reload();})
    .catch(error => console.error("Error", error.message))
})