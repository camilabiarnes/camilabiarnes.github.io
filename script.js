document.addEventListener("DOMContentLoaded", () => {
    
    const imagenes = document.querySelectorAll(".carousel img");
    const carousel = document.querySelector(".carousel");
    const antBtn = document.getElementById("antBtn");
    const sigBtn = document.getElementById("sigBtn");

    let currentIndex = 0;

    antBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
        actualizarCarrousel();
    });

    sigBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imagenes.length;
        actualizarCarrousel();
    });

    function actualizarCarrousel() {
        imagenes.forEach((img, index) => {
            if (index === currentIndex) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    }
    actualizarCarrousel();
});