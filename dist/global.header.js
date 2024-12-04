"use strict";
const menuBtn = document.querySelector(".menu__btn");
const headerNav = document.querySelector(".header__nav");
const navLinks = document.querySelectorAll(".header__nav-list a");
if (menuBtn && headerNav && navLinks) {
    menuBtn.addEventListener("click", () => {
        headerNav.classList.toggle("open");
        document.documentElement.classList.toggle("no-scroll");
        document.body.classList.toggle("no-scroll");
    });
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            headerNav.classList.remove("open");
            document.documentElement.classList.remove("no-scroll");
            document.body.classList.remove("no-scroll");
        });
    });
}
