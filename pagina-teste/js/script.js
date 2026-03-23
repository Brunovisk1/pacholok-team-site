// ============================================
//   FAQ ACCORDION
// ============================================

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');

        // Fecha todos
        document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));

        // Abre o clicado (se não estava aberto)
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ============================================
//   SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ============================================
//   ANIMAÇÕES AO SCROLL
// ============================================

const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

animateOnScrollElements.forEach(el => observer.observe(el));

// CSS para as animações
const style = document.createElement('style');
style.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// ============================================
//   CONTADOR DE STATS (animação numérica)
// ============================================

const statNumbers = document.querySelectorAll('.stat-number[data-target]');

const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        statsObserver.unobserve(entry.target);

        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = target === 97 ? '%' : target === 100 ? 'K+' : target === 7 ? '' : '+';
        const duration = 1500;
        const step = Math.ceil(duration / target);
        let current = 0;

        const timer = setInterval(() => {
            current++;
            el.textContent = current + suffix;
            if (current >= target) {
                el.textContent = target + suffix;
                clearInterval(timer);
            }
        }, step);
    });
}, { threshold: 0.5 });

statNumbers.forEach(el => statsObserver.observe(el));

// ============================================
//   LAZY LOADING DE IMAGENS (fallback para browsers antigos)
// ============================================

if ('loading' in HTMLImageElement.prototype === false) {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.src = img.src;
    });
}
