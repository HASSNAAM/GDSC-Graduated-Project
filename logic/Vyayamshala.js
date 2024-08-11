// Create a new content when I Click on Icon in Section Stories
document.addEventListener("DOMContentLoaded", function () {
  const arrowImg = document.querySelector(".arrow");
  const content = document.querySelector(".stories .content");

  const persons = [
    {
      imgAfter: "./imges/man1.png",
      imgBefore: "./imges/man2.png",
      quote:
        " A complete package to all the fitness freaks out there. Join soon and test yourself. Vyayamshala’s layouts, environment and it’s surrounding itself plays vital role to motivate and go beyond your limitation.",
      starsImg: "./imges/stares.png",
      author: "John Doe, Student",
    },
    {
      imgAfter: "./imges/woman2.jpg",
      imgBefore: "./imges/woman1.jpg",
      quote:
        "An incredible place for fitness enthusiasts. The community is supportive, and the trainers provide personalized guidance to push your limits and achieve your goals. Vyayamshala’s environment is truly inspiring, making every workout session enjoyable and rewarding.",
      starsImg: "./imges/stares.png",
      author: "Jane Smith, Teacher",
    },
    {
      imgAfter: "./imges/man3.jpg",
      imgBefore: "./imges/man4.jpg",
      quote:
        "A top-tier gym experience for those serious about fitness. From state-of-the-art equipment to a welcoming atmosphere, Vyayamshala offers everything you need to stay committed. The positive energy and motivation here are unmatched, helping you exceed your expectations.",
      starsImg: "./imges/stares.png",
      author: "Mark Johnson, Engineer",
    },
  ];

  let currentIndex = 0;

  arrowImg.addEventListener("click", function () {
    content.style.display = "none";

    currentIndex = (currentIndex + 1) % persons.length;
    const currentPerson = persons[currentIndex];

    const leftDiv = content.querySelector(".left");
    const rightDiv = content.querySelector(".right");

    leftDiv.children[0].src = currentPerson.imgAfter;
    leftDiv.children[1].src = currentPerson.imgBefore;
    rightDiv.children[1].textContent = currentPerson.quote;
    rightDiv.children[2].children[0].src = currentPerson.starsImg;
    rightDiv.children[3].textContent = currentPerson.author;

    content.style.display = "flex";
  });
});

// Trainers Content
document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.querySelector(
    ".swiper-container .swiper-wrapper"
  );
  const trainers = [
    { imgSrc: "./imges/trainer1.png", name: "Amir Shrestha" },
    { imgSrc: "./imges/trainer2.png", name: "Christina Thapa" },
    { imgSrc: "./imges/trainer3.png", name: "Sunil Chetri" },
    { imgSrc: "./imges/trainer4.png", name: "Priya K.C" },
    { imgSrc: "./imges/trainer5.png", name: "Santosh Adhikari" },
    { imgSrc: "./imges/trainer6.png", name: "Rina Pun" },
  ];

  for (let i = 0; i < 5; i++) {
    trainers.forEach((trainer) => {
      const swiperSlide = document.createElement("div");
      swiperSlide.className = "swiper-slide";

      const img = document.createElement("img");
      img.src = trainer.imgSrc;
      img.alt = trainer.name;
      swiperSlide.appendChild(img);

      const name = document.createElement("h3");
      name.textContent = trainer.name;
      swiperSlide.appendChild(name);

      swiperContainer.appendChild(swiperSlide);
    });
  }

  const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 2000,
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });
});

//   Validation Form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    const fullName = document.getElementById("full-name").value.trim();
    const phoneNumber = document.getElementById("phone-number").value.trim();
    let isValid = true;

    document.querySelectorAll(".error-message").forEach((el) => el.remove());
    if (fullName.length < 3) {
      showError("full-name", "Full name must be at least 3 characters long.");
      isValid = false;
    }
    const phonePattern = /^\d{11,}$/;
    if (!phonePattern.test(phoneNumber)) {
      showError("phone-number", "Please enter a valid phone number.");
      isValid = false;
    }
    if (!isValid) {
      event.preventDefault();
    }
  });

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement("div");
    error.className = "error-message";
    error.textContent = message;
    field.parentElement.appendChild(error);
  }
});
