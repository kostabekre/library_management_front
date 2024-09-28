/** @type {HTMLButtonElement} */
  const btn = document.getElementById('update-cover-btn');

  btn.addEventListener('click', () => {
      const overlayContent = document.getElementById('overlay-wrapper');
      overlayContent.style.display = 'block';
  })