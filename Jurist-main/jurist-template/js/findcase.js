  const btns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.filter-item');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.classList.remove('hidden');
          item.style.animation = 'none';
          requestAnimationFrame(() => { item.style.animation = 'fadeUp 0.35s ease both'; });
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('open');
  });