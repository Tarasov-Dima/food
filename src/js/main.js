    import tabs  from './modules/tabs';
    import timer  from './modules/timer';
    import modal  from './modules/modal';
    import forms  from './modules/forms';
    import slider  from './modules/carouselSlider';
    import cards  from './modules/cards';
    import calculator  from './modules/calculator';
    import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 5000);
    tabs();
    timer('2021-10-12');
    modal('.modal', modalTimerId);
    forms(modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide', 
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        currentNumber: '#current',
        totalNumber: '#total',
        field: '.offer__slider-inner',
        wrapper: '.offer__slider-wrapper'
    });
    cards();
    calculator();
}); 




