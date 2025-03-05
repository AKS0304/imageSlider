const images = [
    "image-slider-5.jpg",
    "shanghai.jpg",
    "seven horses.jpg"
];

let currentIndex = 0;
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateSlider() {
    slider.src = images[currentIndex];
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateSlider();
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}

updateSlider();

