    // Дістаємо елементи
    const modal = document.getElementById('modal');
    const openModalBtn = document.querySelector('.more-info');
    const closeModalBtn = document.getElementById('modalClose');

    // Функція відкриття модального вікна
    function openModal() {
      modal.classList.add('active');
      document.body.classList.add('modal-open');
    }

    // Функція закриття модального вікна
    function closeModal() {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }

    // Відкриття модального вікна при натисканні кнопки
    openModalBtn.addEventListener('click', openModal);

    // Закриття модального вікна при натисканні кнопки Х
    closeModalBtn.addEventListener('click', closeModal);

    // Закриття модального вікна при натисканні поза вікном
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Закриття модального вікна при натисканні клавіші ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
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