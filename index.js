// menu burger

const iconMenu = document.querySelector('.menu__icon-burger');
const burgerLineFirst = document.querySelector('.burger__line-first');
const burgerLineSecond = document.querySelector('.burger__line-second');
const menuNav = document.querySelector('.menu__nav');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burgerLineFirst.classList.toggle('_active');
        burgerLineSecond.classList.toggle('_active');
        menuNav.classList.toggle('_active');
    });
}

const menuLinks = document.querySelectorAll('.menu__link');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
}

const headerLogo = document.querySelector('.header__logo');
headerLogo.addEventListener("click", onMenuLinkClick);

function onMenuLinkClick(e) {
    if (burgerLineFirst.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        burgerLineFirst.classList.remove('_active');
        burgerLineSecond.classList.remove('_active');
        menuNav.classList.remove('_active');
    }
}

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(menuLinks);
    if (!click) {
        menuNav.addEventListener("click", onMenuLinkClick);
    }
});

// button Menu

const ButtonMenu = document.querySelector('.hero__button-menu');



//  carousel 

const CAROUSEL = document.querySelector("#carousel");
const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");

const ITEM_ACTIVE = document.querySelector("#item-active");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const CONTROL1 = document.querySelector(".control-1");
const CONTROL2 = document.querySelector(".control-2");
const CONTROL3 = document.querySelector(".control-3");

const moveLeft = () => {
    CAROUSEL.classList.add('transition-left');
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
    CONTROL1.classList.add('active');
    CONTROL2.classList.remove('active');
    CONTROL3.classList.remove('active');

    // ITEM_ACTIVE.removeEventListener("swipe", moveLeft);
};

const moveRight = () => {
    CAROUSEL.classList.add('transition-right');
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
    CONTROL1.classList.remove('active');
    CONTROL2.classList.add('active');
    CONTROL3.classList.remove('active');
    // ITEM_LEFT.removeEventListener("click", moveLeft);
    // ITEM_RIGHT.removeEventListener("click", moveRight);
};

// setInterval(moveRight, 5000);

// BTN_LEFT.addEventListener("hover", moveLeft);

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

// ITEM_ACTIVE.addEventListener("swipe", moveLeft);
// ITEM_LEFT.addEventListener("click", moveLeft);
// ITEM_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove('transition-left');
        const leftItems = document.querySelector("#item-left").innerHTML;
        const rightItems = document.querySelector("#item-right").innerHTML;
        const activeItems = document.querySelector("#item-active").innerHTML;

        // const paginationLeft = document.querySelector("#pagination-left").innerHTML;
        // const paginationActive = document.querySelector("#pagination-active").innerHTML;

        document.querySelector("#item-active").innerHTML = leftItems;
        document.querySelector("#item-left").innerHTML = rightItems;
        document.querySelector("#item-right").innerHTML = activeItems;

        // document.querySelector("#pagination-left").innerHTML = paginationActive;

        BTN_LEFT.addEventListener("click", moveLeft);
        BTN_RIGHT.addEventListener("click", moveRight);

     
        // if (document.querySelector("#item-active").innerHTML === leftItems) {
        //     CONTROL1.classList.remove('active');
        //     CONTROL2.classList.remove('active');
        //     CONTROL3.classList.add('active');
        // }
        // if (document.querySelector("#item-active").innerHTML === rightItems) {
        //     CONTROL1.classList.remove('active');
        //     CONTROL2.classList.add('active');
        //     CONTROL3.classList.remove('active');
        // };
        // ITEM_LEFT.addEventListener("click", moveLeft);
        // ITEM_RIGHT.addEventListener("click", moveRight);

    } else {
        CAROUSEL.classList.remove('transition-right');
        const rightItems = document.querySelector("#item-right").innerHTML;
        const leftItems = document.querySelector("#item-left").innerHTML;
        const activeItems = document.querySelector("#item-active").innerHTML;

        document.querySelector("#item-active").innerHTML = rightItems;
        document.querySelector("#item-right").innerHTML = leftItems;
        document.querySelector("#item-left").innerHTML = activeItems;

        BTN_LEFT.addEventListener("click", moveLeft);
        BTN_RIGHT.addEventListener("click", moveRight);

        // if (document.querySelector("#item-active").innerHTML === rightItems) {
        //     CONTROL1.classList.remove('active');
        //     CONTROL2.classList.add('active');
        //     CONTROL3.classList.remove('active');
        // };
        // CONTROL2.classList.add('active');
        // ITEM_LEFT.addEventListener("click", moveLeft);
        // ITEM_RIGHT.addEventListener("click", moveRight);
    }
});

