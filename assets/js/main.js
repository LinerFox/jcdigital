/*================= SHOW SIDEBAR =================*/

/*===== SHOW SIDEBAR ====*/
/* Validate If Constant Exists */

/*===== HIDE SIDEBAR ====*/
// Validate If Constant Exists

/*================= SKILLS TABS =================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills__active");
    });
    target.classList.add("skills__active");
    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });
    tab.classList.add("skills__active");
  });
});

/*================= MIXITUP FILTER =================*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: { target: ".work__card" },
  animation: { duration: 300 },
});

/*================= Link Active Work =================*/
const linkWork = document.querySelectorAll(".work__item");
function activeWork() {
  linkWork.forEach((link) => link.classList.remove("active-work"));
  this.classList.add("active-work");
}
linkWork.forEach((link) => link.addEventListener("click", activeWork));

/*================= PORTFOLIO MODAL =================*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__button")) {
    togglePortfolioModal();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioModal() {
  document.querySelector(".portfolio__modal").classList.toggle("open");
}

document
  .querySelector(".portfolio__modal-close")
  .addEventListener("click", togglePortfolioModal);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pm__thumbnail img").src =
    portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__modal-subtitle span").innerHTML =
    portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__modal-body").innerHTML =
    portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}
