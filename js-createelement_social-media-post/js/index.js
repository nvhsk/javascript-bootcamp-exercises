console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// HEADING
const heading = document.createElement("h1");
heading.textContent = "Another Social Media Post";
document.body.append(heading);

// POST CONTAINER
const postContainer = document.createElement("article");
postContainer.classList.add("post");
document.body.append(postContainer);

// POST (TEXT)
const postText = document.createElement("p");
postText.classList.add("post__content");
postText.textContent =
  "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla";
postContainer.append(postText);

// FOOTER
const footer = document.createElement("footer");
footer.classList.add("post__footer");
postContainer.append(footer);

// USERNAME
const username = document.createElement("span");
username.textContent = "@username";
username.classList.add("post__username");
footer.append(username);

// BUTTON
const button = document.createElement("button");
button.textContent = " ♥ Like";
button.classList.add("post__button");
footer.append(button);
button.addEventListener("click", handleLikeButtonClick);
