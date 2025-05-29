// ...antes de </body>...

document.addEventListener("DOMContentLoaded", function() {
    // Oculta todos los contenedores al inicio
    const containers = document.querySelectorAll('.container-fluid.text-center');
    containers.forEach(container => {
        container.style.opacity = 0;
        container.style.transform = "translateY(40px)";
        container.style.transition = "opacity 0.7s, transform 0.7s";
    });

    // Función para mostrar contenedor y animar hijos uno a uno
    function showContainer(container) {
        if (container.dataset.visible) return; // Evita repetir animación
        container.dataset.visible = "true";
        container.style.opacity = 1;
        container.style.transform = "translateY(0)";
        // Animar hijos uno por uno
        const animatedItems = container.querySelectorAll('.scroll-animated-from-bottom');
        animatedItems.forEach((item, i) => {
            item.style.opacity = 0;
            item.style.transform = "translateY(40px)";
            item.style.transition = "opacity 0.7s, transform 0.7s";
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = "translateY(0)";
            }, 300 * i);
        });
    }

    // Detecta cuando el contenedor entra en el viewport
    function onScroll() {
        containers.forEach(container => {
            const rect = container.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
                showContainer(container);
            }
        });
    }

    // Inicializa los hijos ocultos
    containers.forEach(container => {
        const animatedItems = container.querySelectorAll('.scroll-animated-from-bottom');
        animatedItems.forEach(item => {
            item.style.opacity = 0;
            item.style.transform = "translateY(40px)";
        });
    });

    window.addEventListener('scroll', onScroll);
    onScroll(); // Por si ya hay algo en pantalla al cargar
});
