const mxh1 = window.matchMedia("screen and (max-width: 800px)");
const mxht = document.querySelectorAll(".mxh-text");
const mxhi = document.querySelectorAll(".mxh-img");

// console.log(mxht);
// console.log(mxhi);


window.addEventListener("resize", function(e) {
    for(var i = 0; i < mxht.length; i++) {
        if (mxh1.matches) {
            mxht[i].classList.remove("col-7");
            mxht[i].classList.add("col-12");
            mxhi[i].classList.remove("col-5");
            mxhi[i].classList.add("col-12");
        } else {
            mxht[i].classList.add("col-7");
            mxht[i].classList.remove("col-12");
            mxhi[i].classList.add("col-5");
            mxhi[i].classList.remove("col-12");
        }
    }
    
});

