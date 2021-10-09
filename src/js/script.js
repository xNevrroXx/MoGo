"use strict";

const wrapperImages = document.querySelectorAll(".about-us__wrapper-for-hover"),
      imgAtPage = document.querySelectorAll(".about-us__wrapper-bgImage"),
      objUrlImages = [`url("img/about-us/1.jpg")`, 
                      `url("img/about-us/2.jpg")`,
                      `url("img/about-us/3.jpg")`
                     ],
      accordion = document.querySelector(".accordion"),
      accordionButton = accordion.querySelectorAll(".accordion-button:not(.collapsed)");

imgAtPage.forEach( (img, i) => {
    img.style.backgroundImage = objUrlImages[i];
    img.dataset.index = i; // div будет знать свой индекс
});

wrapperImages.forEach( (wrapperImgs, i) => {
    wrapperImgs.addEventListener("mouseenter", wrapperImgs_enter);
    wrapperImgs.addEventListener("mouseleave", wrapperImgs_leave);
});

function wrapperImgs_enter() {
    let wrapperImgs = this;
    wrapperImgs.style.cssText = `
        background-color: #95e1d3;
    `;

    const wrapperImg = wrapperImgs.querySelector(".about-us__wrapper-bgImage");
    wrapperImg.style.cssText += `
        transform: translate(-10px, -10px);
        background-image: linear-gradient(to top, rgba(252, 227, 138, 0.9) 0%, rgba(243, 129, 129, 0.9) 100%),
                          ${objUrlImages[wrapperImg.dataset.index]};
`;
    wrapperImg.insertAdjacentHTML("beforeend", `
        <img src="icons/about-us_block/USERS.png" alt="users picture" alt="happy users picture" class="about-us__hover-image-team">
        <div class="about-us__hover-text">super team</div>
    `);
}

function wrapperImgs_leave() {
    let wrapperImgs = this;
    wrapperImgs.style.cssText = ``;

    const wrapperImg = wrapperImgs.querySelector(".about-us__wrapper-bgImage");
    wrapperImg.style.removeProperty("transform");
    wrapperImg.style.cssText += `
        background-image: ${objUrlImages[wrapperImg.dataset.index]};
    `;
    wrapperImg.innerHTML = "";
}


//bootstrap 
accordionButton.forEach( btn => {
    btn.style.cssText = "";
});


//tiny slider
const slider = tns({
  container: '.slider-for-qoutes',
  items: 1,
  slideBy: 1,
  autoplay: false,
  center: true,
  touch: true,
  loop: true,
  nav: false,
  controls: false,
});

document.querySelector('.btn-prev').addEventListener("click", function () {
    slider.goTo("prev");
});

document.querySelector('.btn-next').addEventListener("click", function () {
    slider.goTo("next");
});
