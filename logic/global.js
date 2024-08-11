// Navbar
let mobileContainer = document.getElementById("mobile-container");
let mobileIcon = document.getElementById("icon-menu");
let mobileClose = document.getElementById("mobile-close");

mobileIcon.addEventListener("click", function () {
  mobileContainer.style.display = "block";
});
mobileClose.addEventListener("click", function () {
  mobileContainer.style.display = "none";
});

// Active Link
function handleActiveClass(event) {
  const allLinks = document.querySelectorAll("#desktop-menu a, #mobile-menu a");
  allLinks.forEach((link) => link.classList.remove("active"));
  event.target.classList.add("active");
}
const menuLinks = document.querySelectorAll("#desktop-menu a, #mobile-menu a");
menuLinks.forEach((link) => link.addEventListener("click", handleActiveClass));
