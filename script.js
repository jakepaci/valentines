document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.querySelector(".button2");

  noButton.addEventListener("mouseover", function () {
    const x = Math.random() * (window.innerWidth - 100); // Random X position
    const y = Math.random() * (window.innerHeight - 50); // Random Y position

    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.querySelector(".button1");

  yesButton.addEventListener("click", function () {
    window.location.href = "yes.html"; // Redirects to yes.html
  });
});
