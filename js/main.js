const modal = document.querySelector(".modal");
const modalButtons = document.querySelectorAll(".modal__button");
const modalClose = document.querySelector(".modal__close");
const body = document.querySelector("body");

modalButtons.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.display = "flex";
    body.classList.add("noscroll");
  });
});

modal.addEventListener("click", (elem) => {
  const isModal = elem.target.closest(".modal__inner");

  if (!isModal) {
    modal.style.display = "none";
    body.classList.remove("noscroll");
  }
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
  body.classList.remove("noscroll");
});
