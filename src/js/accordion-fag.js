document.querySelectorAll('.fag-wrap-card-title').forEach(title => {
  title.addEventListener('click', () => {
    const card = title.parentElement;
    const isActive = card.classList.contains('active');

    document.querySelectorAll('.fag-wrap-card').forEach(c => {
      c.classList.remove('active');
    });

    if (!isActive) {
      card.classList.add('active');
    }
  });
});
