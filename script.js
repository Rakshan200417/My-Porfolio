const images = {
  web: ["images/c1.jpg", "images/c2.jpg"],
  logo: ["images/c2.jpg", "images/c3.jpg"],
  software: ["images/c3.jpg", "images/c4.jpg"],
};

let index = 0;

function showCarousel(type) {
  index = 0;
  document.getElementById("carouselImg").src = images[type][index];
}
