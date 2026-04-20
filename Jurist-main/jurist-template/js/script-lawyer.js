const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn'); // default active
});

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        filterItems(btn.id);
        setActiveBtn(btn);
    });
});

function filterItems(category) {
    allFilterItems.forEach((item) => {
        if (category === "all") {
            item.style.display = "block"; // show all
        } 
        else if (item.classList.contains(category)) {
            item.style.display = "block"; // show matched
        } 
        else {
            item.style.display = "none"; // hide others
        }
    });
}

function setActiveBtn(activeBtn) {
    allFilterBtns.forEach(btn => btn.classList.remove('active-btn'));
    activeBtn.classList.add('active-btn');
}