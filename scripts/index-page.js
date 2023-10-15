import {BandSiteAPI} from "./band-site-api.js";

const APIKey = "ad84ec4e-4017-4519-9ec4-26eef3e0327c";
const api = new BandSiteAPI(APIKey);

const comments = await api.getcomments();


const commentsContainer = document.querySelector(".comments-display");
const commentForm = document.getElementById("comment-form");
const nameInput = document.getElementById("name");
const commentTextInput = document.getElementById("comment-text");

const placeholderImagePath = "path_to_placeholder_image";

function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');

  return month + '/' + day + '/' + year;
}


function displayComment(comment) {
  const commentElement = document.createElement("div");
  commentElement.classList.add("comment");


  const commentHeader = document.createElement("div");
  commentHeader.classList.add("comment-header");

  const commentAvatar = document.createElement("div");
  commentAvatar.classList.add("comment-avatar");
  commentAvatar.style.backgroundColor = "#E5E5E5"; 
  commentAvatar.style.width = "36px"; 
  commentAvatar.style.height = "36px"; 
  commentAvatar.style.borderRadius = "50%"; 
  commentHeader.appendChild(commentAvatar);


  const commentName = document.createElement("span");
  commentName.classList.add("comment-name");
  commentName.textContent = comment.name;
  commentHeader.appendChild(commentName);


  const commentTimestamp = document.createElement("span");
  commentTimestamp.classList.add("comment-timestamp");
  commentTimestamp.textContent = getFormattedDate( new Date(comment.timestamp));
  commentHeader.appendChild(commentTimestamp);

  const commentText = document.createElement("p");
  commentText.classList.add("comment-text");
  commentText.textContent = comment.comment;

  commentElement.appendChild(commentHeader);
  commentElement.appendChild(commentText);

  commentsContainer.insertBefore(commentElement, commentsContainer.firstChild);
  commentsContainer.appendChild(commentElement);
  commentElement.classList.add("comment__form--items");
}

function clearCommentForm() {
  nameInput.value = "";
  commentTextInput.value = "";
}

commentForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = nameInput.value;
  const comment = commentTextInput.value;
  if (name && comment) {
    const response = await api.postComment({name, comment})
    const timestamp = response.timestamp

    const newComment = {
      name,
      comment,
      timestamp
    };
    comments.unshift(newComment);

    while (commentsContainer.firstChild) {
      if (commentsContainer.firstChild.classList?.contains('comment')) {
        commentsContainer.removeChild(commentsContainer.firstChild);
      }
    }
    printCommentsToScreen(comments);

    clearCommentForm()
  }
});


const printCommentsToScreen = comments => {
  comments.forEach(displayComment);

}

printCommentsToScreen(comments)




