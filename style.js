// document.addEventListener('DOMContentLoaded', function() {  
//     var nav = document.getElementById('main-nav');  
//     var navToggle = document.getElementById('nav-toggle');  
//     var lastScrollPosition = 0;  
//     var navIsOpen = false;  

//     // 切换导航栏的显示状态  
//     function toggleNav() {  
//       if (navIsOpen) {  
//         nav.classList.add('collapsed');  
//       } else {  
//         nav.classList.remove('collapsed');  
//       }  
//       navIsOpen = !navIsOpen;  
//     }  

//     // 监听滚动事件  
//     window.addEventListener('scroll', function() {  
//       var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;  

//       // 向下滚动时收折导航栏  
//       if (scrollPosition > lastScrollPosition) {  
//         if (!navIsOpen) {  
//           nav.classList.add('collapsed');  
//           navIsOpen = true;  
//         }  
//       }  
//       // 向上滚动时展开导航栏  
//       else if (scrollPosition < lastScrollPosition) {  
//         if (navIsOpen) {  
//           nav.classList.remove('collapsed');  
//           navIsOpen = false;  
//         }  
//       }  

//       lastScrollPosition = scrollPosition;  
//     });  

//     // 点击收折图标时切换导航栏状态  
//     navToggle.addEventListener('click', toggleNav);  
//   });


// const carousel = document.getElementById('win-carousel');  
// const slides = Array.from(carousel.querySelectorAll('.win-carousel-slide'));  
// const navDots = carousel.querySelectorAll('.win-carousel-nav-dot');  
// const prevButton = carousel.querySelector('.win-carousel-prev');  
// const nextButton = carousel.querySelector('.win-carousel-next');  
// let currentSlide = 0;  
// let slideInterval;  

window.addEventListener('load', function () {
  var win_arrow_l = document.querySelector('.win-arrow-l');
  var win_arrow_r = document.querySelector('.win-arrow-r');
  var win_carousel = document.querySelector('.win-carousel');
  win_carousel.addEventListener('mouseenter', function () {
    win_arrow_l.style.display = 'block';
    win_arrow_r.style.display = 'block';
  })
    win_carousel.addEventListener('mouseleave', function () {
      win_arrow_l.style.display = 'none';
      win_arrow_r.style.display = 'none';
  })
})
