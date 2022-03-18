const arrows = document.querySelectorAll(".arrow");

for (const arrow of arrows) {
    const parentSubmenu = arrow.parentElement;
    arrow.addEventListener("click" , e => {
        parentSubmenu.classList.toggle("show");
    });  
}