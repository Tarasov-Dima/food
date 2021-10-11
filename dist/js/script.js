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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_carouselSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/carouselSlider */ "./src/js/modules/carouselSlider.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");








window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["openModal"])('.modal', modalTimerId), 5000);
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])('2021-10-12');
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('.modal', modalTimerId);
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])(modalTimerId);
  Object(_modules_carouselSlider__WEBPACK_IMPORTED_MODULE_4__["default"])({
    container: '.offer__slider',
    slide: '.offer__slide',
    prevArrow: '.offer__slider-prev',
    nextArrow: '.offer__slider-next',
    currentNumber: '#current',
    totalNumber: '#total',
    field: '.offer__slider-inner',
    wrapper: '.offer__slider-wrapper'
  });
  Object(_modules_cards__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_calculator__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calculator() {
  //Calculator
  const result = document.querySelector('.calculating__result span');
  let sex, height, weight, age, ratio; //check local storage

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    sex = 'female';
    localStorage.setItem("sex", 'female');
  }

  if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
  } else {
    ratio = 1.375;
    localStorage.setItem('ratio', 1.375);
  }

  function addActiveClassForCalculator(element) {
    element.classList.add('calculating__choose-item_active');
  }

  function removeActiveClassForCalculator(element) {
    element.classList.remove('calculating__choose-item_active');
  }

  function changeActiveClassLocalStorage(selector) {
    const items = document.querySelectorAll(`${selector} div`);
    items.forEach(item => {
      removeActiveClassForCalculator(item);

      if (localStorage.getItem('sex') === item.getAttribute('id')) {
        addActiveClassForCalculator(item);
      }

      if (localStorage.getItem('ratio') === item.getAttribute('data-ratio')) {
        addActiveClassForCalculator(item);
      }
    });
  }

  changeActiveClassLocalStorage('#gender');
  changeActiveClassLocalStorage('.calculating__choose_big');

  function calculateResult() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = "0";
      return;
    }

    let formula = 9.99 * weight + 6.25 * height - 4.92 * age;

    if (sex == 'female') {
      result.textContent = Math.round((formula - 161) * ratio);
    } else {
      result.textContent = Math.round((formula + 5) * ratio);
    }
  }

  calculateResult();

  function getCalculateData(selector) {
    const calcItem = document.querySelectorAll(`${selector} div`);
    calcItem.forEach(item => {
      item.addEventListener('click', event => {
        let e = event.target;

        if (e.hasAttribute('data-ratio')) {
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

  function getInputData(selector) {
    const input = document.querySelector(`${selector}`);
    input.addEventListener('input', () => {
      if (input.value.match(/\D/g)) {
        input.style.border = '1px solid red';
      } else {
        input.style.border = 'none';
      }

      switch (input.getAttribute('id')) {
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

/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


function cards() {
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

  Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResourse"])('http://localhost:3000/menu').then(data => {
    data.forEach(({
      img,
      altimg,
      title,
      descr,
      price
    }) => {
      new MenuCard(img, altimg, title, descr, price, '.menu .container').setCard();
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/carouselSlider.js":
/*!******************************************!*\
  !*** ./src/js/modules/carouselSlider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./src/js/modules/timer.js");


function slider({
  container,
  slide,
  prevArrow,
  nextArrow,
  currentNumber,
  totalNumber,
  field,
  wrapper
}) {
  //carousel slider
  const rightArrow = document.querySelector(nextArrow),
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
  slideField.style.width = 100 * slideContent.length + '%';
  slideContent.forEach(slide => {
    slide.classList.add('active');
    slide.style.width = slidesWidth;
  });
  slideWrapper.style.overflow = 'hidden'; //Corousel dots

  let indicators = document.createElement('ol'),
      dots = [];
  indicators.classList.add('carousel-indicators');

  for (let i = 0; i < slideContent.length; i++) {
    const dot = document.createElement('li');
    dot.classList.add('dot');
    dot.setAttribute('data-slide-to', i + 1);

    if (i == 0) {
      dot.classList.add('active');
    }

    indicators.append(dot);
    dots.push(dot);
  }

  slider.append(indicators); //EventListener for slider's arrows and dots

  rightArrow.addEventListener('click', () => {
    if (offset == fieldWidth * (slideContent.length - 1)) {
      offset = 0;
    } else {
      offset += fieldWidth;
    }

    slideField.style.transform = `translateX(-${offset}px)`;
    numSlide++;
    changeNumOfSlide();
    changeActiveDot();
  });
  leftArrow.addEventListener('click', () => {
    if (offset == 0) {
      offset = fieldWidth * (slideContent.length - 1);
    } else {
      offset -= fieldWidth;
    }

    slideField.style.transform = `translateX(-${offset}px)`;
    numSlide--;
    changeNumOfSlide();
    changeActiveDot();
  });
  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      const slideTo = e.target.getAttribute('data-slide-to');
      numSlide = slideTo;
      offset = fieldWidth * (slideTo - 1);
      slideField.style.transform = `translateX(-${offset}px)`;
      changeNumOfSlide();
      changeActiveDot();
    });
  });

  function changeActiveDot() {
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    dots[numSlide - 1].classList.add('active');
  }

  function changeNumOfSlide() {
    if (numSlide > slideContent.length) {
      numSlide = 1;
    }

    if (numSlide < 1) {
      numSlide = slideContent.length;
    }

    slideNumber.textContent = Object(_timer__WEBPACK_IMPORTED_MODULE_0__["getZero"])(numSlide);
  }

  slideTotalNumber.textContent = Object(_timer__WEBPACK_IMPORTED_MODULE_0__["getZero"])(slideContent.length);
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");



function forms(modalTimerId) {
  //Forms
  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  forms.forEach(item => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement('afterend', statusMessage);
      let formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json).then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal', modalTimerId);
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
    }, 2000);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, closeModal, openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function modal(modalSelector, modalTimerId) {
  //Modal
  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector(modalSelector);
  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
  });
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
      closeModal(modalSelector);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs() {
  // Tabs
  let menuBlock = document.querySelector('.tabheader__items'),
      menu = document.querySelectorAll('.tabheader__item'),
      tabs = document.querySelectorAll('.tabcontent');
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
  }
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default, getZero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZero", function() { return getZero; });
function getZero(num) {
  if (num >= 0 && num < 10 && num != 0) {
    return `0${num}`;
  } else {
    return num;
  }
}

function timer(deadLine) {
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
      } else if (num == 0) {
        selector.textContent = someName.third;
      } else {
        selector.textContent = someName.third;
      }
    }
  }

  clock(deadLine);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);


/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: postData, getResourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourse", function() { return getResourse; });
//For forms
const postData = async (url, data) => {
  let result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  });
  return await result.json();
}; //For cards


const getResourse = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }

  return await res.json();
};




/***/ })

/******/ });
//# sourceMappingURL=script.js.map