// Footer year
document.querySelectorAll('.js-year').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const sidenav = document.getElementById('sidenav');

if (toggle && sidenav) {
  toggle.addEventListener('click', () => {
    const isOpen = sidenav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.navlink').forEach((link) => {
    link.addEventListener('click', () => {
      sidenav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Mark the nav link for the current page as active
const currentPage = (location.pathname.split('/').pop() || 'index.html');
document.querySelectorAll('.navlink').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});
