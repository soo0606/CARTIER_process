//tab
const topLi = document.querySelectorAll('.topli');
const topListMenu = document.querySelectorAll('.top-list-menu');
const tabContent = document.querySelectorAll('.content-box');
for(let i = 0; i < topLi.length; i++){
  topLi[i].addEventListener('click',function(){
    for(let k = 0; k < topLi.length; k++){
      topLi[k].classList.remove('active');
    }
    topLi[i].classList.add('active');
    for(let j = 0; j < topListMenu.length; j++){
      topListMenu[j].classList.remove('active');
    }
    topListMenu[i].classList.add('active');
    for(let l = 0; l < topLi.length; l++){
      tabContent[l].classList.remove('active');
    }
    tabContent[i].classList.add('active');
  });
}
// content-size-btn
function scrollToPosition(scrollY) {
  window.scrollTo({
    top: scrollY,
    behavior: 'smooth'
  });
}
// top-list-menu
const topLiMenu = document.querySelectorAll('.top-list-menu-2 .topli-menu');
for(let l = 0; l < topLiMenu.length; l++){
  topLiMenu[l].addEventListener('click',function(){
    for(let m = 0; m < topLiMenu.length; m++){
      topLiMenu[m].classList.remove('active');
    }
    topLiMenu[l].classList.add('active');
  });
}

// top-btn
const scrollTOPButton = document.querySelector(".top-btn-box");
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollTOPButton.classList.remove('active');
  } else {
    scrollTOPButton.classList.add('active');
  }
}
scrollTOPButton.addEventListener('click',function(){
  for(let m = 0; m < topLiMenu.length; m++){
    topLiMenu[m].classList.remove('active');
  }
  topLiMenu[0].classList.add('active');
});

window.addEventListener('scroll', function() {
  var currentScroll = window.scrollY
  console.log("현재 스크롤 위치:", currentScroll);
});