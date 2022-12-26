// Carousel logic

const initializeCarousel = function (carouselId) {
  const carousel = document.getElementById(carouselId);
  const carouselItems = carousel.querySelectorAll(".carousel__item");
  const carouselButtons = carousel.querySelectorAll(".carousel__btn");
  const carouselIndicator = carousel.querySelector(".carousel__indicator");
  carouselItems.forEach((_, i) => {
    const carouselDot = document.createElement("div");
    carouselDot.className = "carousel__dot";
    carouselDot.dataset.item = i;
    carouselIndicator.appendChild(carouselDot);
  });

  let currItemIndex = 0;
  const maxItemIndex = carouselItems.length - 1;

  const goToItem = function (itemIndex) {
    carouselItems.forEach((item, i) => {
      item.style.transform = `translateX(${(i - itemIndex) * 100}%)`;
    });
  };

  const selectDot = function (itemIndex) {
    const carouselDots = carouselIndicator.querySelectorAll(".carousel__dot");
    carouselDots.forEach((dot, i) => {
      dot.classList.remove("selected");
      if (itemIndex === i) dot.classList.add("selected");
    });
  };

  const prevItem = function () {
    if (currItemIndex === 0) {
      currItemIndex = maxItemIndex;
    } else {
      currItemIndex--;
    }
    goToItem(currItemIndex);
    selectDot(currItemIndex);
  };

  const nextItem = function () {
    if (currItemIndex === maxItemIndex) {
      currItemIndex = 0;
    } else {
      currItemIndex++;
    }
    goToItem(currItemIndex);
    selectDot(currItemIndex);
  };

  const changeItem = function (e) {
    if (e.target.classList.contains("carousel__btn--left")) prevItem();
    if (e.target.classList.contains("carousel__btn--right")) nextItem();
  };

  const selectItem = function (e) {
    if (!e.target.classList.contains("carousel__dot")) return;
    const selectedItem = Number(e.target.dataset.item);
    goToItem(selectedItem);
    selectDot(selectedItem);
  };

  goToItem(currItemIndex);
  selectDot(currItemIndex);

  carouselButtons.forEach((btn) => btn.addEventListener("click", changeItem));

  carouselIndicator.addEventListener("click", selectItem);
};

initializeCarousel("carousel");

export default initializeCarousel;
