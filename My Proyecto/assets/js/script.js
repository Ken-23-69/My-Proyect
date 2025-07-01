

    class InteractiveGallery {
    constructor() {
        this.currentIndex = 0;
        this.totalItems = 0;
        this.autoSlideInterval = null;
        this.isVisible = false;
        this.isModalOpen = false;
        this.institutions = [
            {
                name: "Universidad de Harvard",
                image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Harvard es una universidad privada de investigación ubicada en Cambridge, Massachusetts. Fundada en 1636, es la institución de educación superior más antigua de los Estados Unidos y una de las más prestigiosas del mundo. Harvard ha educado a ocho presidentes estadounidenses y más de 150 premios Nobel.",
                founded: "1636",
                students: "31,566",
                ranking: "#1 Mundial"
            },
            {
                name: "Instituto de Tecnología de Massachusetts",
                image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "El MIT es una universidad privada de investigación ubicada en Cambridge, Massachusetts. Es conocida mundialmente por su excelencia en ciencias, tecnología, ingeniería y matemáticas. Ha sido pionera en el desarrollo de tecnologías revolucionarias y ha producido numerosos emprendedores exitosos.",
                founded: "1861",
                students: "11,858",
                ranking: "#2 Mundial"
            },
            {
                name: "Universidad de Stanford",
                image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Stanford es una universidad privada de investigación ubicada en California. Es reconocida por su proximidad a Silicon Valley y su fuerte enfoque en la innovación y el emprendimiento. Ha sido cuna de muchas empresas tecnológicas importantes y cuenta con uno de los fondos de dotación más grandes del mundo.",
                founded: "1885",
                students: "17,249",
                ranking: "#3 Mundial"
            },
            {
                name: "Universidad de Oxford",
                image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Oxford es la universidad más antigua del mundo de habla inglesa, ubicada en Inglaterra. Con una rica historia que se remonta al siglo XII, Oxford ha sido el hogar de brillantes mentes y ha contribuido significativamente al avance del conocimiento en todas las disciplinas académicas.",
                founded: "1096",
                students: "24,515",
                ranking: "#4 Mundial"
            },
            {
                name: "Universidad de Cambridge",
                image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Cambridge es una universidad pública de investigación ubicada en Inglaterra. Fundada en 1209, es la segunda universidad más antigua del mundo de habla inglesa. Ha producido más premios Nobel que cualquier otra institución y es reconocida por su excelencia académica en todas las disciplinas.",
                founded: "1209",
                students: "25,000",
                ranking: "#5 Mundial"
            },
            {
                name: "Universidad de Yale",
                image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Yale es una universidad privada de investigación ubicada en Connecticut. Es conocida por su sistema de colegios residenciales únicos y su fuerte tradición en artes liberales. Ha educado a cinco presidentes estadounidenses y numerosos líderes mundiales en diversos campos.",
                founded: "1701",
                students: "13,433",
                ranking: "#6 Mundial"
            },
            {
                name: "Universidad de Princeton",
                image: "https://images.pexels.com/photos/1496192/pexels-photo-1496192.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Princeton es una universidad privada de investigación ubicada en Nueva Jersey. Es reconocida por su hermoso campus, su riguroso programa académico y su fuerte enfoque en la educación de pregrado. Tiene una de las dotaciones per cápita más altas del mundo.",
                founded: "1746",
                students: "5,428",
                ranking: "#7 Mundial"  
            },
            {
                name: "Universidad de Columbia",
                image: "https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Columbia es una universidad privada de investigación ubicada en Nueva York. Es miembro de la Ivy League y hogar de la Escuela de Periodismo de Columbia, que otorga los prestigiosos premios Pulitzer. Su ubicación en Manhattan ofrece oportunidades únicas para estudiantes e investigadores.",
                founded: "1754",
                students: "33,413",
                ranking: "#8 Mundial"
            },
            {
                name: "Universidad de Chicago",
                image: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "La Universidad de Chicago es una universidad privada de investigación conocida por su riguroso ambiente académico y su enfoque en el pensamiento crítico. Ha sido pionera en muchas disciplinas académicas y ha producido numerosos premios Nobel, especialmente en economía.",
                founded: "1890",
                students: "17,834",
                ranking: "#9 Mundial"
            },
            {
                name: "Universidad de Pennsylvania",
                image: "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "UPenn es una universidad privada de investigación ubicada en Filadelfia. Es miembro de la Ivy League y hogar de la prestigiosa Wharton School of Business. La universidad es conocida por su fuerte enfoque en la aplicación práctica del conocimiento académico.",
                founded: "1740",
                students: "28,201",
                ranking: "#10 Mundial"
            },
            {
                name: "Instituto Tecnológico de Californi",
                image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Caltech es una universidad privada de investigación especializada en ciencia e ingeniería. A pesar de su pequeño tamaño, ha producido un número desproporcionadamente alto de premios Nobel y es líder mundial en investigación científica y tecnológica.",
                founded: "1891",
                students: "2,397",
                ranking: "#11 Mundial"
            }
        ];
        
        this.init();
    }

    init() {
        this.galleryTrack = document.getElementById('galleryTrack');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.learnMoreBtn = document.getElementById('learnMoreBtn');
        this.modalOverlay = document.getElementById('modalOverlay');
        this.modalClose = document.getElementById('modalClose');
        this.indicatorsContainer = document.getElementById('galleryIndicators');
        this.gallerySection = document.querySelector('.gallery-section');
        
        this.totalItems = this.galleryTrack.children.length;
        
        this.createIndicators();
        this.updateIndicators();
        this.bindEvents();
        this.setupIntersectionObserver();
        this.updateGallery(); // Asegurar posición inicial correcta
    }

    createIndicators() {
        this.indicatorsContainer.innerHTML = ''; // Limpiar indicadores existentes
        for (let i = 0; i < this.totalItems; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            indicator.addEventListener('click', () => this.goToSlide(i));
            this.indicatorsContainer.appendChild(indicator);
        }
    }

    updateIndicators() {
        const indicators = this.indicatorsContainer.children;
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.toggle('active', i === this.currentIndex);
        }
    }

    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        this.learnMoreBtn.addEventListener('click', () => this.openModal());
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) {
                this.closeModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
            if (e.key === 'Escape') this.closeModal();
            if (e.key === 'Enter' || e.key === ' ') {
                if (document.activeElement === this.learnMoreBtn) {
                    this.openModal();
                }
            }
        });

        // Touch support for mobile
        let startX = 0;
        let endX = 0;

        this.galleryTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.galleryTrack.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
        });

        // Pausar auto-slide cuando el usuario interactúa
        this.gallerySection.addEventListener('mouseenter', () => this.pauseAutoSlide());
        this.gallerySection.addEventListener('mouseleave', () => this.resumeAutoSlide());
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.3, // La galería debe estar al menos 30% visible
            rootMargin: '0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === this.gallerySection) {
                    this.isVisible = entry.isIntersecting;
                    
                    if (this.isVisible && !this.isModalOpen) {
                        this.startAutoSlide();
                    } else {
                        this.stopAutoSlide();
                    }
                }
            });
        }, observerOptions);

        this.observer.observe(this.gallerySection);
    }

    goToSlide(index) {
        // Validar que el índice esté dentro del rango
        if (index < 0 || index >= this.totalItems) {
            return;
        }
        
        this.currentIndex = index;
        this.updateGallery();
        this.updateIndicators();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.totalItems;
        this.updateGallery();
        this.updateIndicators();
    }

    previousSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
        this.updateGallery();
        this.updateIndicators();
    }

    updateGallery() {
        // Asegurar que currentIndex esté dentro del rango válido
        this.currentIndex = Math.max(0, Math.min(this.currentIndex, this.totalItems - 1));
        
        const translateX = -this.currentIndex * 100;
        this.galleryTrack.style.transform = `translateX(${translateX}%)`;
    }

    openModal() {
        const institution = this.institutions[this.currentIndex];
        
        document.getElementById('modalImage').src = institution.image;
        document.getElementById('modalTitle').textContent = institution.name;
        document.getElementById('modalDescription').textContent = institution.description;
        document.getElementById('modalFounded').textContent = institution.founded;
        document.getElementById('modalStudents').textContent = institution.students;
        document.getElementById('modalRanking').textContent = institution.ranking;
        
        this.modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.isModalOpen = true;
        
        // Detener auto-slide cuando se abre el modal
        this.stopAutoSlide();
        
        // Focus management for accessibility
        this.modalClose.focus();
    }

    closeModal() {
        this.modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        this.isModalOpen = false;
        this.learnMoreBtn.focus();
        
        // Reanudar auto-slide si la galería es visible
        if (this.isVisible) {
            this.startAutoSlide();
        }
    }

    startAutoSlide() {
        // Solo iniciar si no hay un intervalo activo y las condiciones son correctas
        if (!this.autoSlideInterval && this.isVisible && !this.isModalOpen) {
            this.autoSlideInterval = setInterval(() => {
                // Verificar condiciones antes de cada slide
                if (this.isVisible && !this.isModalOpen) {
                    this.nextSlide();
                } else {
                    this.stopAutoSlide();
                }
            }, 4000); // Intervalo de 4 segundos
        }
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }

    pauseAutoSlide() {
        this.stopAutoSlide();
    }

    resumeAutoSlide() {
        // Solo reanudar si la galería es visible y el modal no está abierto
        if (this.isVisible && !this.isModalOpen) {
            this.startAutoSlide();
        }
    }
}

// Initialize the gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const gallery = new InteractiveGallery();
    
    // Add intersection observer for smooth animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe gallery items for scroll animations
    document.querySelectorAll('.gallery-item').forEach(item => {
        animationObserver.observe(item);
    });
});

// Add smooth scroll behavior for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Performance optimization: Preload images
function preloadImages() {
    const institutions = [
        "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1496192/pexels-photo-1496192.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800"
    ];
    
    institutions.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Start preloading images after a short delay
setTimeout(preloadImages, 1000);
















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


