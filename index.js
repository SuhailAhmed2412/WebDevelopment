let img1 = document.getElementById('img-1');
let img2 = document.getElementById('img-2');
let img3 = document.getElementById('img-3');
let img4 = document.getElementById('img-4');
let awwalprice = document.getElementById('awwal-price');
let aalaprice = document.getElementById('aala-price');
let azeemprice = document.getElementById('azeem-price');


let i=1;

setInterval(
    function() {
        if (i%2 === 0) {
            img1.style.display = "flex";
            img2.style.display = "none";
            img3.style.display = "none";
            img4.style.display = "none";
        } else if (i%3 === 0) {
            img1.style.display = "none";
            img2.style.display = "flex";
            img3.style.display = "none";
            img4.style.display = "none";
        } else if (i%4 === 0) {
            img1.style.display = "none";
            img2.style.display = "none";
            img3.style.display = "flex";
            img4.style.display = "none";
        } else {
            img1.style.display = "none";
            img2.style.display = "none";
            img3.style.display = "none";
            img4.style.display = "flex";
        } i++;
    },
1000)

setInterval(
    function () {
        if(awwalprice.style.display=== "none") {
            awwalprice.style.display="block";
        } else {
            awwalprice.style.display="none";
        }
    }, 1000
)

setInterval(
    function () {
        if(aalaprice.style.display=== "none") {
            aalaprice.style.display="block";
        } else {
            aalaprice.style.display="none";
        }
    }, 1000
)

setInterval(
    function () {
        if(azeemprice.style.display=== "none") {
            azeemprice.style.display="block";
        } else {
            azeemprice.style.display="none";
        }
    }, 1000
)

