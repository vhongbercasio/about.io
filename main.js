// change navbar style on scroll to

window.addEventListener('scroll', () => {
    document.querySelector("nav").classList.toggle('window-scroll', window.scrollY > 0);

});

// Show/hide faq answer 

const faqsEL = document.querySelectorAll(".faq");

faqsEL.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        // Change icon 
        const icon = faq.querySelector(".faq_icon i");
        if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus";

        } else {
            icon.className = "fa-solid fa-plus";
        }
    })
})

// Show/hide nav menu 

const menu = document.querySelector(".nav__menu");
const menuBtnOpenEL = document.querySelector("#open-menu-btn");
const menuBtnCloseEL = document.querySelector("#close-menu-btn");


// Open nav menu
menuBtnOpenEL.addEventListener("click", () => {
    menu.style.display = "flex";
    menuBtnCloseEL.style.display = "inline-block";
    menuBtnOpenEL.style.display = "none";
})

// Close nav menu arrow function
const closeNav = () => {
    menu.style.display = "none";
    menuBtnCloseEL.style.display = "none";
    menuBtnOpenEL.style.display = "inline-block";

}
// call the call back function which is closeNav
menuBtnCloseEL.addEventListener("click", closeNav)
