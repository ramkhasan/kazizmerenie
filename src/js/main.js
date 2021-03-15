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