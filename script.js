let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// Enable horizontal scrolling with the mouse wheel
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault(); // Prevent default vertical scrolling behavior
    scrollContainer.scrollLeft += evt.deltaY; // Scroll horizontally
    scrollContainer.style.scrollBehavior = "auto"; // Temporarily disable smooth scrolling
});

// Smooth scrolling when "Next" is clicked
nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"; // Enable smooth scrolling
    scrollContainer.scrollLeft += 900; // Scroll to the right by 900px
});

// Smooth scrolling when "Back" is clicked
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"; // Enable smooth scrolling
    scrollContainer.scrollLeft -= 900; // Scroll to the left by 900px
});
