document.addEventListener('DOMContentLoaded', function() {  
    var nav = document.getElementById('main-nav');  
    var navToggle = document.getElementById('nav-toggle');  
    var lastScrollPosition = 0;  
    var navIsOpen = false;  
    
    // 切换导航栏的显示状态  
    function toggleNav() {  
      if (navIsOpen) {  
        nav.classList.add('collapsed');  
      } else {  
        nav.classList.remove('collapsed');  
      }  
      navIsOpen = !navIsOpen;  
    }  
    
    // 监听滚动事件  
    window.addEventListener('scroll', function() {  
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;  
    
      // 向下滚动时收折导航栏  
      if (scrollPosition > lastScrollPosition) {  
        if (!navIsOpen) {  
          nav.classList.add('collapsed');  
          navIsOpen = true;  
        }  
      }  
      // 向上滚动时展开导航栏  
      else if (scrollPosition < lastScrollPosition) {  
        if (navIsOpen) {  
          nav.classList.remove('collapsed');  
          navIsOpen = false;  
        }  
      }  
    
      lastScrollPosition = scrollPosition;  
    });  
    
    // 点击收折图标时切换导航栏状态  
    navToggle.addEventListener('click', toggleNav);  
  });