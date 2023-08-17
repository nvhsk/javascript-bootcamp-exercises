console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let starNumber = 1; starNumber <= 5; starNumber++) {
    const star = document.createElement(img);
    star.src = "assets/star-empty.svg";
    starContainer.append(star);
  }
  //--^-- your code here --^--
}

renderStars();
