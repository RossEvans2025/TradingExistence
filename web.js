const $ = (s) => document.querySelector(s);

// Footer year
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.getAttribute('data-open') === 'true';
    navMenu.setAttribute('data-open', String(!isOpen));
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navMenu.setAttribute('data-open', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Copy share link
const copyBtn = document.getElementById('copyLink');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied!');
    } catch {
      alert('Copy failed.');
    }
  });
}
