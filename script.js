var menu = document.querySelector('.container-menu-two ');
///slide 1
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("images-slide-background");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

}
setInterval(function () {
    plusSlides(1);
}, 3000);


////thanh menu doi mau
window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 50) {
        menu.classList.add('doimenu');

    }
    else {
        menu.classList.remove('doimenu');
    }
})

