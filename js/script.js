// Efecto simple para revelar datos o scroll suave
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portal Educativo cargado.");

    // Ejemplo: Alerta al entrar a una unidad (opcional)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#3498db';
        });
    });
});