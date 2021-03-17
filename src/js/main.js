//Меню на мобильных устройствах
// полноэкранное мобильное меню
$(".nav__trigger").on("click", function (e) {
  e.preventDefault(); // предотвращаем поведение по умолчанию
  $(this).parent().toggleClass("nav--active").show(); //добавляем класс nav--active к nav icon
  $(".nav__trigger").toggleClass("nav__trigger--active"); //добавляем класс nav__trigger--active к nav nav__trigger
  $("body").toggleClass("no-scroll"); //отключаем прокрутку за навигацией
});
// нажатие на ссылку закрывает меню и включает прокрутку тела
$(".nav li a").on("click", function () {
  $(".nav__trigger").removeClass("nav__trigger--active");
  $(".nav__trigger").parent().removeClass("nav--active");
  $(".nav__icon").removeClass("nav--active");
  $("body").removeClass("no-scroll");
});
// плавная прокрутка до якоря меню
$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    const id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
$(document).ready(function () {
  $("#hero-shop").on("click", "a", function (event) {
    event.preventDefault();
    const id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
$(document).ready(function () {
  $("#footer-menu").on("click", "a", function (event) {
    event.preventDefault();
    const id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

//scroll to top button
(function scrollTop() {
  const scrollButton = document.querySelector('.scrollTop');
  if (!scrollButton) return;
  let trigger = false;
  function resetTrigger() {
      trigger = true;
  }
  window.addEventListener('scroll', resetTrigger);
  let scrollInterval = setInterval(function () {
      if (!trigger) return;
      trigger = false;
      let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled >= 400) {
          scrollButton.classList.add('active');
      }
      else {
          scrollButton.classList.remove('active');
      }
  }, 250);
  scrollButton.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
  });
})();

// Валидация формы offer-form
$(document).ready(function () {
  $("#offer-form").validate({
    rules: {
      email: {
        required: true,
      },
      phone: {
        required: true,
      },
    },
    messages: {
      email: {
        required: "Введите ваш E-mail",
        email: "Ваш E-mail должен быть в формате name@domain.com"
      },
      phone: {
        required: "Введите номер телефона",
      },
    },
  });
  // Маска для телефона
  $(".phone").mask("+7 (999) 999-99-99");
});

// Валидация формы offer-form-2
$(document).ready(function () {
  $("#offer-form-2").validate({
    rules: {
      user_email: {
        required: true,
      },
      user_phone: {
        required: true,
      },
    },
    messages: {
      user_email: {
        required: "Введите ваш E-mail",
        email: "Ваш E-mail должен быть в формате name@domain.com"
      },
      user_phone: {
        required: "Введите номер телефона",
      },
    },
  });
  // Маска для телефона
  $(".phone").mask("+7 (999) 999-99-99");
});

// Валидация формы samples-form
$(document).ready(function () {
  $("#samples-form").validate({
    rules: {
      samples_phone: {
        required: true,
      },
    },
    messages: {
      samples_phone: {
        required: "Введите номер телефона",
      },
    },
  });
  // Маска для телефона
  $(".phone").mask("+7 (999) 999-99-99");
});

// Выбор товара по цвету 
const $button = $('.shop__accordion-content__text-colors__minBl');
$button.on('click', function () {
  const n=$button.index(this);
    $(".shop__accordion-content__image-bl").removeClass("active");
    $(".shop__accordion-content__image-bl").eq(n).addClass("active");
});
const $button2 = $('.shop__accordion-content__text-colors__minBl-2');
$button2.on('click', function () {
  const n=$button2.index(this);
    $(".shop__accordion-content__image-bl-2").removeClass("active");
    $(".shop__accordion-content__image-bl-2").eq(n).addClass("active");
});
const $button3 = $('.shop__accordion-content__text-colors__minBl-3');
$button3.on('click', function () {
  const n=$button3.index(this);
    $(".shop__accordion-content__image-bl-3").removeClass("active");
    $(".shop__accordion-content__image-bl-3").eq(n).addClass("active");
});
const $button4 = $('.shop__accordion-content__text-colors__minBl-4');
$button4.on('click', function () {
  const n=$button4.index(this);
    $(".shop__accordion-content__image-bl-4").removeClass("active");
    $(".shop__accordion-content__image-bl-4").eq(n).addClass("active");
});
const $button5 = $('.shop__accordion-content__text-colors__minBl-5');
$button5.on('click', function () {
  const n=$button5.index(this);
    $(".shop__accordion-content__image-bl-5").removeClass("active");
    $(".shop__accordion-content__image-bl-5").eq(n).addClass("active");
});
const $button6 = $('.shop__accordion-content__text-colors__minBl-6');
$button6.on('click', function () {
  const n=$button6.index(this);
    $(".shop__accordion-content__image-bl-6").removeClass("active");
    $(".shop__accordion-content__image-bl-6").eq(n).addClass("active");
});

// Выбор типа изделия 
const $button7 = $('.packaging__slide-minBl');
$button7.on('click', function () {
  const n=$button7.index(this);
    $(".packaging__img-volume__number-bl").removeClass("active");
    $(".packaging__img-volume__number-bl").eq(n).addClass("active");
    $(".packaging__slide-img").removeClass("active");
    $(".packaging__slide-img").eq(n).addClass("active");
    $(".packaging__slide-text").removeClass("active");
    $(".packaging__slide-text").eq(n).addClass("active");
});


// Яндекс карта для офиса в блоке "Контактная информация" с загрузкой при наведении

//Переменная для включения/отключения индикатора загрузки
let spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
let check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
let myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором map-yandex
function init () {
  let myMapTemp = new ymaps.Map("map-yandex", {
    center: [55.747505, 49.210072], // координаты центра на карте
    zoom: 15, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  let myPlacemarkTemp = new ymaps.Placemark([55.747505, 49.210072], {
      hintContent: 'Офис компании',
      balloonContent: "г. Казань, ул. Рихарда Зорге, д. 66Б, оф. 201",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/contacts/map-marker.png',
      // Размеры метки.
      iconImageSize: [24, 24],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-12, -24],
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  let layer = myMapTemp.layers.get(0).get(0);
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
  // Отключение изменение масштаба карты колесом мыши на десктопах
  myMapTemp.behaviors.disable("scrollZoom");
  // Отключение мультитач жестов
  myMapTemp.behaviors.disable("multiTouch");
  // Отключаем перетаскивание карты
  myMapTemp.behaviors.disable("drag");
}
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    let tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
function getTileContainer(layer) {
  for (let k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  let script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
let ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
$(function() {
  //Запускаем основную функцию
  ymap();
});