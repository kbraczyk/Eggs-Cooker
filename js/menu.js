const box = document.querySelectorAll(".box");
const menus = document.querySelectorAll(".menu");

menus.forEach((menu, i) => {
    menu.addEventListener("click", (e) => {
        menus.forEach(menu => menu.classList.remove("active"));
        e.target.classList.add("active");
        box[i].scrollIntoView({
            behavior: "smooth",
        });
    });
});