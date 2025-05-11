function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        });
    } else {
        console.error('Formulario de contacto con ID "contactForm" no encontrado.');
    }
});