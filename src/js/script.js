"use strict";


const accordion = document.querySelector(".accordion"),
      accordionButton = accordion.querySelectorAll(".accordion-button:not(.collapsed)");

const ObjCards = function (wrapperImagesSelector, arrUrlImagesA, styleOfAnimationNUM) {
    this.wrapperImages = document.querySelector(wrapperImagesSelector); // для cards-with-hover в нужном блоке страницы
    this.wrapperImage = document.querySelectorAll(`${wrapperImagesSelector} .cards-with-hover__bgImage`);
    this.arrUrlImages =  arrUrlImagesA; // url to images
    this.styleOfAnimation = styleOfAnimationNUM; // 1, 2 or 3
};

const aboutUsImagesWithHover = new ObjCards(
        ".about-us", 
        [
            `url("img/about-us/1.jpg")`, 
            `url("img/about-us/2.jpg")`,
            `url("img/about-us/3.jpg")`
        ],
        1
    ),
    ourTeamImagesWithHover = new ObjCards(
        ".our-team",
        [
            `url("img/our-team/1.jpg")`,
            `url("img/our-team/2.jpg")`,
            `url("img/our-team/3.jpg")`
        ],
        2
    ),
    ourWorksImagesWithHover = new ObjCards(
        ".our-works",
        [
/*             //left side
            `url("img/our-works_block/human_1.jpg")`,
            `url("img/our-works_block/architecture_2.jpg")`,
            `url("img/our-works_block/bridge_3.jpg")`,
            `url("img/our-works_block/sun-through-the-walls_4.jpg")`,
            //right side
            `url("img/our-works_block/sea_1.jpg")`,
            `url("img/our-works_block/glass-panorama_2.jpg")`,
            `url("img/our-works_block/skyscraper_3.jpg")` */

            //test grid
            `url("img/our-works_block/human_1.jpg")`,
            `url("img/our-works_block/architecture_2.jpg")`,
            `url("img/our-works_block/sea_1.jpg")`,
            `url("img/our-works_block/glass-panorama_2.jpg")`,
            `url("img/our-works_block/bridge_3.jpg")`,
            `url("img/our-works_block/sun-through-the-walls_4.jpg")`,
            `url("img/our-works_block/skyscraper_3.jpg")`
        ],
        3
    );

const wrapperImgs_enter = function (object) {
    return function() {
        let wrapperImgs = this.parentElement;
        let wrapperImg = this;
        if(this.parentElement.classList.contains('cards-with-hover__for-hoverBG_collage')) {
            //if theare is no COLLAGE then need to transform
            wrapperImg.style.cssText += `
            background-image: linear-gradient(to top, rgba(252, 227, 138, 0.9) 0%, rgba(243, 129, 129, 0.9) 100%),
                              ${object.arrUrlImages[wrapperImg.dataset.index]};
            `;
        } else {
            wrapperImgs.style.cssText = `
                background-color: #95e1d3;
            `;
            wrapperImg.style.cssText += `
                transform: translate(-10px, -10px); 
                background-image: linear-gradient(to top, rgba(252, 227, 138, 0.9) 0%, rgba(243, 129, 129, 0.9) 100%),
                                  ${object.arrUrlImages[wrapperImg.dataset.index]};
            `;
        }

        if (object.styleOfAnimation == 1) {
            wrapperImg.insertAdjacentHTML("beforeend", `
                <img src="icons/about-us_block/USERS.png" alt="users picture" alt="happy users picture" class="cards-with-hover__hover-image">
                <div class="cards-with-hover__hover-text">super team</div>
            `);
        } else if(object.styleOfAnimation == 2) {
            wrapperImg.insertAdjacentHTML("beforeend", `
                <div class="cards-with-hover__hover-messengers-wrapper">
                    <div class="cards-with-hover__social-link-wrapper">
                        <img src="icons/our-team_block/facebook.png" alt="" class="cards-with-hover__social-link">
                    </div>
                    <div class="cards-with-hover__divider-link-messengers"></div>
                    <div class="cards-with-hover__social-link-wrapper">
                        <img src="icons/our-team_block/instagram.png" alt="" class="cards-with-hover__social-link">
                    </div>
                    <div class="cards-with-hover__divider-link-messengers"></div>
                    <div class="cards-with-hover__social-link-wrapper">
                        <img src="icons/our-team_block/pinterest.png" alt="" class="cards-with-hover__social-link">
                    </div>
                    <div class="cards-with-hover__divider-link-messengers"></div>
                    <div class="cards-with-hover__social-link-wrapper">
                        <img src="icons/our-team_block/instagram.png" alt="" class="cards-with-hover__social-link">
                    </div>
                </div>
            `);
        } else if(object.styleOfAnimation == 3) {
            wrapperImg.insertAdjacentHTML("beforeend", `
                <img src="icons/our-works_block/PICTURE.png" alt="users picture" alt="happy users picture" class="cards-with-hover__hover-image cards-with-hover__hover-image_two-subtitles">
                <div class="cards-with-hover__hover-text cards-with-hover__hover-text_two-subtitles">
                    creatively designed
                    <span>Lorem ipsum dolor sit</span>
                </div>
            `);
        }
    };
};
const wrapperImgs_leave = function (object) {
    return function() {
        let wrapperImgs = this.parentElement;
        wrapperImgs.style.cssText = ``;
    
        const wrapperImg = this;
        wrapperImg.style.removeProperty("transform");
        wrapperImg.style.cssText += `
            background-image: ${object.arrUrlImages[wrapperImg.dataset.index]};
        `;
        wrapperImg.innerHTML = "";
    };
};

setImagesAtPage( 
    [
        aboutUsImagesWithHover, 
        ourTeamImagesWithHover,
        ourWorksImagesWithHover
    ]
);
setListenerForAllImagesWithHoverAtPage( 
    [
        aboutUsImagesWithHover, 
        ourTeamImagesWithHover,
        ourWorksImagesWithHover
    ]
);


//bootstrap 
accordionButton.forEach( btn => {
    btn.style.cssText = "";
});

//tiny slider
const slider = tns({
  container: '.slider-for-quotes',
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
    console.log(window.getComputedStyle(document.querySelector('.slider-for-quotes')).width);
});

document.querySelector('.btn-next').addEventListener("click", function () {
    slider.goTo("next");
});

const slider2 = tns({
    container: '.slider-for-quotes-2',
    items: 1,
    slideBy: 1,
    autoplay: false,
    center: true,
    touch: true,
    loop: true,
    nav: false,
    controls: false,
  });
  document.querySelector('.btn-prev-2').addEventListener("click", function () {
    slider2.goTo("prev");
});

document.querySelector('.btn-next-2').addEventListener("click", function () {
    slider2.goTo("next");
});





//functions
function setImagesAtBlock (object) {
    object.wrapperImage.forEach( (wrapperImg, i) => {
        wrapperImg.style.backgroundImage = object.arrUrlImages[i];
        wrapperImg.dataset.index = i; // div будет знать свой индекс
    });
}
function setImagesAtPage(arrObjects) {
    arrObjects.forEach( object => {
        setImagesAtBlock(object);
    }); 
}
function setListenerForAllImagesWithHoverAtPage (arrObjects) {
    arrObjects.forEach( object => {
        object.wrapperImage.forEach( (wrapperImg, i) => {
            wrapperImg.addEventListener("mouseenter", wrapperImgs_enter(object));
            wrapperImg.addEventListener("mouseleave", wrapperImgs_leave(object));
        }); 
    });
}