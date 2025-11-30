// Manejo del DOM y funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const themeToggle = document.getElementById('themeToggle');
    const contactBtn = document.getElementById('contactBtn');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Verificar y aplicar tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
    
    // Alternar modo claro/oscuro
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        }
    });
    
    // Manejo del botón de contacto
    contactBtn.addEventListener('click', function() {
        alert('¡Gracias por tu interés! Puedes contactarme en: reprogamerxd21@gmail.com');
    });
    
    // Manejo del menú móvil
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Cambiar ícono del menú
        if (navLinks.classList.contains('active')) {
            menuToggle.textContent = '✕';
        } else {
            menuToggle.textContent = '☰';
        }
    });
    
    // Cerrar menú al hacer clic en un enlace (móvil)
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
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
        }
    });
    
    // Ajustar menú al cambiar tamaño de ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            menuToggle.textContent = '☰';
        }
    });
});