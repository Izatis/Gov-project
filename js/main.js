//Карточки вакансий
const data = [
  {
  title: 'Водитель такси',
  price: '15 000 сом.',
  text: 'Оформление справок по з/плате для предъявления в налоговую инспекцию, биржу труда, отдел социальной защиты населения'
  },
  {
  title: 'Водитель такси',
  price: '15 000 сом.',
  text: 'Оформление справок по з/плате для предъявления в налоговую инспекцию, биржу труда, отдел социальной защиты населения'
  },
  {
  title: 'Водитель такси',
  price: '15 000 сом.',
  text: 'Оформление справок по з/плате для предъявления в налоговую инспекцию, биржу труда, отдел социальной защиты населения'
  },
  {
  title: 'Водитель такси',
  price: '15 000 сом.',
  text: 'Оформление справок по з/плате для предъявления в налоговую инспекцию, биржу труда, отдел социальной защиты населения'
  },
  {
  title: 'Водитель такси',
  price: '15 000 сом.',
  text: 'Оформление справок по з/плате для предъявления в налоговую инспекцию, биржу труда, отдел социальной защиты населения'
  },
  {
  title: 'Водитель такси',
  price: '15 000 сом.',
  text: 'Оформление справок по з/плате для предъявления в налоговую инспекцию, биржу труда, отдел социальной защиты населения'
  }
  ];
  
  const vacancyContainer = document.querySelector('.vacancy');
  data.map((item) => {
    const html = `
      <div class="vacancy__item">
        <h3>${item.title}</h3>
        <span class="price">${item.price}</span>
        <span>${item.text}</span>
        <button class="vacancy__button"><span>Read More</span></button>
      </div>
    `;
    vacancyContainer.insertAdjacentHTML('beforeend', html);
  });


// Карточки свайпера
const slides = [
  {
    image: "./images/random.jpg",
    description:
      "До 2026 года 300 тысяч высокооплачиваемых рабочих мест в Кыргызстане  планирует создать кабмин",
  },
  {
    image: "./images/42227f99ce45d942a1824c6beadbb4e4.jpg",
    description:
      "До 2026 года 300 тысяч высокооплачиваемых рабочих мест в Кыргызстане  планирует создать кабмин",
  },
  {
    image: "./images/772604.c2d590a5b031d53cc9add60339607368.jpg",
    description:
      "До 2026 года 300 тысяч высокооплачиваемых рабочих мест в Кыргызстане  планирует создать кабмин",
  },
  {
    image: "./images/Kyrgyzatan_Summary_tcm10-33237.jpg",
    description:
      "До 2026 года 300 тысяч высокооплачиваемых рабочих мест в Кыргызстане  планирует создать кабмин",
  },
];

const slidesHtml = slides
  .map(
    (slide) => `
  <div class="slide swiper-slide">
    <div class="slide__image my-image">
      <img src="${slide.image}" alt="random"/>
    </div>
    <div class="slide__info">
      <span class="text container-text">${slide.description}</span>
      <span class="date"></span>
    </div>
  </div>
`
  )
  .join("");

document.querySelector(".swiper-wrapper").innerHTML = slidesHtml;

// Устанавливаем обновляемую дату
function updateDate() {
  var now = new Date();
  var dateElements = document.querySelectorAll(".date");
  var options = { year: "numeric", month: "long", day: "numeric" };
  dateElements.forEach(function (dateElement) {
    dateElement.innerHTML = now.toLocaleDateString("ru-RU", options);
  });
}

setInterval(updateDate, 100);

// Открывает версию для слабовидящих
const eyeBurger = document.querySelector('.eye-burger');
const icon = eyeBurger.querySelector('i');
const link = eyeBurger.querySelector('.eye__title');
const accessibilityHeader = document.querySelector('.accessibility-header');

const toggleAccessibilityHeader = function () {
  accessibilityHeader.classList.toggle('show-accessibility-header');
};

eyeBurger.addEventListener('click', toggleAccessibilityHeader);

// Изменение кнопок
const fontSizeLargeBtn = document.getElementById("font-size-large");
const fontSizeMediumBtn = document.getElementById("font-size-medium");
const fontSizeSmallBtn = document.getElementById("font-size-small");
const letterSpacingLargeBtn = document.getElementById("letter-spacing-large");
const letterSpacingMediumBtn = document.getElementById("letter-spacing-medium");
const letterSpacingSmallBtn = document.getElementById("letter-spacing-small");
const imageColorToggleBtn = document.getElementById("image-color-toggle");
const exampleImage = document.getElementById("example-image");

// Обработчик клика на кнопке для изменения размера шрифта
fontSizeLargeBtn.addEventListener("click", () => {
  document.body.style.fontSize = "24px";
});

fontSizeMediumBtn.addEventListener("click", () => {
  document.body.style.fontSize = "18px";
});

fontSizeSmallBtn.addEventListener("click", () => {
  document.body.style.fontSize = "12px";
});

// Обработчик клика на кнопке для изменения интервала между буквами
letterSpacingLargeBtn.addEventListener("click", () => {
  document.body.style.letterSpacing = "0.2em";
});

letterSpacingMediumBtn.addEventListener("click", () => {
  document.body.style.letterSpacing = "0.1em";
});

letterSpacingSmallBtn.addEventListener("click", () => {
  document.body.style.letterSpacing = "0.05em";
});

// // Обработчик клика на кнопке Изображения
const bwButtons = document.querySelectorAll(".bw-button");
const colorButtons = document.querySelectorAll(".color-button");
const images = document.querySelectorAll(".my-image");

//Черно-белое
bwButtons.forEach((button) => {
  button.addEventListener("click", () => {
    images.forEach((image) => {
      image.style.filter = "grayscale(100%)";
    });
  });
});

//Цветные
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    images.forEach((image) => {
      image.style.filter = "none";
    });
  });
});

// Cбрасывает все стили
const resetStylesBtn = document.getElementById("reset-styles-button");

resetStylesBtn.addEventListener("click", () => {
  const allElements = document.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.cssText = "";
  }
});
