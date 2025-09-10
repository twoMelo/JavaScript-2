// Inicialização dos ícones Lucide
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Variáveis globais
let lastScrollTop = 0;
let scrollTimeout;

// Navegação
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }

    init() {
        this.setupScrollBehavior();
        this.setupMobileMenu();
        this.setupActiveLinks();
        this.setupSmoothScroll();
    }

    setupScrollBehavior() {
        let isScrolling = false;
        
        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    isScrolling = false;
                });
                isScrolling = true;
            }
        });
    }

    handleScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Efeito de sumir/aparecer do navbar
        if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
            // Rolando para baixo
            this.navbar.classList.add('hidden');
            this.navbar.classList.remove('visible');
        } else {
            // Rolando para cima
            this.navbar.classList.remove('hidden');
            this.navbar.classList.add('visible');
        }
        
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        
        // Transparência do navbar
        if (currentScrollTop > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    setupMobileMenu() {
        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navMenu.classList.toggle('active');
            
            // Previne o scroll quando o menu está aberto
            if (this.navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Fecha o menu ao clicar em um link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.hamburger.classList.remove('active');
                this.navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Fecha o menu ao redimensionar a tela
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.hamburger.classList.remove('active');
                this.navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    setupActiveLinks() {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                
                if (currentScrollY > sectionTop && currentScrollY <= sectionTop + sectionHeight) {
                    this.navLinks.forEach(link => link.classList.remove('active'));
                    if (correspondingLink) {
                        correspondingLink.classList.add('active');
                    }
                }
            });
        });
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Smooth scroll para os botões do hero
        const heroButtons = document.querySelectorAll('.hero-buttons a[href^="#"]');
        heroButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = button.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Animações de entrada
class AnimationController {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupScrollIndicator();
        this.setupFloatingElements();
        this.setupParallaxEffects();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                        this.triggerCustomAnimations(entry.target);
                    }, delay);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => {
            observer.observe(element);
        });
    }

    triggerCustomAnimations(element) {
        // Animações específicas para diferentes elementos
        if (element.classList.contains('skill-card')) {
            this.animateSkillCard(element);
        } else if (element.classList.contains('project-card')) {
            this.animateProjectCard(element);
        } else if (element.classList.contains('stat-item')) {
            this.animateCounter(element);
        }
    }

    animateSkillCard(card) {
        const icon = card.querySelector('.skill-icon');
        if (icon) {
            setTimeout(() => {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }, 300);
            }, 200);
        }
    }

    animateProjectCard(card) {
        const techIcon = card.querySelector('.project-tech-icon');
        if (techIcon) {
            setTimeout(() => {
                techIcon.style.transform = 'scale(1.2) rotate(360deg)';
                setTimeout(() => {
                    techIcon.style.transform = 'scale(1) rotate(0deg)';
                }, 500);
            }, 300);
        }
    }

    animateCounter(statItem) {
        const number = statItem.querySelector('.stat-number');
        if (number) {
            const finalValue = parseInt(number.textContent);
            const duration = 2000;
            const increment = finalValue / (duration / 16);
            let currentValue = 0;
            
            const counter = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    number.textContent = finalValue + '+';
                    clearInterval(counter);
                } else {
                    number.textContent = Math.floor(currentValue) + '+';
                }
            }, 16);
        }
    }

    setupScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset;
                if (scrollTop > 100) {
                    scrollIndicator.style.opacity = '0';
                } else {
                    scrollIndicator.style.opacity = '1';
                }
            });
        }
    }

    setupFloatingElements() {
        const floatingCards = document.querySelectorAll('.floating-card');
        
        floatingCards.forEach((card, index) => {
            // Adiciona movimento com o mouse
            card.addEventListener('mouseenter', () => {
                card.style.transform += ' scale(1.1)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = card.style.transform.replace(' scale(1.1)', '');
            });
            
            // Movimento aleatório sutil
            setInterval(() => {
                const randomX = (Math.random() - 0.5) * 10;
                const randomY = (Math.random() - 0.5) * 10;
                card.style.transform += ` translate(${randomX}px, ${randomY}px)`;
                
                setTimeout(() => {
                    card.style.transform = card.style.transform.replace(` translate(${randomX}px, ${randomY}px)`, '');
                }, 2000);
            }, 5000 + (index * 1000));
        });
    }

    setupParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-visual');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// Formulário de contato
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.messageDiv = document.getElementById('form-message');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });

            // Validação em tempo real
            this.setupRealTimeValidation();
        }
    }

    setupRealTimeValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.validateField(input);
                }
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove classes de erro anteriores
        field.classList.remove('error');
        
        // Validações específicas
        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Por favor, insira um email válido';
                }
                break;
            case 'text':
                if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'Este campo deve ter pelo menos 2 caracteres';
                }
                break;
            default:
                if (field.hasAttribute('required') && !value) {
                    isValid = false;
                    errorMessage = 'Este campo é obrigatório';
                }
        }

        if (!isValid) {
            field.classList.add('error');
            this.showFieldError(field, errorMessage);
        } else {
            this.clearFieldError(field);
        }

        return isValid;
    }

    showFieldError(field, message) {
        let errorDiv = field.parentNode.querySelector('.field-error');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'field-error';
            errorDiv.style.cssText = `
                color: #ef4444;
                font-size: 0.875rem;
                margin-top: 0.25rem;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            field.parentNode.appendChild(errorDiv);
        }
        errorDiv.textContent = message;
        setTimeout(() => errorDiv.style.opacity = '1', 10);
    }

    clearFieldError(field) {
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.style.opacity = '0';
            setTimeout(() => errorDiv.remove(), 300);
        }
    }

    async handleSubmit() {
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validação completa do formulário
        let isFormValid = true;
        const fields = this.form.querySelectorAll('input[required], textarea[required]');
        
        fields.forEach(field => {
            if (!this.validateField(field)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            this.showMessage('Por favor, corrija os erros no formulário.', 'error');
            return;
        }

        // Mostra loading
        this.setLoadingState(true);

        try {
            // Simula envio do formulário (substitua pela sua lógica de envio)
            await this.simulateFormSubmission(data);
            
            this.showMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
            this.form.reset();
            
        } catch (error) {
            this.showMessage('Erro ao enviar mensagem. Tente novamente mais tarde.', 'error');
            console.error('Erro no envio:', error);
        } finally {
            this.setLoadingState(false);
        }
    }

    async simulateFormSubmission(data) {
        // Simula um delay de rede
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simula sucesso 90% das vezes
                if (Math.random() > 0.1) {
                    console.log('Dados do formulário:', data);
                    resolve();
                } else {
                    reject(new Error('Erro simulado'));
                }
            }, 1500);
        });
    }

    setLoadingState(isLoading) {
        const submitButton = this.form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        if (isLoading) {
            submitButton.disabled = true;
            submitButton.innerHTML = '<i data-lucide="loader-2"></i> Enviando...';
            submitButton.classList.add('loading');
            lucide.createIcons();
        } else {
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
            submitButton.classList.remove('loading');
            lucide.createIcons();
        }
    }

    showMessage(message, type) {
        this.messageDiv.textContent = message;
        this.messageDiv.className = `form-message ${type}`;
        
        // Auto-oculta após 5 segundos
        setTimeout(() => {
            this.messageDiv.style.opacity = '0';
            setTimeout(() => {
                this.messageDiv.className = 'form-message';
                this.messageDiv.textContent = '';
                this.messageDiv.style.opacity = '';
            }, 300);
        }, 5000);
    }
}

// Efeitos visuais adicionais
class VisualEffects {
    constructor() {
        this.init();
    }

    init() {
        this.setupHoverEffects();
        this.setupSkillCardEffects();
        this.setupProjectCardEffects();
        this.setupThemeEffects();
        this.setupCursorEffects();
    }

    setupHoverEffects() {
        // Efeito hover nos botões
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                const rect = button.getBoundingClientRect();
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
                ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Adiciona a animação CSS para o ripple
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    setupSkillCardEffects() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Efeito de brilho
                card.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.3)';
                
                // Animação dos ícones
                const icon = card.querySelector('.skill-icon');
                if (icon) {
                    icon.style.transform = 'translateY(-5px) rotate(5deg)';
                }

                // Efeito nas tecnologias
                const techs = card.querySelectorAll('.skill-technologies span');
                techs.forEach((tech, index) => {
                    setTimeout(() => {
                        tech.style.transform = 'translateY(-2px)';
                        tech.style.backgroundColor = 'var(--accent-primary)';
                        tech.style.color = 'white';
                    }, index * 50);
                });
            });

            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '';
                
                const icon = card.querySelector('.skill-icon');
                if (icon) {
                    icon.style.transform = '';
                }

                const techs = card.querySelectorAll('.skill-technologies span');
                techs.forEach(tech => {
                    tech.style.transform = '';
                    tech.style.backgroundColor = '';
                    tech.style.color = '';
                });
            });
        });
    }

    setupProjectCardEffects() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Efeito de zoom na imagem de fundo
                const projectImage = card.querySelector('.project-image');
                if (projectImage) {
                    projectImage.style.transform = 'scale(1.05)';
                }

                // Animação das tecnologias
                const techTags = card.querySelectorAll('.tech-tag');
                techTags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.style.transform = 'translateY(-3px) scale(1.05)';
                    }, index * 100);
                });
            });

            card.addEventListener('mouseleave', () => {
                const projectImage = card.querySelector('.project-image');
                if (projectImage) {
                    projectImage.style.transform = '';
                }

                const techTags = card.querySelectorAll('.tech-tag');
                techTags.forEach(tag => {
                    tag.style.transform = '';
                });
            });
        });
    }

    setupThemeEffects() {
        // Efeito de partículas no background (sutil)
        this.createBackgroundParticles();
    }

    createBackgroundParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        `;
        
        document.body.appendChild(particlesContainer);

        // Cria partículas
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: var(--accent-primary);
                border-radius: 50%;
                opacity: 0.3;
                animation: float-particle ${10 + Math.random() * 10}s linear infinite;
            `;
            
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            
            particlesContainer.appendChild(particle);
        }

        // Adiciona a animação CSS
        if (!document.querySelector('#particle-styles')) {
            const style = document.createElement('style');
            style.id = 'particle-styles';
            style.textContent = `
                @keyframes float-particle {
                    0% {
                        transform: translateY(100vh) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.3;
                    }
                    90% {
                        opacity: 0.3;
                    }
                    100% {
                        transform: translateY(-100px) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    setupCursorEffects() {
        // Efeito de cursor personalizado (opcional)
        const cursor = document.createElement('div');
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--accent-primary);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
            opacity: 0;
        `;
        
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
            cursor.style.opacity = '0.7';
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '0.7';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });

        // Efeito especial em elementos interativos
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.backgroundColor = 'var(--accent-secondary)';
            });

            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.backgroundColor = 'var(--accent-primary)';
            });
        });
    }
}

// Utilitários
class Utils {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    static getScrollPercent() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        return (scrollTop / scrollHeight) * 100;
    }

    static isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            scrollEvents: 0,
            animationFrames: 0,
            lastCheck: Date.now()
        };
        
        // Inicia monitoramento apenas em modo debug
        if (window.location.hostname === 'localhost' || window.location.hostname.includes('replit')) {
            this.startMonitoring();
        }
    }

    startMonitoring() {
        setInterval(() => {
            const now = Date.now();
            const timeDiff = now - this.metrics.lastCheck;
            
            console.log('Performance Metrics:', {
                scrollEventsPerSecond: (this.metrics.scrollEvents / timeDiff) * 1000,
                animationFramesPerSecond: (this.metrics.animationFrames / timeDiff) * 1000
            });
            
            this.metrics.scrollEvents = 0;
            this.metrics.animationFrames = 0;
            this.metrics.lastCheck = now;
        }, 5000);
    }

    trackScrollEvent() {
        this.metrics.scrollEvents++;
    }

    trackAnimationFrame() {
        this.metrics.animationFrames++;
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa todas as classes
    const navigation = new Navigation();
    const animationController = new AnimationController();
    const contactForm = new ContactForm();
    const visualEffects = new VisualEffects();
    const performanceMonitor = new PerformanceMonitor();

    // Log de inicialização
    console.log('🚀 Portfólio carregado com sucesso!');
    console.log('✨ Todas as funcionalidades foram inicializadas');
    
    // Easter egg para desenvolvedores
    console.log(`
    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
    ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
    ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
    ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
    ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
    
    Desenvolvido com ❤️ e muito ☕
    `);
});

// Exporta as classes para uso global (se necessário)
window.Portfolio = {
    Navigation,
    AnimationController,
    ContactForm,
    VisualEffects,
    Utils,
    PerformanceMonitor
};

// Controle de Tema
class ThemeController {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.setupEventListeners();
    }

    setupEventListeners() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
}

// Cursor Brilhante
class CursorGlow {
    constructor() {
        this.cursorGlow = document.getElementById('cursor-glow');
        this.mouseX = 0;
        this.mouseY = 0;
        this.glowX = 0;
        this.glowY = 0;
        this.isActive = false;
        this.init();
    }

    init() {
        if (!this.cursorGlow) return;
        
        this.setupEventListeners();
        this.animate();
    }

    setupEventListeners() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            
            if (!this.isActive) {
                this.isActive = true;
                this.cursorGlow.classList.add('active');
            }
        });

        document.addEventListener('mouseleave', () => {
            this.isActive = false;
            this.cursorGlow.classList.remove('active');
        });

        document.addEventListener('mouseenter', () => {
            if (this.mouseX !== 0 || this.mouseY !== 0) {
                this.isActive = true;
                this.cursorGlow.classList.add('active');
            }
        });
    }

    animate() {
        // Movimento suave e lento do brilho
        const lerp = (start, end, factor) => start + (end - start) * factor;
        
        this.glowX = lerp(this.glowX, this.mouseX, 0.05);
        this.glowY = lerp(this.glowY, this.mouseY, 0.05);
        
        if (this.cursorGlow) {
            this.cursorGlow.style.left = this.glowX + 'px';
            this.cursorGlow.style.top = this.glowY + 'px';
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Inicialização das novas funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o controle de tema
    new ThemeController();
    
    // Inicializa o cursor brilhante
    new CursorGlow();
});