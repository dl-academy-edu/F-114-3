// // Функция для работы со slider'ом.
// (function() {
//     const slider = document.querySelector('.slider'); // Получаем контейнер слайдера.
//     const wrapper = document.querySelector('.slider__wrapper'); // Получаем обертку слайдера.
//     const innerWrapper = document.querySelector('.slider__inner-wrapper'); // Получаем внутренню обёртку слайдера.
//     const slides = [...document.querySelectorAll('.slider__slide')];
//     const slidesCount = slides.length;
//     const buttonBack = document.querySelector('.slider__button_back-js');
//     const buttonNext = document.querySelector('.slider__button_next-js');
//     const pagination = document.querySelector('.slider__pagination_js');
//     const ANIMATION_TIME = 500;

//     let activeSlideIndex = 0;
//     let siledWidth = wrapper.offsetWidth;
//     let timer = null;

//     initWidth();
//     setActiveSlide(1, false);

//     buttonNext.addEventListener('click', () => {
//         setActiveSlide(activeSlideIndex + 1);
//     })

//     buttonBack.addEventListener('click', () => {
//         setActiveSlide(activeSlideIndex - 1);
//     })

//     window.addEventListener('resize', () => {
//         initWidth();
//         setActiveSlide(activeSlideIndex, false);
//     })

//     function setActiveSlide(index, withAnimation = true) {
//         if (index < 0 || index >= slidesCount) return;

//         buttonBack.removeAttribute('disabled');
//         buttonNext.removeAttribute('disabled');

//         innerWrapper.style.transform = `translateX(${index * siledWidth * (-1)}px)`;

//         if(withAnimation) {
//             innerWrapper.style.transition = `transform ${ANIMATION_TIME}ms`;
//             timer = setTimeout(() => {
//                 innerWrapper.style.transition = '';
//             }, ANIMATION_TIME);
//         }

//         if (index === 0) {
//             buttonBack.setAttribute('disabled', '');
//         }
        
//         if (index === slidesCount - 1) {
//             buttonNext.setAttribute('disabled', '');
//         }

//         activeSlideIndex = index;
//     }

//     function initWidth() {
//         siledWidth = wrapper.offsetWidth;

//         slides.forEach(slide => {
//             slide.style.width = `${siledWidth}px`;
//         });
//     }
// })();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });