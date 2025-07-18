document.getElementById('contacto-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('respuesta').textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.";
    this.reset();
});
