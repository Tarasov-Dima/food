import {getZero} from './timer';
function slider({container, slide, prevArrow, nextArrow, currentNumber, totalNumber, field, wrapper}){
    //carousel slider
    const   rightArrow = document.querySelector(nextArrow),
            leftArrow = document.querySelector(prevArrow),
            slideContent = document.querySelectorAll(slide),
            slider = document.querySelector(container),
            slideNumber = document.querySelector(currentNumber),
            slideTotalNumber = document.querySelector(totalNumber),
            slideField = document.querySelector(field),
            slideWrapper = document.querySelector(wrapper),
            slidesWidth = window.getComputedStyle(slideWrapper).width;

    let offset = 0;
    let numSlide = 1;

    let fieldWidth = +slidesWidth.replace(/\D/g, '');

    slideField.style.width = 100 * slideContent.length +'%';

    slideContent.forEach((slide) => {
        slide.classList.add('active');
        slide.style.width = slidesWidth;
    });

    slideWrapper.style.overflow = 'hidden';

    //Corousel dots
    let indicators = document.createElement('ol'),
    dots = [];
    indicators.classList.add('carousel-indicators');
    
    for (let i = 0; i < slideContent.length; i++){
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i+1);
        
        if(i == 0){
            dot.classList.add('active');
        }
        indicators.append(dot);
        dots.push(dot);
    }
    slider.append(indicators);
            
    //EventListener for slider's arrows and dots
    rightArrow.addEventListener('click', ()=>{
        if (offset == fieldWidth * (slideContent.length-1)){
            offset = 0;
        } else {
            offset += fieldWidth;
        }
        slideField.style.transform = `translateX(-${offset}px)`;
        numSlide++;
        changeNumOfSlide();
        changeActiveDot();
    });
    
    leftArrow.addEventListener('click', ()=>{
        if (offset == 0){
            offset = fieldWidth * (slideContent.length-1);
        }else{
            offset -= fieldWidth;
        }
        slideField.style.transform = `translateX(-${offset}px)`;
        numSlide--;
        changeNumOfSlide();
        changeActiveDot();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            numSlide = slideTo;
            offset = fieldWidth * (slideTo -1);
            
            slideField.style.transform = `translateX(-${offset}px)`;
            changeNumOfSlide();
            changeActiveDot();
        });
    });

    function changeActiveDot(){
        dots.forEach(dot =>{
            dot.classList.remove('active');
        });
        dots[numSlide-1].classList.add('active');
    }
    function changeNumOfSlide() {
        if (numSlide > slideContent.length ){
            numSlide = 1;
        } 
        if(numSlide < 1){
            numSlide = slideContent.length;
        }
        slideNumber.textContent = getZero(numSlide);
    }
    slideTotalNumber.textContent = getZero(slideContent.length);

}
export default slider;