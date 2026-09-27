const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// menu diklik 
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
}

// close
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

const grid = document.querySelector('.careers-grid');
const prevBtn = document.querySelector('.slide-btn.prev');
const nextBtn = document.querySelector('.slide-btn.next');
const cards = grid.querySelectorAll('.job-card');

function getCardStep() {
    if (cards.length < 2) return grid.clientWidth;
    const rect1 = cards[0].getBoundingClientRect();
    const rect2 = cards[1].getBoundingClientRect();
    return rect2.left - rect1.left;
}

function updateArrows() {
    const maxScroll = grid.scrollWidth - grid.clientWidth;

    prevBtn.style.display = grid.scrollLeft <= 25 ? 'none' : 'block';
    nextBtn.style.display = grid.scrollLeft >= maxScroll - 25 ? 'none' : 'block';
}

function scrollCareers(direction) {
    const step = getCardStep();
    grid.scrollBy({ left: direction * step, behavior: 'smooth' });
}

prevBtn.addEventListener('click', () => scrollCareers(-1));
nextBtn.addEventListener('click', () => scrollCareers(1));
grid.addEventListener('scroll', updateArrows);

updateArrows();
window.addEventListener('load', updateArrows);
window.addEventListener('resize', updateArrows);


const disclaimerPopup = document.getElementById('disclaimerPopup');
const closeDisclaimer = document.getElementById('closeDisclaimer');

if (disclaimerPopup && closeDisclaimer) {
    if (sessionStorage.getItem('disclaimerClosed') === 'true') {
        disclaimerPopup.classList.add('hide');
    }

    closeDisclaimer.addEventListener('click', () => {
        disclaimerPopup.classList.add('hide');
        sessionStorage.setItem('disclaimerClosed', 'true');
    });
}