/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', () => {
  let menuBlock = document.querySelector('.tabheader__items'),
      menu = document.querySelectorAll('.tabheader__item'),
      tabs = document.querySelectorAll('.tabcontent'); // Tabs

  menuBlock.addEventListener('click', event => {
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

  function removeClass(arr) {
    arr.forEach(item => {
      item.classList.remove('tabcontent_active', 'fade');
      item.classList.remove('tabheader__item_active', 'fade');
    });
  } // TImer


  const deadLine = '2021-08-25';
  const timerDay = document.getElementById('days'),
        timerHour = document.getElementById('hours'),
        timerMinute = document.getElementById('minutes'),
        timerSecond = document.getElementById('seconds');

  function getTimeRemaining(endtime) {
    const time = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(time / (1000 * 60 * 60 * 24)),
          hours = Math.floor(time / (1000 * 60 * 60) % 24),
          minutes = Math.floor(time / (1000 * 60) % 60),
          seconds = Math.floor(time / 1000 % 60);
    return {
      'total': time,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function clock(endtime) {
    const timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      timerDay.innerHTML = getZero(t.days);
      timerHour.innerHTML = getZero(t.hours);
      timerMinute.innerHTML = getZero(t.minutes);
      timerSecond.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
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

    function detectName(num) {
      const t = getTimeRemaining(endtime);
      let someName, selector;

      if (num == t.seconds) {
        someName = {
          first: 'секунда',
          second: 'секунды',
          third: 'секунд'
        };
        selector = document.querySelector('.secondchange');
      }

      if (num == t.minutes) {
        someName = {
          first: 'минута',
          second: 'минуты',
          third: 'минут'
        };
        selector = document.querySelector('.minutechange');
      }

      if (num == t.hours) {
        someName = {
          first: 'час',
          second: 'часа',
          third: 'часов'
        };
        selector = document.querySelector('.hourchange');
      }

      if (num == t.days) {
        someName = {
          first: 'день',
          second: 'дня',
          third: 'дней'
        };
        selector = document.querySelector('.daychange');
      }

      changeName(someName, selector, num);
    }

    function changeName(someName, selector, num) {
      if (num == 1 || num == 21 || num == 31 || num == 41 || num == 51) {
        selector.textContent = someName.first;
      } else if (num > 1 && num < 5 || num > 21 && num < 25 || num > 31 && num < 35 || num > 41 && num < 45 || num > 51 && num < 55) {
        selector.textContent = someName.second;
      } else {
        selector.textContent = someName.third;
      }
    }

    function getZero(num) {
      if (num >= 0 && num < 10 && num != 0) {
        return `0${num}`;
      } else {
        return num;
      }
    }
  }

  clock(deadLine); //Modal

  const modal = document.querySelector('.modal'),
        modalBtns = document.querySelectorAll('button[data-modal]'),
        modalClose = document.querySelector('[data-close]');

  const modalToogle = () => {
    modal.classList.toggle('modal_active');

    if (modal.classList.contains('modal_active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    } // clearInterval(modalTimerId);

  };

  modalBtns.forEach(btn => btn.addEventListener('click', modalToogle));
  modalClose.addEventListener('click', () => {
    modalToogle();
  });
  modal.addEventListener('click', e => {
    if (e.target == modal) {
      modalToogle();
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && modal.classList.contains('modal_active')) {
      modalToogle();
    }
  }); // const modalTimerId = setTimeout(modalToogle, 3000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      modalToogle();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll); //Cards

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

    changeToUAN() {
      this.price = this.price * this.transfer;
    }

    setCard() {
      const element = document.createElement('div');
      element.classList.add('menu__item');
      element.innerHTML = ` <img src=${this.img} alt=${this.alt}>
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

  new MenuCard("img/tabs/vegy.jpg", "vegy", '"Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 229, '.menu .container').setCard();
  new MenuCard("img/tabs/elite.jpg", "elite", '“Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 550, '.menu .container').setCard();
  new MenuCard("img/tabs/post.jpg", "post", '"Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 430, '.menu .container').setCard(); //Forms

  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'Загрузка',
    success: 'Спасибо! Скоро свяжемся',
    failure: 'Что-то пошло не так...'
  };

  function postData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const statusMessage = document.createElement('div');
      statusMessage.textContent = message.loading;
      form.append(statusMessage);
      const request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-type', 'application/json');
      const formData = new FormData(form);
      const object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      const json = JSON.stringify(object);
      request.send(json);
      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response);
          statusMessage.textContent = message.success;
        } else {
          statusMessage.textContent = message.failure;
        }

        setTimeout(() => {
          form.reset();
          statusMessage.remove();
        }, 1000);
      });
    });
  }

  forms.forEach(form => {
    postData(form);
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map