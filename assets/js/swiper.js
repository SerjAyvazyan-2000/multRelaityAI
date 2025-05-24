


function initSwiper() {
    let reviewsSwiper;

    const isMobile = window.innerWidth <= 992;
    const direction = isMobile ? "horizontal" : "vertical";
    const delay = isMobile ? 4000 : 2000;

    if (reviewsSwiper) {
        reviewsSwiper.destroy(true, true);
    }

    reviewsSwiper = new Swiper(".reviews-swiper", {
        direction: direction,
        spaceBetween: 12,
        slidesPerView: 2.9,
        pagination: {
            el: ".reviews-pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: delay,
            disableOnInteraction: false,
        },
        speed: 2000,

        breakpoints: {
            320: {slidesPerView: 1,},
            490: {slidesPerView: 1},
            576: {slidesPerView: 1,spaceBetween: 20},
            620: {slidesPerView: 1.5,},
            810: {slidesPerView: 2},
            992: {slidesPerView: 2},
            1096: {slidesPerView: 2.5},
            1232: {slidesPerView: 2.8},
            1920: {slidesPerView: 2.9},
        },

    });
    const swiperContainer = document.querySelector(".reviews-swiper");

    if(swiperContainer){

        swiperContainer.addEventListener("mouseenter", () => {
            reviewsSwiper.autoplay.stop();
        });

        swiperContainer.addEventListener("mouseleave", () => {
            reviewsSwiper.autoplay.start();
        });
    }

}

initSwiper();






let servicesSwiper;

function initServicesSwiper() {
    const screenWidth = window.innerWidth;

    if (servicesSwiper) {
        servicesSwiper.destroy(true, true);
    }

    servicesSwiper = new Swiper('.services-swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: screenWidth < 576,

        pagination: {
            el: '.services-pagination',
            clickable: true
        },

        breakpoints: {
            320: { slidesPerView: 1 },
            490: { slidesPerView: 1 },
            620: { slidesPerView: 1.5 },
            810: { slidesPerView: 2 },
            992: { slidesPerView: 2 },
            1096: { slidesPerView: 2.5 },
            1232: { slidesPerView: 3 },
            1920: { slidesPerView: 3 },
        },
    });
}

initServicesSwiper();

window.addEventListener('resize', () => {
    initServicesSwiper();
});