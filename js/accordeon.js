const contents = document.querySelectorAll(".program-line__content");
const descrs = document.querySelectorAll(".program-line__descr");

contents.forEach((elem) => {
  const title = elem.querySelector(".program-line__title");
  const descr = elem.querySelector(".program-line__descr");

  descr.style.transition = "height .3s";
  descr.style.overflow = "hidden";

  title.addEventListener("click", () => {
    descrs.forEach((item) => {
      if (item === descr) {
        item.style.height = item.scrollHeight + "px";
      } else {
        item.style.height = 0;
      }
    });
  });

  // title.addEventListener("click", () => {
  //   descrs.forEach((item) => {
  //     if (item === descr) {
  //       item.classList.add("active");
  //     } else {
  //       item.classList.remove("active");
  //     }
  //   });
  // });

  // title.addEventListener("click", () => {
  //   descrs.forEach((item) => {
  //     item.classList.remove("active");
  //   });
  //   descr.classList.toggle("active");
  // });
});
