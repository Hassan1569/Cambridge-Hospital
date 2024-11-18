  // Add animation to carousel caption on slide change
  var carouselElement = document.querySelector('#carouselExampleCaptions');
  var carousel = new bootstrap.Carousel(carouselElement);

  carouselElement.addEventListener('slid.bs.carousel', function () {
    var captions = document.querySelectorAll('.carousel-caption');
    captions.forEach(function(caption) {
      caption.classList.remove('animate__animated', 'animate__fadeIn');
      void caption.offsetWidth; // Trigger a reflow
      caption.classList.add('animate__animated', 'animate__fadeIn');
    });
  });