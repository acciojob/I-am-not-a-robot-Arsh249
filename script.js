//your code here
document.addEventListener("DOMContentLoaded", function() {
  const images = ['img1', 'img2', 'img3', 'img4', 'img5'];
  const container = document.getElementById("image-container");
  const resetButton = document.getElementById("reset");
  const verifyButton = document.getElementById("verify");
  const para = document.getElementById("para");

  let selectedImages = [];
  let repeatedImage;

  function initialize() {
    para.innerText = "";
    selectedImages = [];

    // Randomly pick an image to repeat
    repeatedImage = images[Math.floor(Math.random() * images.length)];

    // Create an array with the repeated image
    const shuffledImages = [...images, repeatedImage].sort(() => 0.5 - Math.random());

    // Clear previous images
    container.innerHTML = "";

    // Render images
    shuffledImages.forEach((imgClass, index) => {
      const img = document.createElement("img");
      img.className = imgClass;
      img.addEventListener("click", () => handleImageClick(imgClass, img));
      container.appendChild(img);
    });

    resetButton.style.display = "none";
    verifyButton.style.display = "none";
  }

  function handleImageClick(imgClass, imgElement) {
    if (selectedImages.includes(imgClass) && selectedImages.length === 1) return;

    if (selectedImages.length < 2) {
      imgElement.classList.add("selected");
      selectedImages.push(imgClass);

      if (selectedImages.length === 1) {
        resetButton.style.display = "block";
      }

      if (selectedImages.length === 2) {
        verifyButton.style.display = "block";
      }
    }
  }

  resetButton.addEventListener("click", () => {
    initialize();
  });

  verifyButton.addEventListener("click", () => {
    verifyButton.style.display = "none";
    if (selectedImages[0] === selectedImages[1]) {
      para.innerText = "You are a human. Congratulations!";
    } else {
      para.innerText = "We can't verify you as a human. You selected the non-identical tiles.";
    }
  });

  initialize();
});
