

window.addEventListener('load', function () {
  var win_arrow_l = document.querySelector('.win-arrow-l');
  var win_arrow_r = document.querySelector('.win-arrow-r');
  var win_carousel = document.querySelector('.win-carousel');
  var win_carouselWidth = win_carousel.offsetWidth;
  // 箭头的隐藏与显示  
  win_carousel.addEventListener('mouseenter', function () {
    win_arrow_l.style.display = 'block';
    win_arrow_r.style.display = 'block';
    clearInterval(timer);
    timer = null;
  });
  win_carousel.addEventListener('mouseleave', function () {
    win_arrow_l.style.display = 'none';
    win_arrow_r.style.display = 'none';
    timer = setInterval(function(){
      win_arrow_r.click();
    },2000)
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

  // 为每个li元素添加点击事件监听器（使用事件委托）  
  ol.addEventListener('click', function (event) {
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
      num = index;
      circle = index; 
      console.log(win_carouselWidth);
      console.log(index);
      animate(ul, -index * win_carouselWidth);
    }
  })
  // 初始设置第一个li为current  
  ol.children[0].classList.add('win-current');
// 克隆第一张图片放到ul之后
  var first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
    // 点击右侧按钮图片滚动一张
  var num = 0;
  var circle = 0;
  win_arrow_r.addEventListener('click', function () {
    // 右侧滚动的无缝衔接
    if (num == ul.children.length - 1){
      ul.style.left = 0;
      num = 0;
    }
    num++;
    animate(ul, -num * win_carouselWidth);
    // 点击右侧按钮，小圆圈一起变化
    circle++;
    if(circle == ol.children.length){
      circle = 0;
    }
    circleChange();
  });

  // 左侧按钮
      var num = 0;
      var circle = 0;
      win_arrow_l.addEventListener('click', function () {
        if (num == 0){
          num = ul.children.length - 1;
          ul.style.left = -num * win_carouselWidth + 'px';
        }
        num--;
        animate(ul, -num * win_carouselWidth);
        circle--;
        if(circle < 0){
          circle = 4;
        }
        circleChange();
      });
      function circleChange(){
        for(var i = 0;i < ol.children.length;i++){
          ol.children[i].className = '';
        }
        ol.children[circle].className = 'win-current';
      }
      // 自动播放轮播图
      var timer = this.setInterval(function(){
        // 手动调用点击事件
        win_arrow_r.click();
      },2000);
})


