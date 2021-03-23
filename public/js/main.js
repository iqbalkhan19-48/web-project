const nav = document.querySelector('.nav-content');
const hamberger = document.querySelector('.hamberger');
const navList = document.querySelector('.nav-list');
const productbtn = document.querySelectorAll('.product-btn');

productbtn.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
    });
});

hamberger.addEventListener('click', () => {
    navList.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    nav.classList.toggle('stricky', window.scrollY > 0);
});