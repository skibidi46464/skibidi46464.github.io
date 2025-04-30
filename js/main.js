// Script principale per il portfolio di Fabio Siani

// Attendi che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', function() {
    // Riferimenti agli elementi DOM
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Funzione per il menu mobile
    function mobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
    
    // Aggiungi event listener al pulsante hamburger
    hamburger.addEventListener('click', mobileMenu);
    
    // Chiudi il menu mobile quando si clicca su un link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Cambia lo stile dell'header durante lo scroll
    function scrollHeader() {
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
    
    // Aggiungi event listener per lo scroll
    window.addEventListener('scroll', scrollHeader);
    
    // Funzione per attivare il link di navigazione corrispondente alla sezione visibile
    function highlightNavLink() {
        let scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Aggiungi event listener per lo scroll per evidenziare i link di navigazione
    window.addEventListener('scroll', highlightNavLink);
    
    // Funzione per animare gli elementi quando diventano visibili
    function animateOnScroll() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('visible');
            }
        });
    }
    
    // Aggiungi event listener per lo scroll per le animazioni
    window.addEventListener('scroll', animateOnScroll);
    // Esegui anche all'avvio per gli elementi già visibili
    animateOnScroll();
    
    // Funzione per animare le barre delle competenze
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (barPosition < windowHeight - 50) {
                const width = bar.getAttribute('style').match(/width: (\d+)%/)[1];
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 100);
            }
        });
    }
    
    // Aggiungi event listener per lo scroll per le barre delle competenze
    window.addEventListener('scroll', animateSkillBars);
    
    // Effetto di digitazione per il testo nella home
    const typingText = document.querySelector('.typing-text');
    const textToType = typingText.textContent;
    typingText.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < textToType.length) {
            typingText.textContent += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Avvia l'effetto di digitazione dopo un breve ritardo
    setTimeout(typeWriter, 1000);
    
    // Effetto parallasse per la sezione home
    const homeSection = document.querySelector('#home');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        homeSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
    
    // Animazione per le timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function animateTimeline() {
        timelineItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemPosition < windowHeight - 50) {
                item.classList.add('visible');
            }
        });
    }
    
    // Aggiungi event listener per lo scroll per le timeline
    window.addEventListener('scroll', animateTimeline);
    
    // Smooth scroll per i link di ancoraggio
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animazione per il pulsante "torna su"
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.classList.add('scroll-top-btn');
    document.body.appendChild(scrollTopBtn);
    
    // Stile per il pulsante "torna su"
    scrollTopBtn.style.position = 'fixed';
    scrollTopBtn.style.bottom = '20px';
    scrollTopBtn.style.right = '20px';
    scrollTopBtn.style.width = '40px';
    scrollTopBtn.style.height = '40px';
    scrollTopBtn.style.borderRadius = '50%';
    scrollTopBtn.style.backgroundColor = 'var(--primary-color)';
    scrollTopBtn.style.color = 'white';
    scrollTopBtn.style.border = 'none';
    scrollTopBtn.style.cursor = 'pointer';
    scrollTopBtn.style.display = 'none';
    scrollTopBtn.style.justifyContent = 'center';
    scrollTopBtn.style.alignItems = 'center';
    scrollTopBtn.style.zIndex = '999';
    scrollTopBtn.style.boxShadow = 'var(--shadow)';
    scrollTopBtn.style.transition = 'all 0.3s ease';
    
    // Mostra/nascondi il pulsante "torna su" in base allo scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.style.display = 'flex';
            scrollTopBtn.style.opacity = '1';
        } else {
            scrollTopBtn.style.opacity = '0';
            setTimeout(() => {
                if (window.scrollY <= 500) {
                    scrollTopBtn.style.display = 'none';
                }
            }, 300);
        }
    });
    
    // Funzione per tornare all'inizio della pagina
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Effetto hover per il pulsante "torna su"
    scrollTopBtn.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'var(--accent-color)';
        this.style.transform = 'translateY(-3px)';
    });
    
    scrollTopBtn.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'var(--primary-color)';
        this.style.transform = 'translateY(0)';
    });
    
    // Preloader
    const preloader = document.createElement('div');
    preloader.classList.add('preloader');
    document.body.appendChild(preloader);
    
    // Stile per il preloader
    preloader.style.position = 'fixed';
    preloader.style.top = '0';
    preloader.style.left = '0';
    preloader.style.width = '100%';
    preloader.style.height = '100%';
    preloader.style.backgroundColor = 'var(--background-color)';
    preloader.style.display = 'flex';
    preloader.style.justifyContent = 'center';
    preloader.style.alignItems = 'center';
    preloader.style.zIndex = '9999';
    preloader.style.transition = 'opacity 0.5s ease';
    
    // Crea l'animazione del preloader
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    preloader.appendChild(spinner);
    
    // Stile per lo spinner
    spinner.style.width = '50px';
    spinner.style.height = '50px';
    spinner.style.border = '5px solid rgba(0, 0, 0, 0.1)';
    spinner.style.borderTopColor = 'var(--primary-color)';
    spinner.style.borderRadius = '50%';
    spinner.style.animation = 'spin 1s linear infinite';
    
    // Aggiungi l'animazione keyframes per lo spinner
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Nascondi il preloader dopo il caricamento della pagina
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 500);
    });
    
    // Simula il caricamento completo se l'evento load è già avvenuto
    if (document.readyState === 'complete') {
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 500);
    }
    
    // Effetto di hover per le card della timeline
    const timelineContents = document.querySelectorAll('.timeline-content');
    
    timelineContents.forEach(content => {
        content.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        content.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--shadow)';
        });
    });
});
