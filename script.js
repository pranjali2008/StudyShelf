const searchInput = document.querySelector("#searchInput");
const categories = document.querySelectorAll(".category");

if(searchInput){
  searchInput.addEventListener("input", function () {

  const value = this.value.toLowerCase().trim();

  categories.forEach(category => {

    let cards = category.querySelectorAll(".book-card");
    let categoryMatch = false;

    cards.forEach(card => {

      let bookName = card.querySelector("p").innerText.toLowerCase();

      if (bookName.includes(value)) {
        card.style.display = "";
        categoryMatch = true;
      } else {
        card.style.display = "none";
      }

    });

    category.style.display = categoryMatch ? "" : "none";

  });

});
}

// Home Page
const homeSearch = document.querySelector("#homeSearch");

if(homeSearch){
  homeSearch.addEventListener("input", function(e) {
    if (e.key === "Enter") {
        window.location.href = `books.html?search=${encodeURIComponent(this.value)}`;
    }
});
}