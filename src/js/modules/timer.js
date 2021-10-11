function getZero(num){
    if (num >= 0 && num < 10 && num != 0){
        return `0${num}`;
    } else {
        return num;
    }
}
function timer(deadLine){

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
            if (num == t.seconds){
                someName = {
                    first: 'секунда',
                    second: 'секунды',
                    third: 'секунд'
                };
                selector =  document.querySelector('.secondchange');
            } 
            if (num == t.minutes){
                someName = {
                    first: 'минута',
                    second: 'минуты',
                    third: 'минут'
                };
                selector = document.querySelector('.minutechange');
            }
            if (num ==t.hours){
                someName = {
                    first: 'час',
                    second: 'часа',
                    third: 'часов'
                };
                selector = document.querySelector('.hourchange');
            }
            if(num == t.days){
                someName = {
                    first: 'день',
                    second: 'дня',
                    third: 'дней'
                };
                selector = document.querySelector('.daychange');
            }
        changeName(someName, selector, num);
        }
        
        function changeName(someName, selector, num){
            if (num == 1 || num == 21 || num == 31 || num == 41 || num == 51){
                selector.textContent = someName.first;
            } else if (num > 1 && num < 5 || num > 21 && num < 25 || num > 31 && num < 35 || num > 41 && num < 45 || num > 51 && num < 55){ 
                selector.textContent = someName.second;            
            } else if(num == 0) {
                selector.textContent = someName.third;
            } else {
                selector.textContent = someName.third; 
            }
        }
        
        
        
        
    }
    clock(deadLine);
   
}
export default timer;
export {getZero};