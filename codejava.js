

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click', () => {
 menu.style.display = 'block';
 menuBtn.style.display = 'none';
 closeBtn.style.display = 'inline-block';

})

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
   
})


//show/hide skills items

const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
    })
});



const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });