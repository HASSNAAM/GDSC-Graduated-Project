//   Validation Form
function validateEmail() {
  const emailField = document.getElementById("email");
  const emailValue = emailField.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(emailValue)) {
    document.querySelector(".error-message").textContent =
      "Please Enter A valid Email.";
    return false;
  }

  return true;
}

// Create a new content when I Click on Icon in Header
document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.querySelector(".arrows h2");
  const content = document.querySelector("header>.container");

  const dogs = [
    {
      imgDog: "./imges/maindog.png",
      h1: "Everybody needs a friend in Life.",
      p: "The Corgi is intelligent, quick and curious. It is a kind, adventurous breed which shows a large measure of independence. They are good with children and normally kind with strangers.",
      button: "Buy Me",
      h2: "Corgi (2 months)",
    },
    {
      imgDog: "./imges/maindog.jpg",
      h1: "Everybody needs a friend in Life.",
      p: "The Labrador Retriever is loyal, friendly, and outgoing. It is a playful, energetic breed known for its affectionate nature. They are excellent with families and thrive on companionship.",
      button: "Buy Me",
      h2: "Labrador (6 months)",
    },
    {
      imgDog: "./imges/maindog2.webp",
      h1: "Everybody needs a friend in Life.",
      p: "The Beagle is curious, lively, and gentle. It is a small, sturdy breed with a keen sense of smell. They are great with children and enjoy outdoor adventures immensely.",
      button: "Buy Me",
      h2: "Beagle (10 months)",
    },
  ];

  let currentIndex = 0;

  arrow.addEventListener("click", function () {
    content.style.display = "none";

    currentIndex = (currentIndex + 1) % dogs.length;
    const currentDog = dogs[currentIndex];

    const leftDiv = content.querySelector(".left");
    const rightDiv = content.querySelector(".right");

    leftDiv.style.backgroundImage = `url(${currentDog.imgDog})`;
    rightDiv.children[0].textContent = currentDog.h1;
    rightDiv.children[1].textContent = currentDog.p;
    rightDiv.children[2].textContent = currentDog.button;
    this.textContent = currentDog.h2;

    content.style.display = "flex";
  });
});
