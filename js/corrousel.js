let currentIndex = 0; // Índice de la imagen actual
const posts = document.querySelectorAll('.carousel-post'); // Selecciona todos los elementos del carrusel
const totalPosts = posts.length; // Total de imágenes en el carrusel

// Función para mostrar la imagen actual
function showCurrentPost() {
    posts.forEach((post, index) => {
        post.style.opacity = index === currentIndex ? '1' : '0'; // Cambia la opacidad según el índice actual
    });
    updateDots();
}

// Cambia a la siguiente imagen
function nextPost() {
    currentIndex = (currentIndex + 1) % totalPosts; // Aumenta el índice y resetea al principio si es necesario
    showCurrentPost();
}

// Cambia a la imagen anterior
function prevPost() {
    currentIndex = (currentIndex - 1 + totalPosts) % totalPosts; // Disminuye el índice y resetea al final si es necesario
    showCurrentPost();
}

// Configura el cambio automático cada 3 segundos (3000 ms)
setInterval(nextPost, 3000);

// Configuración de los botones
document.getElementById('nextBtn').addEventListener('click', nextPost);
document.getElementById('prevBtn').addEventListener('click', prevPost);

// Función para actualizar los puntos
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active-dot', index === currentIndex);
    });
}

// Muestra la primera imagen
showCurrentPost();
