'use strict';
const sliderPrev = document.getElementById("sliderPrev");
const sliderNext = document.getElementById("sliderNext");
const sliderImg = document.getElementsByClassName("slider__img");
let sliderInterval = setInterval(showNextSlide, 3000);
let currentImgIndex = 0;

function makeObjVisible(obj) {
	obj.classList.remove("invisible");
}

function makeObjInvisible(obj) {
	obj.classList.add("invisible");
}

function showNextSlide() {
	makeObjInvisible(sliderImg[currentImgIndex]);
    currentImgIndex++;
    if (currentImgIndex === sliderImg.length) {
    	currentImgIndex = 0;
    }
    makeObjVisible(sliderImg[currentImgIndex]);   
}

function showPrevSlide() {
    makeObjInvisible(sliderImg[currentImgIndex]);
    if (currentImgIndex === 0) {
        currentImgIndex = sliderImg.length;
    }
    currentImgIndex--;
    makeObjVisible(sliderImg[currentImgIndex]);   
}

function reloadInterval() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(showNextSlide, 3000);
}

sliderNext.addEventListener("click", function() {
	showNextSlide();
    reloadInterval();
});

sliderPrev.addEventListener("click", function() {
	showPrevSlide();
    reloadInterval();
});

