
const imgs = document.querySelectorAll('.hero-slider ul img');
const prev_btn = document.querySelector('.slider-control-prev');
const next_btn = document.querySelector('.slider-control-next');

let n = 0;

function changeSlide() {
    imgs.forEach(img => img.classList.add('hidden'));
    imgs[n].classList.remove('hidden');
}

changeSlide();

prev_btn.addEventListener('click', () => {
    n = (n > 0) ? n - 1 : imgs.length - 1;
    changeSlide();
});

next_btn.addEventListener('click', () => {
    n = (n < imgs.length - 1) ? n + 1 : 0;
    changeSlide();
});

document.querySelectorAll('.products').forEach(item => {
    item.addEventListener('wheel', evt => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
});

let increments = document.querySelectorAll(".add1");
let decrements = document.querySelectorAll(".sub1");
let cartCount = document.getElementById("cart-count");
let totalCount = 0;

increments.forEach(function(increment) {
    increment.addEventListener("click", function() {
        let add = this.parentNode.querySelector(".cartext");
        let sub = parseInt(add.textContent);
        sub += 1;
        add.textContent = sub;
        totalCount += 1;
        updateCartCount();
    });
});

decrements.forEach(function(decrement) {
    decrement.addEventListener("click", function() {
        let add = this.parentNode.querySelector(".cartext");
        let sub = parseInt(add.textContent);
        if (sub > 0) {
            sub -= 1;
            add.textContent = sub;
            totalCount -= 1;
            updateCartCount();
        }
    });
});

function updateCartCount() {
    cartCount.textContent = totalCount;
}

// let increments = document.querySelectorAll(".add1");
