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
    if ($('.bx1').length) {
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
    }


    // Testimonials
    var swiper = new Swiper(".testimsl", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    if ($(window).width() < 992) {
        $('.dropdownlink>a').click(function () {
            $(this).toggleClass('active');
            $(this).next('.submenu').toggleClass('show');
        })
    }


    $('.menu').click(function () {
        $('.mobshadowbox').addClass('show');
        $('.navcol').addClass('show');
    });

    $('.closemenu').click(function () {
        $('.mobshadowbox').removeClass('show');
        $('.navcol').removeClass('show');
    });


    $('.totop').click(function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })


    if ($('header').length) {

        var prevScrollpos = window.pageYOffset;

        /* Get the header element and it's position */
        var headerDiv = document.querySelector("header");
        var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;

            /* if we're scrolling up, or we haven't passed the header,
               show the header at the top */
            if (prevScrollpos > currentScrollPos || currentScrollPos < headerBottom) {
                headerDiv.style.top = "0";
            }
            else {
                /* otherwise we're scrolling down & have passed the header so hide it */
                headerDiv.style.top = "-7.2rem";
            }

            prevScrollpos = currentScrollPos;
        }

    }

    if ($('.fixedelements').length) {
        const fixedElements = document.querySelector('.fixedelements');
        let lastScrollTop = 0;
    
        window.addEventListener('scroll', function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
            if (scrollTop > 100) { // Показуємо блок при прокрутці більше ніж на 100px вниз
                fixedElements.classList.add('visible');
            } else { // Ховаємо блок при прокрутці вгору до самого верху
                fixedElements.classList.remove('visible');
            }
    
            lastScrollTop = scrollTop;
        });
    }
    

})