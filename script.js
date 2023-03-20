var menu = document.querySelector('.container-menu-two ');
var logo = document.querySelector('.logo-hover');
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
        logo.classList.add('logos');
    }
    else {
        menu.classList.remove('doimenu');
        logo.classList.remove('logos');
    }
})

// slide 2

var slidesIndex = 1;
showDivs(slidesIndex);

function plusDivs(n) {
    showDivs(slidesIndex += n);
}

function currentDiv(n) {
    showDivs(slidesIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("title-slide-six");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slidesIndex = 1 }
    if (n < 1) { slidesIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-gray", "");
    }
    x[slidesIndex - 1].style.display = "block";
    dots[slidesIndex - 1].className += " active-gray";
}

// slide 3
var threeslideIndex = 1;
threeShowDivs(threeslideIndex);

function threePlusDivs(n) {
    threeShowDivs(threeslideIndex += n);
}

function currentDivs(n) {
    threeShowDivs(threeslideIndex = n);
}

function threeShowDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide-home-seven");
    var threeDots = document.getElementsByClassName("dots-seven");
    if (n > x.length) { threeslideIndex = 1 }
    if (n < 1) { threeslideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.visibility = "hidden";
    }
    for (i = 0; i < threeDots.length; i++) {
        threeDots[i].className = threeDots[i].className.replace(" active-sevent", "");
    }
    x[threeslideIndex - 1].style.visibility = "inherit";
    threeDots[threeslideIndex - 1].className += " active-sevent";
}
setInterval(function () {
    threePlusDivs(1);
}, 3000);

//Home-8

