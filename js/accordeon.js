const contents = document.querySelectorAll(".program-line__content");
const descrs = document.querySelectorAll(".program-line__descr");

contents.forEach((elem) => {
  const title = elem.querySelector(".program-line__title");
  const descr = elem.querySelector(".program-line__descr");

  title.addEventListener("click", () => {
    descrs.forEach((item) => {
      item.classList.remove("active");
    });
    descr.classList.toggle("active");
  });
});
