document
  .getElementById("model-select")
  .addEventListener("change", function (event) {
    console.log(event.target.value);
    filterWatches(event.target.value);
  });

function filterWatches(selectedModel) {
  const watchCards = document.querySelectorAll(".watch-card");
  watchCards.forEach((card) => {
    if (
      selectedModel === "All Collections" ||
      card.dataset.model === selectedModel
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Search functionality
document
  .querySelector(".search-wrapper input")
  .addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const watchCards = document.querySelectorAll(".watch-card");
    watchCards.forEach((card) => {
      const watchName = card.querySelector("h3").textContent.toLowerCase();
      if (watchName.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
  

  Array.from(document.getElementsByClassName('addtocart')).forEach(button => {
    button.addEventListener('click', function() {
        alert('Add to cart successfully!');
    });
  });

