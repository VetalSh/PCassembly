const modalBtn = document.querySelector(".modal__button");
const courseBtn = document.querySelector(".course__button");
const modal = document.querySelector(".modal");

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

courseBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

modal.addEventListener("click", (event) => {
  const modalContent = event.target.closest(".modal__inner");
  const closeBtn = event.target.closest(".modal__close");
  if (!modalContent || closeBtn) {
    modal.style.display = "";
  }
});