













document.addEventListener('DOMContentLoaded', () => {
    const singleLearnMoreButton = document.getElementById('single-learn-more-btn');
    const closeInfoButtons = document.querySelectorAll('.close-info-btn');
    const radioButtons = document.querySelectorAll('#slider input[type="radio"]');
    const infoOverlays = document.querySelectorAll('.info-overlay');

    // Function to hide all info overlays
    function hideAllInfoOverlays() {
        infoOverlays.forEach(overlay => {
            overlay.classList.remove('active');
        });
    }

    // Event listener for the single "Conocer más" button
    if (singleLearnMoreButton) {
        singleLearnMoreButton.addEventListener('click', () => {
            let checkedRadioId = null;

            // Find the currently checked radio button
            radioButtons.forEach(radio => {
                if (radio.checked) {
                    checkedRadioId = radio.id;
                }
            });

            if (checkedRadioId) {
                // Construct the ID of the target info overlay
                // Assuming radio IDs are s1, s2, etc. and info overlay IDs are info-slide1, info-slide2, etc.
                const targetInfoId = 'info-' + checkedRadioId.replace('s', 'slide'); // s1 -> info-slide1

                const targetInfoOverlay = document.getElementById(targetInfoId);

                if (targetInfoOverlay) {
                    hideAllInfoOverlays(); // Hide any currently open overlay
                    targetInfoOverlay.classList.add('active'); // Show the target overlay
                } else {
                    console.error('No info overlay found for ID:', targetInfoId);
                    // Optionally, display a message to the user
                }
            } else {
                 console.warn('No radio button is checked.');
                 // Optionally, display a message to the user
            }
        });
    }


    // Event listeners for close buttons
    closeInfoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const infoOverlay = button.closest('.info-overlay'); // Find the parent overlay
            if (infoOverlay) {
                infoOverlay.classList.remove('active'); // Hide the overlay
            }
        });
    });

    // Optional: Close overlay when clicking outside the info-content
    document.querySelectorAll('.info-overlay').forEach(overlay => {
        overlay.addEventListener('click', (event) => {
            // Check if the click was directly on the overlay, not inside info-content
            if (event.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });
});







//contenido fluir

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los divs principales
  const containers = document.querySelectorAll('.container-fluid.text-center');

  containers.forEach(container => {
    // Oculta el contenedor principal
    container.style.opacity = 0;
    container.style.transition = "opacity 1s";

    // Oculta los elementos animados internos
    const animatedItems = container.querySelectorAll('.scroll-animated-from-bottom');
    animatedItems.forEach(item => {
      item.style.opacity = 0;
      item.style.transform = "translateY(40px)";
      item.style.transition = "opacity 0.8s, transform 0.5s";
    });
  });

  // Observer para mostrar el contenedor y luego los elementos animados escalonados
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        container.style.opacity = 1;

        // Animación escalonada para los elementos internos
        const animatedItems = container.querySelectorAll('.scroll-animated-from-bottom');
        animatedItems.forEach((item, idx) => {
          setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
          }, idx * 450); // 250ms de diferencia entre cada uno
        });

        observer.unobserve(container); // Solo una vez
      }
    });
  }, {
    threshold: 0.2
  });

  containers.forEach(container => {
    observer.observe(container);
  });
});
// ...código existente...



// filepath: c:\Users\usuario\Documents\My Proyecto\index.html
document.addEventListener("DOMContentLoaded", function() {
    const btnFlora = document.getElementById('btnFlora');
    const btnFauna = document.getElementById('btnFauna');
    const floraContent = document.getElementById('floraContent');
    const faunaContent = document.getElementById('faunaContent');

    btnFlora.addEventListener('click', function() {
        floraContent.style.display = 'block';
        faunaContent.style.display = 'none';
        btnFlora.classList.add('active');
        btnFauna.classList.remove('active');
    });

    btnFauna.addEventListener('click', function() {
        faunaContent.style.display = 'block';
        floraContent.style.display = 'none';
        btnFauna.classList.add('active');
        btnFlora.classList.remove('active');
    });
});


