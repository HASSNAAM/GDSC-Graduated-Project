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

// Create a new content when I Click on Span in Header
document.addEventListener("DOMContentLoaded", function () {
  const content = {
    1: {
      image: "./imges/aloevera.png",
      h1: "Aloe vera",
      text: "Aloe produces two substances, gel and latex, which are used for medicines. Aloe gel is the clear, jelly-like substance found in the inner part of the aloe plant leaf. Aloe latex comes from just under the plant's skin and is yellow in color. Some aloe products are made from the whole crushed leaf, so they contain both gel and latex.",
      h2: "Aloe vera",
    },
    2: {
      image: "../imges/plant2.png",
      h1: "Jasmine",
      text: "Jasmine is a fragrant flowering plant that produces delicate white or yellow blossoms. The flowers are harvested for their essential oils, commonly used in perfumes and aromatherapy. Jasmine tea, made from the flowers, has a soothing, calming effect. The plant is also celebrated for its beautiful, climbing vines, which can enhance any garden or landscape.",
      h2: "Jasmine",
    },
    3: {
      image: "./imges/plant3.png",
      h1: "Rosemary",
      text: "Rosemary is a woody, aromatic herb with needle-like leaves and small blue flowers. It is widely used in cooking to add flavor to meats, soups, and stews. Rosemary oil is extracted from the leaves and used in hair care products for its stimulating properties. The plant is also valued for its ability to improve concentration and memory.",
      h2: "Rosemary",
    },
  };

  const spans = document.querySelectorAll(".circles span");
  const leftDiv = document.querySelector(".left");
  const h1 = document.querySelector(".right h1");
  const p = document.querySelector(".right p");
  const h2 = document.querySelector(".arrows h2");

  spans.forEach((span) => {
    span.addEventListener("click", function () {
      const id = this.getAttribute("data-id");

      leftDiv.style.backgroundImage = `url(${content[id].image})`;
      h1.textContent = content[id].h1;
      p.textContent = content[id].text;
      h2.textContent = content[id].h2;

      spans.forEach((span) => span.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
