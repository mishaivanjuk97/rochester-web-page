const navbar = document.querySelector('#navbar');
const modal = document.querySelector('.modal-container');
const btn = document.querySelector('#showModal');

btn.addEventListener('click', () => {
   modal.style.display = 'block'
})

modal.addEventListener('click', (e) => {
   if(e.target.className === 'modal-container') {
      modal.style.display = 'none'
   }
})

let lastScrollTop = 0;

window.addEventListener("scroll", function(){
   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop){
         navbar.style.top="-100px";
      } else {
         navbar.style.top="0";
      }
   lastScrollTop = scrollTop;
})