const comments = [
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    message: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    message: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
  },
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    message: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
  },
]

const commentsContainer = document.querySelector(".comments-container");
const commentForm = document.getElementById("comment-form");
const nameInput = document.getElementById("name");
const commentTextInput = document.getElementById("comment-text");

function displayComment(comment) {
  const commentElement = document.createElement("div");
  commentElement.classList.add("comment");

  const commentHeader = document.createElement("div");
  commentHeader.classList.add("comment-header");

  const commentName = document.createElement("span");
  commentName.classList.add("comment-name");
  commentName.textContent = comment.name;

  const commentTimestamp = document.createElement("span");
  commentTimestamp.classList.add("comment-timestamp");
  commentTimestamp.textContent = comment.timestamp;

  commentHeader.appendChild(commentName);
  commentHeader.appendChild(commentTimestamp);

  const commentText = document.createElement("p");
  commentText.classList.add("comment-text");
  commentText.textContent = comment.message;

  commentElement.appendChild(commentHeader);
  commentElement.appendChild(commentText);

  commentsContainer.appendChild(commentElement);
}

function clearCommentForm() {
  nameInput.value = "";
  commentTextInput.value = "";
}

commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value;
  const message = commentTextInput.value;

  if (name && message) {
    const timestamp = new Date().toLocaleDateString();
    const newComment = {
      name,
      timestamp,
      message,
    };

    comments.push(newComment);
    displayComment(newComment);
    clearCommentForm();
  }
});

// Display existing comments
comments.forEach(displayComment);
