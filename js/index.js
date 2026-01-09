console.log("Hola Mundo");

function handleClick(servicio) {
    const box = document.getElementById('message-box');
    box.innerText = `Accediendo a: ${servicio}`;
    box.style.display = 'block';
    setTimeout(() => { box.style.display = 'none'; }, 3000);
}

// --- LÓGICA DE RESALTADO AUTOMÁTICO ---


function highlightNext() {
    if (isPaused) return;
    groups.forEach(g => g.classList.remove('active'));
    groups[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % groups.length;
}

setTimeout(() => {
    setInterval(highlightNext, 2500);
    highlightNext();
}, 4000);

const svgElement = document.getElementById('main-svg');
svgElement.addEventListener('mouseenter', () => {
    isPaused = true;
    groups.forEach(g => g.classList.remove('active'));
});
svgElement.addEventListener('mouseleave', () => {
    isPaused = false;
});


/* VARIABLES Y COMPONENTES */
const groups = document.querySelectorAll('.sphere-group');
let currentIndex = 0;
let isPaused = false;

/* FUNCIONES */


const menuBtn = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');

menuBtn.addEventListener('click', () => {
  const isActive = menuOverlay.classList.toggle('active');
  menuBtn.classList.toggle('is-active', isActive);
});



/* EVENTOS */

document.addEventListener('DOMContentLoaded', function() {
            // Configuración del observador
            const observerOptions = {
                threshold: 0.15, // El elemento se activa cuando el 15% es visible
                rootMargin: "0px 0px -50px 0px" // Un pequeño margen para suavizar la entrada
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Opcional: Dejar de observar si solo quieres que se anime una vez
                        // observer.unobserve(entry.target); 
                    } else {
                        // Si quieres que se vuelva a animar al subir y bajar, descomenta esto:
                        // entry.target.classList.remove('active'); 
                    }
                });
            }, observerOptions);

            // Seleccionar todos los elementos con clases de animación
            const hiddenElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
            hiddenElements.forEach((el) => observer.observe(el));
        });








        /* EFECTO */



        // Variables de estado
        const homeScreen = document.getElementById('home-screen');
        let currentActiveScreen = homeScreen;
        let isAnimating = false;

        // Diccionario: Nombre SVG -> ID Sección HTML
        const sectionMap = {
            'Páginas web': 'sec-web',
            'Campañas y activaciones': 'sec-campanas',
            'Estrategia Digital': 'sec-estrategia',
            'Branding': 'sec-branding',
            'Investigación de mercados': 'sec-investigacion',
            // Mapeamos los faltantes al genérico
            'Cursos': 'sec-generic',
            'Redes sociales': 'sec-generic',
            'Conceptualización gráfica': 'sec-generic'
        };

        function handleClick(sectionName) {
            if (isAnimating) return;

            const targetId = sectionMap[sectionName];
            const nextScreen = document.getElementById(targetId);

            if (!nextScreen) {
                console.error("No se encontró sección para:", sectionName);
                return;
            }

            // Si es la genérica, actualizamos el título dinámicamente
            if (targetId === 'sec-generic') {
                document.getElementById('generic-title').innerText = sectionName;
            }

            runTransition(homeScreen, nextScreen, 'forward');
            currentActiveScreen = nextScreen;
        }

        function goBack() {
            if (isAnimating) return;
            // Volvemos siempre al home
            runTransition(currentActiveScreen, homeScreen, 'back');
            currentActiveScreen = homeScreen;
        }

        function runTransition(currentEl, nextEl, direction) {
            isAnimating = true;
            
            // 1. Preparar la siguiente pantalla
            nextEl.style.display = 'block';
            nextEl.classList.add('active');

            // 2. Definir clases
            let enterClass, leaveClass;

            if (direction === 'forward') {
                enterClass = 'zoom-enter';
                leaveClass = 'zoom-leave';
            } else {
                enterClass = 'zoom-back-enter';
                leaveClass = 'zoom-back-leave';
            }

            // 3. Aplicar clases
            nextEl.classList.add(enterClass);
            currentEl.classList.add(leaveClass);

            // 4. Limpieza (debe coincidir con la duración CSS 0.6s)
            setTimeout(() => {
                nextEl.classList.remove(enterClass);
                currentEl.classList.remove(leaveClass, 'active');
                currentEl.style.display = 'none';
                
                isAnimating = false;
            }, 600);
        }