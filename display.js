// Get the add-comment button and add-comment box elements
var addCommentBox = document.getElementById("add-comment-box");

// Get the name-input and comment-input elements
var nameInput = document.getElementById("name-input");
var commentInput = document.getElementById("comment-input");
var reasonInput = document.getElementById("reason-input");

// Get the post-comment button and comment-list elements
var postCommentButton = document.getElementById("post-comment-button");
var commentList = document.getElementById("comment-list");

// Add a click event listener to the post-comment button
postCommentButton.addEventListener("click", function (event) {
    // Get the name and comment values
    var nameValue = nameInput.value;
    var commentValue = commentInput.value;
    var reasonValue = reasonInput.value;

    // Check if the reason input field is empty
    if (reasonValue === '') {
        // If the reason input field is empty, show an alert message
        alert('You forgot to write feedbacks!');
        return;
    }

    // Create a new comment block element
    var commentBlock = document.createElement("div");
    commentBlock.classList.add("comment-block");

    // Create a new name element
    var nameElement = document.createElement("p");
    nameElement.classList.add("comment-name-changed");
    nameElement.textContent = nameValue;

    // Create a new comment element
    var commentElement = document.createElement("p");
    commentElement.classList.add("comment-text-changed");
    commentElement.textContent = commentValue;

    // Create a new reason element
    var reasonElement = document.createElement("p");
    reasonElement.classList.add("reason-text-cahnged");
    reasonElement.textContent = reasonValue;

    // Add the name, comment and reason elements to the comment block
    commentBlock.appendChild(nameElement);
    commentBlock.appendChild(commentElement);
    commentBlock.appendChild(reasonElement);

    // Add the comment block to the comment list
    commentList.appendChild(commentBlock);

    // Clear the name and comment inputs
    nameInput.value = "";
    commentInput.value = "";
    reasonInput.value = "";

    // Hide the add-comment box
    addCommentBox.classList.add("hidden");
});
