// Elements

const carouselLeftButton = document.querySelector(".carousel__btn--left");
const carouselRightButton = document.querySelector(".carousel__btn--right");

// const moveCarouselSlide = function(e) {

// }

const initializeCarousel = function (carouselId) {
  const carousel = document.getElementById(carouselId);
  const carouselButtons = carousel.querySelectorAll(".carousel__btn");
  console.log(carouselButtons);
  const carouselItems = carousel.querySelectorAll(".carousel__item");
  const carouselIndicator = carousel.querySelector(".carousel__indicator");
  const carouselDots = carouselIndicator.childNodes;
  carouselItems.forEach((item, i) => {
    const carouselDot = document.createElement("div");
    carouselDot.className = `carousel__dot ${i === 0 ? "selected" : ""}`;
    item.style.transform = `translateX(${i * 100}%)`;
    carouselIndicator.appendChild(carouselDot);
  });

  let currSlideIdx = 0;
  const numOfSlides = carouselItems.length;
  const moveCarouselSlide = function (e) {
    if (e.target.classList.contains("carousel__btn--left")) currSlideIdx--;
    if (e.target.classList.contains("carousel__btn--right")) currSlideIdx++;
    if (currSlideIdx === -1) currSlideIdx = numOfSlides - 1;
    if (currSlideIdx === numOfSlides) currSlideIdx = 0;
    console.log(currSlideIdx);

    carouselItems.forEach((item, i) => {
      item.style.transform = `translateX(${(i - currSlideIdx) * 100}%)`;
    });
    carouselDots.forEach((dot, i) => {
      dot.classList.remove("selected");
      if (currSlideIdx === i) dot.classList.add("selected");
    });
  };

  carouselButtons.forEach((btn) =>
    btn.addEventListener("click", moveCarouselSlide)
  );
};

initializeCarousel("carousel");
