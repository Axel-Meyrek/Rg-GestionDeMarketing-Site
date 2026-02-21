console.log("Hola Mundo");

/* VARIABLES Y COMPONENTES */
const groups = document.querySelectorAll('.sphere-group');
let currentIndex = 0;
let isPaused = false;

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
                threshold: 0.1,
                rootMargin: "0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
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
            'Investigación de mercados': 'sec-investigacion',
            'Naming, diseño y producción': 'sec-branding',
            'Diseño Web': 'sec-web',
            'Gestión de redes sociales': 'sec-redes',
            'Cursos y capacitación': 'sec-cursos'
        };

        function handleClick(sectionName) {
            if (isAnimating) return;

            const targetId = sectionMap[sectionName];
            const nextScreen = document.getElementById(targetId);

            if (!nextScreen) {
                console.error("No se encontró sección para:", sectionName);
                return;
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

        // Fallback: forzar activación de secciones reveal tras 5 segundos
        setTimeout(() => {
            document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
                if (!el.classList.contains('active')) {
                    el.classList.add('active');
                }
            });
        }, 5000);


        /* ===========================
           GESTIÓN DE REDES SOCIALES - CLIENTES
           =========================== */

        const redesProyectos = {
            proyecto1: {
                nombre: "Cliente 1",
                desc: "Gestión integral de redes sociales para potenciar la presencia digital de la marca, incluyendo creación de contenido y estrategia de publicación.",
                imgs: [
                    "./img/redesSociales/proyecto1/proyecto1-1.webp",
                    "./img/redesSociales/proyecto1/proyecto1-2.webp",
                    "./img/redesSociales/proyecto1/proyecto1-3.webp",
                    "./img/redesSociales/proyecto1/proyecto1-4.webp",
                ],
                // IDs de YouTube Shorts (parte después de /shorts/ en la URL)
                videos: []
            },
            proyecto2: {
                nombre: "Cliente 2",
                desc: "Desarrollo de campañas publicitarias en redes sociales con enfoque en engagement y conversión de audiencia objetivo.",
                imgs: [
                    "./img/redesSociales/proyecto2/proyecto2-1.webp",
                    "./img/redesSociales/proyecto2/proyecto2-2.webp",
                    "./img/redesSociales/proyecto2/proyecto2-3.webp",
                    "./img/redesSociales/proyecto2/proyecto2-4.webp",
                    "./img/redesSociales/proyecto2/proyecto2-5.webp",
                    "./img/redesSociales/proyecto2/proyecto2-6.webp",
                    "./img/redesSociales/proyecto2/proyecto2-7.webp",
                    "./img/redesSociales/proyecto2/proyecto2-8.webp",
                ],
                videos: [
                    "Mv_exXyVVtM",
                    "sy5s0U08lPY",
                ]
            },
            proyecto3: {
                nombre: "Cliente 3",
                desc: "Estrategia de contenido visual y community management para fortalecer la identidad de marca en plataformas digitales.",
                imgs: [
                    "./img/redesSociales/proyecto3/proyecto3-1.webp",
                    "./img/redesSociales/proyecto3/proyecto3-2.webp",
                    "./img/redesSociales/proyecto3/proyecto3-3.webp",
                    "./img/redesSociales/proyecto3/proyecto3-4.webp",
                ],
                videos: [
                    "WZmUABtlEr4",
                ]
            },
            proyecto4: {
                nombre: "Cliente 4",
                desc: "Planificación y ejecución de estrategia digital integral: gestión de comunidad, contenido de marca y análisis de métricas para maximizar el alcance orgánico.",
                imgs: [
                    "./img/redesSociales/proyecto4/proyecto4-1.webp",
                    "./img/redesSociales/proyecto4/proyecto4-2.webp",
                    "./img/redesSociales/proyecto4/proyecto4-3.webp",
                    "./img/redesSociales/proyecto4/proyecto4-4.webp",
                ],
                videos: [
                    "QgN12LDq8Qc",
                    "ycP9dZzCP2E",
                ]
            }
        };

        const redesFolders = document.querySelectorAll('.cliente-card');
        const redesPanel = document.getElementById('redes-project-panel');
        const redesTitle = document.getElementById('redes-project-title');
        const redesDesc = document.getElementById('redes-project-desc');
        const redesGallery = document.getElementById('redes-project-gallery');
        const redesVideosSection = document.getElementById('redes-project-videos-section');
        const redesVideos = document.getElementById('redes-project-videos');
        const redesCloseBtn = redesPanel ? redesPanel.querySelector('.redes-project__close') : null;

        function openRedesProject(projectKey) {
            const project = redesProyectos[projectKey];
            if (!project) return;

            if (redesTitle) redesTitle.textContent = project.nombre;
            redesDesc.textContent = project.desc;

            // Galería de imágenes (2 columnas)
            redesGallery.innerHTML = '';
            project.imgs.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = project.nombre;
                img.loading = 'lazy';
                redesGallery.appendChild(img);
            });

            // Videos verticales estilo TikTok (YouTube Shorts via lite-youtube)
            redesVideos.innerHTML = '';
            const videoList = project.videos || [];
            if (videoList.length > 0) {
                videoList.slice(0, 2).forEach(videoId => {
                    const wrap = document.createElement('div');
                    wrap.className = 'redes-project__video-wrap';
                    const lyt = document.createElement('lite-youtube');
                    lyt.setAttribute('videoid', videoId);
                    lyt.setAttribute('params', 'rel=0&playsinline=1');
                    wrap.appendChild(lyt);
                    redesVideos.appendChild(wrap);
                });
                redesVideosSection.style.display = '';
            } else {
                redesVideosSection.style.display = 'none';
            }

            redesPanel.style.display = 'block';
            redesPanel.style.animation = 'none';
            redesPanel.offsetHeight; // force reflow
            redesPanel.style.animation = '';
        }

        function closeRedesProject() {
            redesPanel.style.display = 'none';
            redesFolders.forEach(f => f.classList.remove('active'));
        }

        redesFolders.forEach(folder => {
            folder.addEventListener('click', () => {
                const projectKey = folder.dataset.project;
                const wasActive = folder.classList.contains('active');

                redesFolders.forEach(f => f.classList.remove('active'));

                if (wasActive) {
                    closeRedesProject();
                } else {
                    folder.classList.add('active');
                    openRedesProject(projectKey);
                }
            });
        });

        if (redesCloseBtn) {
            redesCloseBtn.addEventListener('click', closeRedesProject);
        }