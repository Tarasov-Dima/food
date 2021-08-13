window.addEventListener('DOMContentLoaded', () => {
    let   menuBlock = document.querySelector('.tabheader__items'),
            menu = document.querySelectorAll('.tabheader__item'),
            tabs = document.querySelectorAll('.tabcontent');


// Tabs
    menuBlock.addEventListener('click', (event) => {
        let link = event.target;

        if (link && link.classList.contains("tabheader__item")) {
            menu.forEach((menuLink, number) => {
                if (menuLink == link) {
                    removeClass(menu);
                    removeClass(tabs);
                    link.classList.add('tabheader__item_active', 'fade');
                    tabs[number].classList.add('tabcontent_active', 'fade');
                }
            });  
        }
    });
 
    function removeClass (arr){
        arr.forEach((item) => {
            item.classList.remove('tabcontent_active', 'fade');
            item.classList.remove('tabheader__item_active', 'fade');
        });
    }


// TImer

    const deadLine = '2021-08-14';
    const   timerDay = document.getElementById('days'),
            timerHour = document.getElementById('hours'),
            timerMinute = document.getElementById('minutes'),
            timerSecond = document.getElementById('seconds');


    function getTimeRemaining (endtime){
        const   time = Date.parse(endtime) - Date.parse(new Date()),
                days = Math.floor(time / (1000*60*60*24)),
                hours = Math.floor((time / (1000* 60 * 60)) % 24),
                minutes = Math.floor(time / (1000 * 60) % 60),
                seconds = Math.floor((time / 1000) % 60);

               return {
                   'total': time,
                   'days': days,
                   'hours': hours,
                   'minutes': minutes,
                   'seconds': seconds
               };
    }
    
    function clock(endtime) {

        const timeInterval = setInterval(updateClock,1000);

        updateClock();

        function updateClock (){
            const t = getTimeRemaining(endtime);

            timerDay.innerHTML = getZero(t.days);
            timerHour.innerHTML = getZero(t.hours);
            timerMinute.innerHTML = getZero(t.minutes);
            timerSecond.innerHTML = getZero(t.seconds);
            if(t.total <= 0){
                clearInterval(timeInterval);
                timerDay.innerHTML = 0;
                timerHour.innerHTML = 0;
                timerMinute.innerHTML = 0;
                timerSecond.innerHTML = 0;
            }

            detectName(t.minutes);
            detectName(t.seconds);
            detectName(t.hours);
            detectName(t.days);

        }

        function detectName(num){
            const t = getTimeRemaining(endtime);
            let someName,
                selector;
            if(num == t.seconds){
                someName = ['секунда','секунды','секунд'];
                selector =  document.querySelector('.secondchange');
            }
            if(num == t.minutes){
                someName = ['минута','минуты','минут'];
                selector = document.querySelector('.minutechange');
            }if(num ==t.hours){
                someName = ['час','часа','часов'];
                selector = document.querySelector('.hourchange');
            }if(num == t.days){
                someName = ['день','дня','дней'];
                selector = document.querySelector('.daychange');

            }
           changeName(someName, selector, num);
        }
        
        function changeName(someName, selector, num){
            if(num == 1 || num == 21 || num == 31 || num == 41 || num == 51){
                selector.textContent = someName[0];
            }else if(num > 1 && num < 5 || num > 21 && num < 25 || num > 31 && num < 35 || num > 41 && num < 45 || num > 51 && num < 55){ 
                selector.textContent = someName[1];            
            }else{
                selector.textContent = someName[2]; 
            }
           
        }
        
        function getZero(num){
            if(num >= 0 && num < 10 && num != 0){
                return `0${num}`;
            }else {
                return num;
            }
        }
        
        
    }
    clock(deadLine);


    //Modal

    const   modal = document.querySelector('.modal'),
            modalBtns = document.querySelectorAll('button[data-modal]'),
            modalClose = document.querySelector('[data-close');
    
    const modalToogle = () => {
        modal.classList.toggle('modal_active');
        if(modal.classList.contains('modal_active')){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = '';
        }
        clearInterval(modalTimerId);
    };
    
    modalBtns.forEach((btn) => {
        btn.addEventListener('click', modalToogle);
    });
    modalClose.addEventListener('click', () => {
        modalToogle();
    });
    modal.addEventListener('click', (e) => {
        if (e.target == modal){
            modalToogle();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('modal_active')){
            modalToogle();
        }
    });

    const modalTimerId = setTimeout(modalToogle, 3000);

    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            modalToogle();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll',showModalByScroll);
});
