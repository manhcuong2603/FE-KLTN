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
