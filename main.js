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


const navbar = document.querySelector('#navbar');
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


const openBtn = document.querySelector('#bars');
const menuLinks = document.querySelector('.menu-links');
// const links = document.querySelectorAll('.')

openBtn.addEventListener('click', () => {
   if(openBtn.className === 'fas fa-bars') {
      openBtn.className = 'fas fa-times'
   } else {
      openBtn.className = 'fas fa-bars'
   }
   
   menuLinks.classList.toggle('show');
});

