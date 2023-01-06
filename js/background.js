const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg",];
const body = document.querySelector("body");
const randomImage = images[Math.floor(Math.random() * images.length)];

body.style.backgroundImage = `url("../img/${randomImage}")`;
body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "no-repeat";