const box = document.querySelectorAll(".box");
const menus = document.querySelectorAll(".menu");


menus.forEach((menu, i) => {
    menu.addEventListener("click", (e) => {
        e.preventDefault();
        box[i].scrollIntoView({
            behavior: "smooth",
        });
    });
});