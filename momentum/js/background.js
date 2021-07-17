const images = [
    "Hallstatt0.jpg",
    "Hallstatt1.jpg",
    "Hallstatt2.jpg",
    "Hallstatt3.jpg",
    "Hallstatt4.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);