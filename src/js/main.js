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
    var id = $(this).attr("href"),
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