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
    
  // 箭头的隐藏与显示  
  win_carousel.addEventListener('mouseenter', function () {  
    win_arrow_l.style.display = 'block';  
    win_arrow_r.style.display = 'block';  
  });  
  win_carousel.addEventListener('mouseleave', function () {  
    win_arrow_l.style.display = 'none';  
    win_arrow_r.style.display = 'none';  
  });  
  
  var ul = win_carousel.querySelector('ul');  
  var ol = win_carousel.querySelector('.win-circle > ol'); 
  
  // 清除ol中所有现有的li元素（如果需要的话）  
  while (ol.firstChild) {  
    ol.removeChild(ol.firstChild);  
  }  
  
  // 动态生成小圆圈  
  for (var i = 0; i < 5; i++) {  
    var li = document.createElement('li');  
    li.setAttribute('index', i);  
    ol.appendChild(li);  
  }  
  
  // 初始设置第一个li为current  
  ol.children[0].classList.add('win-current');  
  
  // 为每个li元素添加点击事件监听器（使用事件委托）  
  ol.addEventListener('click', function(event) {  
    // 检查被点击的元素是否是li  
    if (event.target.tagName.toLowerCase() === 'li') {  
      // 清除所有li的current类  
      for (var j = 0; j < ol.children.length; j++) {  
        ol.children[j].classList.remove('win-current');  
      }  
      // 给被点击的li添加current类  
      event.target.classList.add('win-current');  
  
      // 点击小圆圈移动图片  
      var index = parseInt(event.target.getAttribute('index'), 10); // 确保index是整数  
      var win_carouselWidth = win_carousel.offsetWidth;  
      console.log(win_carouselWidth);  
      console.log(index);  
  
      // 假设 animate 函数已经定义，用于移动图片  
      animate(ul, -index * win_carouselWidth);  
    }  
  });  
});


