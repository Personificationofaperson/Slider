const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
const allSlides = document.querySelectorAll(".slide");
const carrousel = document.querySelector(".carrousel");
const slideWidth = document.querySelector(".slide").offsetWidth;
let index = 0;

        leftArrow.addEventListener("click", function(e) {
                index--;
                console.log(index);
                if (index === -1) {
                        carrousel.style.transform = `translateX(-${slideWidth * allSlides.length}px)`;
                        index = allSlides.length;
                }
                else if (index <= allSlides.length) {
                        console.log("slidewidth ", slideWidth, index);
                        carrousel.classList.add("moveslider");  
                        carrousel.style.transform = `translateX(-${slideWidth * index}px)`;
                }
        });

        //if there's x slides to scroll, scroll that amount of slides

    rightArrow.addEventListener("click", function(e) {
        index++;
        if (index <= allSlides.length) {
                carrousel.classList.add("moveslider");
                carrousel.style.transform = `translateX(-${slideWidth * index}px)`;
        }
        else if (index >= allSlides.length) {
                carrousel.style.transform = "translateX(0px)";
                index = 0;
        }
});