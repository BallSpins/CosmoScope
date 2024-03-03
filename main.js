window.onscroll = () => {scroll()};

let navbar = document.getElementById("mobile-nav");
let sticky = navbar.offsetTop;

function scroll() {
    if(window.scrollY >= sticky) {
        console.log("log")
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}