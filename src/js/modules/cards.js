import {getResourse} from "../services/services";

function cards(){
        class MenuCard {
            constructor(img, alt, subtitle, descr, price, parentSelector) {
            this.img = img;
            this.alt = alt;
            this.subtitle = subtitle;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 20;
            this.changeToUAN();
            }
            changeToUAN(){
                this.price = this.price * this.transfer;
            }
            setCard(){
                const element = document.createElement('div');
                element.classList.add('menu__item');
                element.innerHTML = 
                ` <img src=${this.img} alt=${this.alt}>
                        <h3 class="menu__item-subtitle">Меню ${this.subtitle}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
                `;
                this.parent.append(element);
            }
        }
    
        getResourse('http://localhost:3000/menu')
        .then(data => {
                data.forEach(({img, altimg, title, descr, price}) => {
                    new MenuCard(img, altimg, title, descr, price, '.menu .container').setCard();
                });
        });
}
export default cards;