document.addEventListener("DOMContentLoaded", () => {
  const menuItems = [
    {
      src: "./imges/menu1.png",
      alt: "menu1",
      name: "Americano",
      price: "Rs 150",
    },
    {
      src: "./imges/menu2.png",
      alt: "menu2",
      name: "Blended Mocha",
      price: "Rs 315",
    },
    {
      src: "./imges/menu3.png",
      alt: "menu3",
      name: "Blended Frappe",
      price: "RS 280",
    },
    {
      src: "./imges/menu4.png",
      alt: "menu4",
      name: "Cappuccino",
      price: "Rs 185",
    },
    {
      src: "./imges/menu5.png",
      alt: "menu5",
      name: "Caffe Latte",
      price: "Rs 180",
    },
    {
      src: "./imges/menu6.png",
      alt: "menu6",
      name: "Milk tea",
      price: "Rs 80",
    },
    {
      src: "./imges/menu7.png",
      alt: "menu7",
      name: "Cafe latte with Cookie",
      price: "Rs 365",
    },
    {
      src: "./imges/menu8.png",
      alt: "menu8",
      name: "Croissant",
      price: "Rs 120",
    },
    {
      src: "./imges/menu9.png",
      alt: "menu9",
      name: "Baguette",
      price: "Rs 120",
    },
    {
      src: "./imges/menu10.png",
      alt: "menu10",
      name: "Rolls",
      price: "Lorem, ipausm, lor",
    },
    {
      src: "./imges/menu11.png",
      alt: "menu11",
      name: "Cheese cake",
      price: "Rs 300",
    },
    {
      src: "./imges/menu12.png",
      alt: "menu12",
      name: "Brownie with Icecream",
      price: "Rs 280",
    },
    {
      src: "./imges/menu13.png",
      alt: "menu13",
      name: "Iced Americano",
      price: "Rs 195",
    },
    {
      src: "./imges/menu14.png",
      alt: "menu14",
      name: "Flat white",
      price: "Rs 195",
    },
    {
      src: "./imges/menu15.png",
      alt: "menu15",
      name: "Matcha Latte",
      price: "Rs 350",
    },
  ];

  const container = document.getElementById("menu-container");

  menuItems.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <img src="${item.src}" alt="${item.alt}" />
            <div>
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
        `;
    container.appendChild(div);
  });
});
