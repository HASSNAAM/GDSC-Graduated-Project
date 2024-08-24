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

// Function to create and show the search overlay
function createSearchOverlay() {
  // Create overlay div
  const overlay = document.createElement("div");
  overlay.id = "search-overlay";
  overlay.className = "search-overlay";

  // Create search box div
  const searchBox = document.createElement("div");
  searchBox.className = "search-box";

  // Create input field
  const input = document.createElement("input");
  input.type = "text";
  input.id = "overlay-search-input";
  input.placeholder = "Search...";

  // Create search button
  const searchButton = document.createElement("button");
  searchButton.id = "search-button";
  searchButton.textContent = "Search";

  // Create close button
  const closeButton = document.createElement("button");
  closeButton.id = "close-search";
  closeButton.textContent = "Close";

  searchBox.appendChild(input);
  searchBox.appendChild(searchButton);
  searchBox.appendChild(closeButton);

  overlay.appendChild(searchBox);

  document.body.appendChild(overlay);

  closeButton.addEventListener("click", hideSearchOverlay);

  showSearchOverlay();
}

// Function to show the search overlay
function showSearchOverlay() {
  document.getElementById("search-overlay").style.display = "flex";
}

// Function to hide the search overlay
function hideSearchOverlay() {
  const overlay = document.getElementById("search-overlay");
  if (overlay) {
    document.body.removeChild(overlay);
  }
}

// Event listener for search icon
document
  .querySelector(".fa-magnifying-glass")
  .addEventListener("click", createSearchOverlay);
