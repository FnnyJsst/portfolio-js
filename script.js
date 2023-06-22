
document.addEventListener('DOMContentLoaded', function() {
    let images = document.querySelectorAll('.skills img');
  
    images.forEach(function(image) {
      image.addEventListener('onclick', function(event) {
        event.target.style.width = '75px';
      });
    });
  });