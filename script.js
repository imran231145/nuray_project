document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".nav-btn");
    var slides = document.querySelectorAll(".slide");
    var prevBtn = document.getElementById("prev-btn");
    var nextBtn = document.getElementById("next-btn");
    var counter = document.getElementById("slide-counter");
    var startBtn = document.getElementById("start-project-btn"); // Новая кнопка

    var activeIdx = 0; // ИСПРАВЛЕНО: начинаем со слайда 0 (План проекта)
    var totalSlides = slides.length - 1; // Количество рабочих слайдов (без стартового)

    function showSlide(slideNum) {
        // slideNum может быть 0 (стартовый) или от 1 до 5
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

        // Переключение активной кнопки слева (01-05)
        buttons.forEach(function(btn) {
            if (parseInt(btn.getAttribute("data-slide")) === slideNum) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        // Обновление счетчика текстом (если на плане — пишем "Plan", если на слайдах — цифры)
        if (slideNum === 0) {
            counter.textContent = "Plan / " + totalSlides;
        } else {
            counter.textContent = slideNum + " / " + totalSlides;
        }
    }

    // Клик по кнопке "Start Project"
    if (startBtn) {
        startBtn.addEventListener("click", function() {
            showSlide(1); // Переключает на Слайд 01
        });
    }

    // Клик по боковым кнопкам 01-05
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var num = parseInt(button.getAttribute("data-slide"));
            showSlide(num);
        });
    });

    // Кнопка Назад
    prevBtn.addEventListener("click", function() {
        if (activeIdx > 0) { // Можно вернуться на план (0)
            showSlide(activeIdx - 1);
        }
    });

    // Кнопка Вперед
    nextBtn.addEventListener("click", function() {
        if (activeIdx < totalSlides) {
            showSlide(activeIdx + 1);
        }
    });

    // Инициализация первого показа
    showSlide(0);
});