const menuBtn = document.querySelector(`.fa-bars`);
const mobileMenu = document.querySelector(`.mobile-menu`);

menuBtn.addEventListener(`click`, () => {
    if(mobileMenu.style.display == 'none') {
        mobileMenu.style.display = 'flex';
    }else{
        mobileMenu.style.display = 'none';
    }
});