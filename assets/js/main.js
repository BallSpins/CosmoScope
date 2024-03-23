window.onscroll = () => {
    (() => {
        if(window.scrollY >= sticky) {
            console.log("log")
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    })();
};

let navbar = document.getElementById("mobile-nav");
let sticky = navbar.offsetTop;
let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
/*let i = 0;

function hamburger() {
    if(i == 0) {
        navbar.classList.add("h-75");
        i++;
    } else {
        navbar.classList.remove("h-75");
        i--;
    }
}*/

console.log(width);