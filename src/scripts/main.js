'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbs.addEventListener('click', function (event) {
    event.preventDefault(); 

    let link = event.target.closest('a'); 
    if (!link || !thumbs.contains(link)) return; 

    const largeImageSrc = link.getAttribute('href');
    largeImg.src = largeImageSrc;
  });
});
