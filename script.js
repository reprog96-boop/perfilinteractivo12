// Manejo del DOM y funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const themeToggle = document.getElementById('themeToggle');
    const contactBtn = document.getElementById('contactBtn');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Verificar y aplicar tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
    
    // Alternar modo claro/oscuro - con manejo táctil mejorado
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        }
    }
    
    themeToggle.addEventListener('click', toggleTheme);
    // Agregar evento táctil para dispositivos móviles
    themeToggle.addEventListener('touchstart', function(e) {
        e.preventDefault();
        toggleTheme();
    }, { passive: false });
    
    // Manejo del botón de contacto
    function handleContact() {
        alert('¡Gracias por tu interés! Puedes contactarme en: reprogamerxd21@gmail.com');
    }
    
    contactBtn.addEventListener('click', handleContact);
    contactBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        handleContact();
    }, { passive: false });
    
    // Manejo del menú móvil
    function toggleMenu() {
        navLinks.classList.toggle('active');
        
        // Cambiar ícono del menú
        if (navLinks.classList.contains('active')) {
            menuToggle.textContent = '✕';
            document.body.style.overflow = 'hidden'; // Prevenir scroll cuando el menú está abierto
        } else {
            menuToggle.textContent = '☰';
            document.body.style.overflow = ''; // Restaurar scroll
        }
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    menuToggle.addEventListener('touchstart', function(e) {
        e.preventDefault();
        toggleMenu();
    }, { passive: false });
    
    // Cerrar menú al hacer clic en un enlace (móvil)
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
                document.body.style.overflow = ''; // Restaurar scroll
            }
        });
        
        // Agregar también evento táctil
        item.addEventListener('touchstart', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
                document.body.style.overflow = ''; // Restaurar scroll
            }
        });
    });
    
    // Smooth scroll para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.menu-toggle') &&
            navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.textContent = '☰';
            document.body.style.overflow = ''; // Restaurar scroll
        }
    });
    
    // También para eventos táctiles
    document.addEventListener('touchstart', function(e) {
        if (window.innerWidth <= 768 && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.menu-toggle') &&
            navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.textContent = '☰';
            document.body.style.overflow = ''; // Restaurar scroll
        }
    });
    
    // Ajustar menú al cambiar tamaño de ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            menuToggle.textContent = '☰';
            document.body.style.overflow = ''; // Restaurar scroll
        }
    });
    
    // Interactividad para las habilidades
    skillItems.forEach(skill => {
        skill.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // También para eventos táctiles
        skill.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        }, { passive: false });
    });
    
    // Interactividad para las tarjetas de proyecto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            alert('Proyecto: ' + this.querySelector('.project-title').textContent);
        });
        
        // También para eventos táctiles
        card.addEventListener('touchstart', function(e) {
            e.preventDefault();
            alert('Proyecto: ' + this.querySelector('.project-title').textContent);
        }, { passive: false });
    });
    
    // Prevenir comportamientos no deseados en móviles
    document.addEventListener('touchmove', function(e) {
        if (navLinks.classList.contains('active')) {
            e.preventDefault();
        }
    }, { passive: false });
});