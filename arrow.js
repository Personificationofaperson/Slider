const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
const allSlides = document.querySelectorAll(".slide");
const carrousel = document.querySelector(".carrousel");
const slideWidth = document.querySelector(".slide").offsetWidth + parseFloat(getComputedStyle(carrousel).gap) + 20; //full width of each slide including gap and margin set in CSS

const widthCarrousel = document.querySelector(".outer-carrousel").scrollWidth;
const initialSlidesInView = Math.round(document.querySelector(".outer-carrousel").offsetWidth / slideWidth); // how many slides are in view at the start
const maxIndex = allSlides.length - initialSlidesInView; // maximum index to scroll to, which is the total number of slides minus the number of slides in view at the start
const widthInitial = document.querySelector(".outer-carrousel").offsetWidth; // width of the outer carrousel, including the remaining scrollwidth
const fullScrollAmount = Math.round((widthCarrousel - widthInitial) / initialSlidesInView + 10); //amount to scroll per click, based on the width of the outer carrousel and the number of slides in view with extra padding for the last slide

index = 0;

        leftArrow.addEventListener("click", function(e) {
                index --;
                console.log(index);
                if (index < 0) { // if you click the left arrow on the first slide, position is reset to the last slide for looping behaviour
                        carrousel.style.transform = `translateX(-${fullScrollAmount * maxIndex}px)`; // last slide position
                        carrousel.classList.add("moveslider");  
                        index = maxIndex; 
                }
                else if (index <= maxIndex) {
                        carrousel.classList.add("moveslider");  
                        carrousel.style.transform = `translateX(-${slideWidth * index}px)`;
                }
        });

    rightArrow.addEventListener("click", function(e) {
        index ++;
        if (index < maxIndex) { // if index is smaller than 3 (maxindex), we can scroll
                carrousel.classList.add("moveslider");
                carrousel.style.transform = `translateX(-${slideWidth * index}px)`;
        }
        else if (index === maxIndex)  { //if index is equal to 3, we can scroll to the last slide
                carrousel.style.transform = `translateX(-${fullScrollAmount * index}px)`; // if index is equal to 3, we can scroll to the last slide
        }
        else {
                carrousel.style.transform = "translateX(0px)"; // if index is greater than 3, we reset the position to the first slide
                index = 0; // reset index to 0
        }

});
