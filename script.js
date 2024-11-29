const slideshowSection = document.querySelector("#utilizare-resurse");
const images = document.querySelectorAll(".slideshow img");

let slideshowInterval; // Variabilă pentru a controla slideshow-ul
let currentImageIndex = 0;
images.forEach((img, index) => {
    img.style.display = index === 0 ? "block" : "none";
});
function startSlideshow() {
    slideshowInterval = setInterval(() => {
        images[currentImageIndex].style.display = "none"; 
        currentImageIndex = (currentImageIndex + 1) % images.length; 
        images[currentImageIndex].style.display = "block"; 
    }, 3000);
}

slideshowSection.addEventListener("dblclick", () => {
    if (!slideshowInterval) { 
        startSlideshow();
    }
});

