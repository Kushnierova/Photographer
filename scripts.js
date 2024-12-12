// Ініціалізація слайдера
function initSlider(modal) {
    const slider = modal.querySelector(".slider");
    const slides = slider.querySelector(".slides");
    const slideImages = slides.querySelectorAll("img");
    const prevButton = slider.querySelector(".prev-slide");
    const nextButton = slider.querySelector(".next-slide");
  
    let currentIndex = 0;
  
    // Показати слайд
    function showSlide(index) {
      const offset = -index * 100;
      slides.style.transform = `translateX(${offset}%)`;
    }
  
    // Наступний слайд
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slideImages.length;
      showSlide(currentIndex);
    });
  
    // Попередній слайд
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slideImages.length) % slideImages.length;
      showSlide(currentIndex);
    });
  
    // Ініціалізація першого слайда
    showSlide(currentIndex);
  }
  
  // Відкриття модального вікна
  const modals = document.querySelectorAll(".modal");
  const moreInfoButtons = document.querySelectorAll(".more-info");
  
  moreInfoButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      modal.classList.add("active");
      document.body.classList.add("modal-open");
  
      // Ініціалізація слайдера в модальному вікні
      initSlider(modal);
    });
  });
  
  // Закриття модального вікна
  const closeButtons = document.querySelectorAll(".modal-close");
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      modal.classList.remove("active");
      document.body.classList.remove("modal-open");
    });
  });
  
  // Закриття при кліку поза модальним вікном
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
  