const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.site-nav a');
const revealItems = document.querySelectorAll('.reveal');
const sections = [...document.querySelectorAll('main section[id]')];
const yearNode = document.getElementById('year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const closeMenu = () => {
  header.classList.remove('is-open');
  document.body.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
};

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('is-open');
    document.body.classList.toggle('nav-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (header.classList.contains('is-open')) {
      closeMenu();
    }
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 60, 280)}ms`;
  revealObserver.observe(item);
});

const setActiveLink = () => {
  const marker = window.scrollY + window.innerHeight * 0.28;

  let currentId = sections[0]?.id || '';
  sections.forEach((section) => {
    if (marker >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isMatch = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('is-active', isMatch);
  });
};

setActiveLink();
window.addEventListener('scroll', setActiveLink);
window.addEventListener('resize', setActiveLink);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && header.classList.contains('is-open')) {
    closeMenu();
  }
});
