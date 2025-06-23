const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
const allSlides = document.querySelectorAll(".slide");
const carrousel = document.querySelector(".carrousel");
const gap = parseFloat(getComputedStyle(carrousel).gap); // get exact gap value from CSS, default to 32px if not set
const slideWidth = document.querySelector(".slide").offsetWidth + gap + 20; //full width of each slide including gap and margin set in CSS
let index = 0;

        leftArrow.addEventListener("click", function(e) {
                index --;
                console.log(index);
                if (index === -1) {
                        carrousel.style.transform = `translateX(-${slideWidth * 3}px)`;
                        index = 3;
                }
                else if (index <= allSlides.length) {
                        carrousel.classList.add("moveslider");  
                        carrousel.style.transform = `translateX(-${slideWidth * index}px)`;
                }
        });

    rightArrow.addEventListener("click", function(e) {
        index ++;
        if (index <= allSlides.length - 3) {
                carrousel.classList.add("moveslider");
                carrousel.style.transform = `translateX(-${slideWidth * index}px)`;
        }
        else  {
                carrousel.style.transform = "translateX(0px)";
                index = 0;
        }
});