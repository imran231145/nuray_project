document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".nav-btn");
    var slides = document.querySelectorAll(".slide");
    var prevBtn = document.getElementById("prev-btn");
    var nextBtn = document.getElementById("next-btn");
    var counter = document.getElementById("slide-counter");

    var activeIdx = 1;
    var totalSlides = slides.length;

    function showSlide(slideNum) {
        if (slideNum < 1 || slideNum > totalSlides) return;

        activeIdx = slideNum;

        // Переключение активного слайда
        slides.forEach(function(slide) {
            if (slide.id === "slide-" + slideNum) {
                slide.classList.add("active");
                slide.scrollIntoView({ behavior: "smooth", block: "center" });
            } else {
                slide.classList.remove("active");
            }
        });

        // Переключение активной кнопки слева
        buttons.forEach(function(btn) {
            if (parseInt(btn.getAttribute("data-slide")) === slideNum) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        // Обновление счетчика текстом
        counter.textContent = slideNum + " / " + totalSlides;
    }

    // Клик по кнопкам 01-05
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var num = parseInt(button.getAttribute("data-slide"));
            showSlide(num);
        });
    });

    // Кнопка Назад
    prevBtn.addEventListener("click", function() {
        if (activeIdx > 1) {
            showSlide(activeIdx - 1);
        }
    });

    // Кнопка Вперед
    nextBtn.addEventListener("click", function() {
        if (activeIdx < totalSlides) {
            showSlide(activeIdx + 1);
        }
    });
});