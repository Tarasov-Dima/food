    import tabs  from './modules/tabs';
    import timer  from './modules/timer';
    import modal  from './modules/modal';
    import forms  from './modules/forms';
    import slider  from './modules/carouselSlider';
    import cards  from './modules/cards';
    import calculator  from './modules/calculator';
    import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 3000);
    tabs();
    timer();
    modal('.modal', modalTimerId);
    forms(modalTimerId);
    slider();
    cards();
    calculator();
    // new MenuCard(
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     '"Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     229,
    //     '.menu .container'
    // ).setCard();

    // new MenuCard(
    //     "img/tabs/elite.jpg",
    //     "elite",
    //     '“Премиум”',
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     550,
    //     '.menu .container'
    // ).setCard();

    // new MenuCard(
    //     "img/tabs/post.jpg",
    //     "post",
    //     '"Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     430,
    //     '.menu .container'
    // ).setCard();

}); 




