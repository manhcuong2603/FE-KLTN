// slide 3
var slideIndex3 = 1;
showSlides3(slideIndex3);

var slideInterval = setInterval(function () {
    plusSlides3(1);
}, 3000); // change the time interval (in milliseconds) as needed

function plusSlides3(n) {
    clearInterval(slideInterval);
    slideInterval = setInterval(function () {
        plusSlides3(1);
    }, 3000); // reset the interval timer
    showSlides3(slideIndex3 += n);
}

function currentSlides(n) {
    clearInterval(slideInterval);
    slideInterval = setInterval(function () {
        plusSlides3(1);
    }, 3000); // reset the interval timer
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    var i;
    var slides3 = document.getElementsByClassName("content-slide-seven");
    var dots = document.getElementsByClassName("dots-seven");
    if (n > Math.ceil(slides3.length / 3)) {
        slideIndex3 = 1;
    }
    if (n < 1) {
        slideIndex3 = Math.ceil(slides3.length / 3);
    }
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    var start = (slideIndex3 - 1) * 3;
    var end = start + 3;
    for (i = start; i < end; i++) {
        if (slides3[i]) {
            slides3[i].style.display = "block";
        }
    }
    dots[slideIndex3 - 1].className += " active";
}