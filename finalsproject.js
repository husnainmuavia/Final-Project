let reviews = [];

function addReview() {
  const stars = document.getElementById("stars").value;
  const comment = document.getElementById("comment").value;

  if (comment.trim() === "") {
    alert("Please enter a comment.");
    return;
  }

  const reviewText = `${"⭐".repeat(stars)} - ${comment}`;
  reviews.push(reviewText);
  alert("Thank you for your review!");
  document.getElementById("comment").value = "";
}

function showRandomReview() {
  const reviewBox = document.getElementById("reviewBox");

  if (reviews.length === 0) {
    reviewBox.textContent = "No reviews yet. Be the first to write one!";
  } else {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    reviewBox.textContent = reviews[randomIndex];
  }
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const formMessage = document.getElementById("formMessage");

  if (name.trim() !== "") {
    formMessage.textContent = `Thanks for reaching out, ${name}! We’ll get back to you soon.`;
    formMessage.style.color = "green";
    this.reset();
  } else {
    formMessage.textContent = "Please fill in your name.";
    formMessage.style.color = "red";
  }
});
