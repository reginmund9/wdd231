// MENU
const navButton = document.querySelector("#menu");
const navMenu = document.querySelector(".menu-links");

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navButton.classList.toggle("show");
})

window.addEventListener("resize", function () {
    if (this.window.innerWidth >= 640) {
        navMenu.classList.remove("show");
        navButton.classList.remove("show");
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.href;
    const menuItems = document.querySelectorAll(".menu-links a");

    menuItems.forEach(item => {
        if (item.href === currentPage) {
            item.classList = "active";
        }
    })
})
