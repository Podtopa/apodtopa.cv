import './scss/index.scss';
import './assets/apodtopa.jpeg';

const MAX_SCROLL = 200;
const STEP = 10;
const accentColor = '#9d8362';

function useScroll() {
    const { scrollY } = window;
    const circle = document.getElementById('circle');

    if (scrollY <= MAX_SCROLL) {
        const value = scrollY / STEP;
        circle.style.boxShadow = `0 0 ${value / 2}px ${value}px ${accentColor}`;
    }
}

window.addEventListener('scroll', useScroll);
