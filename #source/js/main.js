


let burger = document.querySelector('.ham');
let burgerMain = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
const body = document.body;

let links = document.querySelectorAll('.header__link');

// Бургер меню
burger.onclick = function () {
    burger.classList.toggle('active');
    burgerMain.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');

    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {

            burger.classList.remove('active');
            burgerMain.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('lock');


        }
    }

}




$(document).ready(function () {

    $('.basic').fancySelect();

    let select = document.querySelector('.trigger');
    select.classList.add('trigger__bg');



    $("a.video__img").fancybox({
        'padding': 50,
        'width': 600,
        toolbar: false,
        animationEffect: "zoom",
        animationDuration: 366,
        smallBtn: true,
        arrows: true,

    });




    let swiper;

    if ($(window).width() < 767) {
        swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            initialSlide: 1,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 180,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },


        });
    }

    else {
        swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            initialSlide: 1,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 180,
                depth: 100,
                modifier: 2,
                slideShadows: false,
            },
        });
    }

});
