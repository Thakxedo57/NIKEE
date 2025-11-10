const options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 60,
      y2: 45,
      x3: 15
    }
  };
  
  const carousel = document.querySelector("[data-carousel]");
  const slides = document.getElementsByClassName("carousel-cell");
  const flkty = new Flickity(carousel, options);
  
  flkty.on("scroll", () => {
    flkty.slides.forEach((slide, i) => {
      const image = slides[i];
      const x = ((slide.target + flkty.x) * -1) / 3;
      image.style.backgroundPosition = `${x}px`;
    });
  });
  
