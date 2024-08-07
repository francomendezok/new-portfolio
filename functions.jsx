

const inputs = document.querySelectorAll('input[type="radio"]');
const firstInput = document.querySelector('input[data-number="0"]');
const sections = document.querySelectorAll('nav div a');

const menu = document.getElementById('menu-icon');
const nav = document.getElementById('nav');
const main = document.getElementById('home');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');



function hide () {
    if (window.innerWidth < 768) {
        nav.classList.toggle('hidden');    
        main.classList.toggle('hidden');
        about.classList.toggle('hidden');
        skills.classList.toggle('hidden');
        projects.classList.toggle('hidden');
        contact.classList.toggle('hidden');
    }
}


selectFlag.addEventListener('change', () => {
    if (selectFlag.value === 'EN') flag.src = './images/usa.png';
    if (selectFlag.value === 'SP') flag.src = './images/arg.png';
    hide();
})

sections.forEach(a => {
    a.addEventListener('click', hide)
})
menu.addEventListener('click', () => {
    hide();
})

