const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;

prevEl.addEventListener("click", () => {
  x = x + 18; // Adjust rotation step to match image spacing
  clearTimeout(timer);
  updateGallery();
});

nextEl.addEventListener("click", () => {
  x = x - 18; // Adjust rotation step to match image spacing
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1200px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 18; // Adjust rotation step to match image spacing
    updateGallery();
  }, 3000);
}

updateGallery();
