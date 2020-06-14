const sliderPrev = document.getElementById("sliderPrev");
const sliderNext = document.getElementById("sliderNext");
const sliderImg = document.getElementsByClassName("slider__img");
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
    makeObjVisible(sliderPrev);
    if (currentImgIndex === sliderImg.length - 1) {
    	currentImgIndex = currentImgIndex;
    	makeObjInvisible(sliderNext);
    }
    makeObjVisible(sliderImg[currentImgIndex]);   
}

function showPrevSlide() {
	makeObjInvisible(sliderImg[currentImgIndex]);
   	currentImgIndex--;
    makeObjVisible(sliderNext);
    if (currentImgIndex === 0) {
    	currentImgIndex = currentImgIndex;
    	makeObjInvisible(sliderPrev);
    }
    makeObjVisible(sliderImg[currentImgIndex]); 
}

sliderNext.addEventListener("click", function() {
	showNextSlide();
});

sliderPrev.addEventListener("click", function() {
	showPrevSlide();
});

