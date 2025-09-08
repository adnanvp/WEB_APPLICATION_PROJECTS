// Responsive menu
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('open');
  });
}

// Read More toggle
function toggleReadMore(contentId, btn) {
  const content = document.getElementById(contentId);
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    btn.textContent = 'Read More';
  } else {
    content.classList.add('expanded');
    btn.textContent = 'Read Less';
  }
}

// Simple contact form handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-success').style.display = 'block';
    contactForm.reset();
  });
}