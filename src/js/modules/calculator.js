function calculator(){
    //Calculator
    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;
    //check local storage
    if(localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    }else{
        sex = 'female';
        localStorage.setItem("sex", 'female');
    }
    if(localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    }else{
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function addActiveClassForCalculator(element){
        element.classList.add('calculating__choose-item_active');
    }
    function removeActiveClassForCalculator(element){
        element.classList.remove('calculating__choose-item_active');
    }

    function changeActiveClassLocalStorage(selector){
        const items = document.querySelectorAll(`${selector} div`);

        items.forEach(item => {
            removeActiveClassForCalculator(item);
            if(localStorage.getItem('sex') === item.getAttribute('id')) {
                addActiveClassForCalculator(item);
            }
            if(localStorage.getItem('ratio') === item.getAttribute('data-ratio')) {
                addActiveClassForCalculator(item);
            }
        });
    }
    changeActiveClassLocalStorage('#gender');
    changeActiveClassLocalStorage('.calculating__choose_big');

    function calculateResult() {
        if(!sex || !height || !weight || !age || !ratio){
            result.textContent = "0";
            return;
        }
        let formula =  (9.99 * weight) + (6.25 * height) - (4.92 * age);
        if (sex == 'female'){
            result.textContent = Math.round( (formula - 161) * ratio);
        } else {
            result.textContent = Math.round( (formula + 5)  * ratio);
        }
    }
    calculateResult();

    function getCalculateData(selector){
        const calcItem = document.querySelectorAll(`${selector} div`);

        calcItem.forEach(item => {
            item.addEventListener('click', (event) => {
                let e = event.target;
                if (e.hasAttribute('data-ratio')){
                    ratio = +e.getAttribute('data-ratio');
                    localStorage.setItem('ratio', ratio);
                } else {
                    sex = e.getAttribute("id");
                    localStorage.setItem('sex', sex);
                }

                calcItem.forEach(item => {
                   removeActiveClassForCalculator(item);
                });
                addActiveClassForCalculator(e);
                calculateResult();
            });
        });
    }
    
    getCalculateData('#gender');
    getCalculateData('.calculating__choose_big');


    function getInputData(selector){
        const input = document.querySelector(`${selector}`);
       
        input.addEventListener('input', () => {
  
            if (input.value.match(/\D/g)){
                input.style.border = '1px solid red';
            }else{
                input.style.border = 'none';
            }

            switch(input.getAttribute('id')){
                case "height":
                    height = input.value;
                    break;
                case "weight":
                    weight = input.value;
                    break;
                case "age":
                    age = input.value;
                    break;
            }
            calculateResult();
        });
    }
    
    getInputData('#height');
    getInputData('#age');
    getInputData('#weight');
}
export default calculator;