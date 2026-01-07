const arrow = document.getElementById("down-arrow");

let hasScrolled = false;

const showTimer = setTimeout(() => {
    if (!hasScrolled) {
        arrow.classList.add("visible"); // target opacity → 1
    }
}, 2000);

window.addEventListener("scroll", () => {
    hasScrolled = true;
    arrow.classList.remove("visible"); // target opacity → 0
});