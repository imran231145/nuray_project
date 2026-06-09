document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".nav-btn");
    var slides = document.querySelectorAll(".slide");
    var prevBtn = document.getElementById("prev-btn");
    var nextBtn = document.getElementById("next-btn");
    var counter = document.getElementById("slide-counter");
    var startBtn = document.getElementById("start-project-btn");

    var activeIdx = 1; 
    var totalContentSlides = 5; 

    function showSlide(slideNum) {
        activeIdx = slideNum;

        slides.forEach(function(slide) {
            if (slide.id === "slide-" + slideNum) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });

        buttons.forEach(function(btn) {
            var btnSlideNum = parseInt(btn.getAttribute("data-slide"));
            if (btnSlideNum === (slideNum - 2)) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        if (slideNum === 1) {
            counter.textContent = "Intro / " + totalContentSlides;
        } else if (slideNum === 2) {
            counter.textContent = "Plan / " + totalContentSlides;
        } else {
            var contentNum = slideNum - 2;
            counter.textContent = contentNum + " / " + totalContentSlides;
        }
    }

    if (startBtn) {
        startBtn.addEventListener("click", function() {
            showSlide(3); 
        });
    }

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var btnSlideNum = parseInt(button.getAttribute("data-slide"));
            showSlide(btnSlideNum + 2); 
        });
    });

    prevBtn.addEventListener("click", function() {
        if (activeIdx > 1) {
            showSlide(activeIdx - 1);
        }
    });

    nextBtn.addEventListener("click", function() {
        if (activeIdx < (totalContentSlides + 2)) {
            showSlide(activeIdx + 1);
        }
    });

    showSlide(1);
});