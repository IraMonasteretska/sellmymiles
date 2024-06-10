$(document).ready(function () {
    // styled selects
    if ($('select').length) {
        $('.styledselect').select2({
            placeholder: "Select a state",
            minimumResultsForSearch: Infinity,
        });
    }

    // header
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    // hover plane anim
    const bx1 = document.querySelector('.bx1');
    const bx2 = document.querySelector('.bx2');
    const bx3 = document.querySelector('.bx3');
    const stepssectPlane = document.querySelector('.stepssect__plane');

    bx1.addEventListener('mouseenter', function () {
        stepssectPlane.classList.add('hov1');
    });

    bx1.addEventListener('mouseleave', function () {
        stepssectPlane.classList.remove('hov1');
    });

    bx2.addEventListener('mouseenter', function () {
        stepssectPlane.classList.add('hov2');
    });

    bx2.addEventListener('mouseleave', function () {
        stepssectPlane.classList.remove('hov2');
    });

    bx3.addEventListener('mouseenter', function () {
        stepssectPlane.classList.add('hov3');
    });

    bx3.addEventListener('mouseleave', function () {
        stepssectPlane.classList.remove('hov3');
    });

    // Testimonials
    var swiper = new Swiper(".testimsl", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });





})