// $('.listPostContainer').slick({
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     dots: true,
//     infinite: false
// });


let thisPage = 1;
let limit = 6;
let list = document.querySelectorAll('.listPostContainer .listPost');

function loadItem() {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
    listPage();
}
loadItem();
function listPage() {
    let count = Math.ceil(list.length / limit);

    if (thisPage != 1) {
        let prev = document.getElementsByTagName('prev');
        // prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for (i = 1; i <= count; i++) {
        let newPage = document.querySelectorAll('.listPage .page-link');
        newPage.innerText = i;
        if (i == thisPage) {
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        //document.querySelector('.listPage').appendChild(newPage);
    }

    if (thisPage != count) {
        let next = document.getElementsByTagName('next');
        // next.innerText = 'NEXT';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listPage').appendChild(next);
    }
}
function changePage(i) {
    thisPage = i;
    loadItem();
}