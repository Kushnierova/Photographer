// Знаходимо всі кнопки "Дізнатись більше"
const moreInfoButtons = document.querySelectorAll(".more-info");

// Додаємо події для кожної кнопки
moreInfoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal"); // Отримуємо ID модального вікна
    const modal = document.getElementById(modalId); // Знаходимо відповідне модальне вікно
    modal.classList.add("active");
    document.body.classList.add("modal-open");
  });
});

// Закриття модальних вікон
const closeButtons = document.querySelectorAll(".modal-close");
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    const modal = closeButton.closest(".modal"); // Знаходимо батьківське модальне вікно
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  });
});

// Закриття при кліку поза модальним вікном
const modals = document.querySelectorAll(".modal");
modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  });
});

// Закриття при натисканні ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modals.forEach((modal) => {
      modal.classList.remove("active");
    });
    document.body.classList.remove("modal-open");
  }
});
    // СЛАЙДЕР В МОДАЛЬНОМУ ВІКОНЦІ
    document.addEventListener("DOMContentLoaded", function () {
        const slides = document.querySelector(".slides");
        const slideImages = document.querySelectorAll(".slides img");
        const prevBtn = document.querySelector(".prev-slide");
        const nextBtn = document.querySelector(".next-slide");
        let currentSlide = 0;
      
        const updateSlide = () => {
          const slideWidth = slideImages[0].clientWidth;
          slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
        };
      
        nextBtn.addEventListener("click", () => {
          currentSlide = (currentSlide + 1) % slideImages.length;
          updateSlide();
        });
      
        prevBtn.addEventListener("click", () => {
          currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
          updateSlide();
        });
      
        // Ensure slider resizes correctly
        window.addEventListener("resize", updateSlide);
      });