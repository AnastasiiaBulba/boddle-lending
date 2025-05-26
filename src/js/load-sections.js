function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error('Error loading HTML:', error));
}

loadHTML('header', 'partials/header.html');
loadHTML('modal', 'partials/modal.html');
loadHTML('hero', 'partials/hero.html');
loadHTML('game', 'partials/game.html');
loadHTML('how', 'partials/how.html');
loadHTML('key', 'partials/key.html');
loadHTML('gallery', 'partials/gallery.html');
loadHTML('user', 'partials/user.html');
loadHTML('faq', 'partials/faq.html');
loadHTML('footer', 'partials/footer.html');
