import coffeeGallery from './list-coffee.js';
import teaGallery from './list-tea.js';
import dessertGallery from './list-dessert.js';
// console.log(price);

//  popup

const popup = document.querySelector('.pop-up');
const popupButtonClose = document.querySelector('.pop-up__button-close');

const popupSizeOptionS = document.querySelector('.size__option-s');
popupSizeOptionS.classList.add('_active');
const popupSizeOptionM = document.querySelector('.size__option-m');
const popupSizeOptionL = document.querySelector('.size__option-l');

const popupSizeS = document.querySelector('.size-s');
const addPriceSizeS = 0.00;
const popupSizeM = document.querySelector('.size-m');
const addPriceSizeM = 0.50;
const popupSizeL = document.querySelector('.size-l');
const addPriceSizeL = 1.00;
let addPrice;

const popupSizeIconS = document.querySelector('.size-icon-s');
popupSizeIconS.classList.add('_active');
const popupSizeIconM = document.querySelector('.size-icon-m');
const popupSizeIconL = document.querySelector('.size-icon-l');

const popupAdditivesOption1 = document.querySelector('.additives__option-1');
const popupAdditivesOption2 = document.querySelector('.additives__option-2');
const popupAdditivesOption3 = document.querySelector('.additives__option-3');

const popupAdditives1 = document.querySelector('.additives-1');
const popupAdditivesIcon1 = document.querySelector('.additives-icon-1');
const popupAdditives2 = document.querySelector('.additives-2');
const popupAdditivesIcon2 = document.querySelector('.additives-icon-2');
const popupAdditives3 = document.querySelector('.additives-3');
const popupAdditivesIcon3 = document.querySelector('.additives-icon-3');
const additivesPrice = 0.50;

// const popupContent = document.querySelector('.pop-up__content');
const popupImage = document.querySelector('.pop-up__image');
const popupTitle = document.querySelector('.pop-up__title');
const popupSubtitle = document.querySelector('.pop-up__subtitle');
const totalPrice = document.querySelector('.total__price');

popupSizeOptionS.addEventListener('click', function (event) {
    popupSizeOptionS.classList.add('_active');
    popupSizeIconS.classList.add('_active');
    popupSizeOptionM.classList.remove('_active');
    popupSizeIconM.classList.remove('_active');
    popupSizeOptionL.classList.remove('_active');
    popupSizeIconL.classList.remove('_active');
});

function chooseSizeOptionS(e) {
    popupSizeOptionS.classList.add('_active');
    popupSizeIconS.classList.add('_active');
    popupSizeOptionM.classList.remove('_active');
    popupSizeIconM.classList.remove('_active');
    popupSizeOptionL.classList.remove('_active');
    popupSizeIconL.classList.remove('_active');
}


popupSizeOptionM.addEventListener('click', function (event) {
    popupSizeOptionS.classList.remove('_active');
    popupSizeIconS.classList.remove('_active');
    popupSizeOptionM.classList.add('_active');
    popupSizeIconM.classList.add('_active');
    popupSizeOptionL.classList.remove('_active');
    popupSizeIconL.classList.remove('_active');
});

popupSizeOptionL.addEventListener('click', function (event) {
    popupSizeOptionS.classList.remove('_active');
    popupSizeIconS.classList.remove('_active');
    popupSizeOptionM.classList.remove('_active');
    popupSizeIconM.classList.remove('_active');
    popupSizeOptionL.classList.add('_active');
    popupSizeIconL.classList.add('_active');
});

function removeAdditivesOptions(e) {
    popupAdditivesOption1.classList.remove('_active');
    popupAdditivesIcon1.classList.remove('_active');
    popupAdditivesOption2.classList.remove('_active');
    popupAdditivesIcon2.classList.remove('_active');
    popupAdditivesOption3.classList.remove('_active');
    popupAdditivesIcon3.classList.remove('_active');
}
// grid 

const grid = document.querySelector('.grid');

const tabItemCoffee = document.querySelector('.tab-item_coffee');
tabItemCoffee.classList.add('_active');
const tabIconCoffee = document.querySelector('.tab-icon_coffee');
tabIconCoffee.classList.add('_active');

const tabItemTea = document.querySelector('.tab-item_tea');
const tabIconTea = document.querySelector('.tab-icon_tea');
tabIconTea.classList.remove('_active');

const tabItemDessert = document.querySelector('.tab-item_dessert');
const tabIconDessert = document.querySelector('.tab-icon_dessert');
tabIconDessert.classList.remove('_active');

const btnShowMore = document.querySelector('.button-show-more');

// coffee Gallery 

// function showData(data) {
// const coffeeGallery = data.coffeeGallery;

coffeeGallery.forEach((item, index) => {

    let card = document.createElement('div');
    card.classList.add('card');
    grid.append(card);
    // console.log(card);
    // for (let i = 4; i < card.length; i++) {       
    //     if (card[i]) {
    //         card[i].classList.add('_hidden');
    //     }
    // }

    const itemBoxImage = document.createElement('div');
    itemBoxImage.classList.add('item__box-image');
    card.append(itemBoxImage);

    const itemImage = document.createElement('img');
    itemImage.classList.add('item__image');
    itemImage.src = item.image;
    itemImage.alt = item.title;
    // itemImage.width = 310;
    // itemImage.height = 310;
    itemBoxImage.append(itemImage);

    const itemDescription = document.createElement('div');
    itemDescription.classList.add('item__description');
    card.append(itemDescription);

    const itemDescriptionTitle = document.createElement('h2');
    itemDescriptionTitle.classList.add('item__description-title');
    itemDescriptionTitle.innerText = item.title;
    itemDescription.append(itemDescriptionTitle);

    const itemDescriptionSubtitle = document.createElement('p');
    itemDescriptionSubtitle.classList.add('item__description-subtitle');
    itemDescriptionSubtitle.innerText = item.subtitle;
    itemDescription.append(itemDescriptionSubtitle);

    const itemDescriptionPrice = document.createElement('p');
    itemDescriptionPrice.classList.add('item__description-price');
    itemDescriptionPrice.innerText = `$${item.price}`;
    itemDescription.append(itemDescriptionPrice);


    // btn-show-more 

    let cards = document.querySelectorAll('.card');
    if (cards.length > 4) {
        btnShowMore.classList.add('_active');
    }
    else {
        btnShowMore.classList.remove('_active');
    }

    btnShowMore.addEventListener('click', () => {
        btnShowMore.classList.remove('_active');
        card.classList.add('_show-more');
    });


    if (card) {
        card.addEventListener("click", onCardClick);
    }

    card.addEventListener("click", showCardInfo);

    function showCardInfo(e) {
        chooseSizeOptionS();
        removeAdditivesOptions();
        popupImage.src = item.image;
        popupTitle.innerHTML = item.title;
        popupSubtitle.innerHTML = item.subtitle;
        let price = Number(item.price);
        totalPrice.innerHTML = `$${item.price}`;

        popupAdditives1.addEventListener("click", (e) => {
            popupAdditivesOption1.classList.add('_active');
            popupAdditivesIcon1.classList.add('_active');
            let sum2 = price + additivesPrice;
            totalPrice.innerHTML = `$${sum2.toFixed(2)}`;
        });

        popupAdditives2.addEventListener("click", (e) => {
            popupAdditivesOption2.classList.add('_active');
            popupAdditivesIcon2.classList.add('_active');
            let sum2 = price + additivesPrice;
            totalPrice.innerHTML = `$${sum2.toFixed(2)}`;
        });

        popupAdditives3.addEventListener("click", (e) => {
            popupAdditivesOption3.classList.add('_active');
            popupAdditivesIcon3.classList.add('_active');
            let sum2 = price + additivesPrice;
            totalPrice.innerHTML = `$${sum2.toFixed(2)}`;
        });

        popupSizeS.addEventListener("click", (e) => {
            addPrice = addPriceSizeS;
            let sum = price + addPrice;
            totalPrice.innerHTML = `$${sum.toFixed(2)}`;

            popupAdditives1.addEventListener("click", (e) => {
                popupAdditivesOption1.classList.add('_active');
                popupAdditivesIcon1.classList.add('_active');
                let sum2 = (sum + additivesPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum2}`;
            });

            popupAdditives2.addEventListener("click", (e) => {
                popupAdditivesOption2.classList.add('_active');
                popupAdditivesIcon2.classList.add('_active');
                let sum2 = (sum + additivesPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum2}`;
            });

            popupAdditives3.addEventListener("click", (e) => {
                popupAdditivesOption3.classList.add('_active');
                popupAdditivesIcon3.classList.add('_active');
                let sum2 = (sum + additivesPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum2}`;
            });
        });

        popupSizeM.addEventListener("click", (e) => {
            addPrice = addPriceSizeM;
            let sum = price + addPrice;
            totalPrice.innerHTML = `$${sum.toFixed(2)}`;

            popupAdditives1.addEventListener("click", (e) => {
                popupAdditivesOption1.classList.add('_active');
                popupAdditivesIcon1.classList.add('_active');
                let sum2 = (sum + additivesPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum2}`;
            });

            popupAdditives2.addEventListener("click", (e) => {
                popupAdditivesOption2.classList.add('_active');
                popupAdditivesIcon2.classList.add('_active');
                let sum2 = (sum + additivesPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum2}`;
            });

            popupAdditives3.addEventListener("click", (e) => {
                popupAdditivesOption3.classList.add('_active');
                popupAdditivesIcon3.classList.add('_active');
                let sum2 = (sum + additivesPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum2}`;
            });
        });

        popupSizeL.addEventListener("click", (e) => {
            addPrice = addPriceSizeL;
            let sum = price + addPrice;
            totalPrice.innerHTML = `$${sum.toFixed(2)}`;

            popupAdditives1.addEventListener("click", (e) => {
                popupAdditivesOption1.classList.add('_active');
                popupAdditivesIcon1.classList.add('_active');
                let sum2 = (sum + additivesPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum2}`;
            });

            popupAdditives2.addEventListener("click", (e) => {
                popupAdditivesOption2.classList.add('_active');
                popupAdditivesIcon2.classList.add('_active');
                let sum2 = (sum + additivesPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum2}`;
            });

            popupAdditives3.addEventListener("click", (e) => {
                popupAdditivesOption3.classList.add('_active');
                popupAdditivesIcon3.classList.add('_active');
                let sum2 = (sum + additivesPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum2}`;
            });
        });


    }

});

// tab Item Coffee

tabItemCoffee.addEventListener('click', (e) => {

    grid.innerHTML = '';
    tabItemCoffee.classList.add('_active');
    tabIconCoffee.classList.add('_active');
    tabItemDessert.classList.remove('_active');
    tabIconDessert.classList.remove('_active');
    tabItemTea.classList.remove('_active');
    tabIconTea.classList.remove('_active');

    coffeeGallery.forEach((item, index) => {

        const card = document.createElement('div');
        card.classList.add('card');
        grid.append(card);

        const itemBoxImage = document.createElement('div');
        itemBoxImage.classList.add('item__box-image');
        card.append(itemBoxImage);

        const itemImage = document.createElement('img');
        itemImage.classList.add('item__image');
        itemImage.src = item.image;
        itemImage.alt = item.title;
        // itemImage.width = 310;
        // itemImage.height = 310;
        itemBoxImage.append(itemImage);

        const itemDescription = document.createElement('div');
        itemDescription.classList.add('item__description');
        card.append(itemDescription);

        const itemDescriptionTitle = document.createElement('h2');
        itemDescriptionTitle.classList.add('item__description-title');
        itemDescriptionTitle.innerText = item.title;
        itemDescription.append(itemDescriptionTitle);

        const itemDescriptionSubtitle = document.createElement('p');
        itemDescriptionSubtitle.classList.add('item__description-subtitle');
        itemDescriptionSubtitle.innerText = item.subtitle;
        itemDescription.append(itemDescriptionSubtitle);

        const itemDescriptionPrice = document.createElement('p');
        itemDescriptionPrice.classList.add('item__description-price');
        itemDescriptionPrice.innerText = ` $${item.price}`;
        itemDescription.append(itemDescriptionPrice);

        // btn-show-more 

        let cards = document.querySelectorAll('.card');
        if (cards.length > 4) {
            btnShowMore.classList.add('_active');
        }
        else {
            btnShowMore.classList.remove('_active');
        }

        btnShowMore.addEventListener('click', () => {
            btnShowMore.classList.remove('_active');
            card.classList.add('_show-more');
        });

        if (card) {
            card.addEventListener("click", onCardClick);
        }

        card.addEventListener("click", showCardInfo);

        function showCardInfo(e) {
            chooseSizeOptionS();
            removeAdditivesOptions();

            popupImage.src = item.image;
            popupTitle.innerHTML = item.title;
            popupSubtitle.innerHTML = item.subtitle;
            popupSizeS.innerHTML = '200 ml';
            popupSizeM.innerHTML = '300 ml';
            popupSizeL.innerHTML = '400 ml';
            popupAdditives1.innerText = 'Sugar';
            popupAdditives2.innerText = 'Cinnamon';
            popupAdditives3.innerText = 'Syrup';
            let price = Number(item.price);
            totalPrice.innerHTML = `$${item.price}`;

            popupSizeS.addEventListener("click", (e) => {
                addPrice = addPriceSizeS;
                let sum = (price + addPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum}`;
            });

            popupSizeM.addEventListener("click", (e) => {
                addPrice = addPriceSizeM;
                let sum = (price + addPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum}`;
            });

            popupSizeL.addEventListener("click", (e) => {
                addPrice = addPriceSizeL;
                let sum = (price + addPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum}`;
            });
        }

    });
});

// tab Item Tea

tabItemTea.addEventListener('click', (e) => {

    grid.innerHTML = '';
    tabItemCoffee.classList.remove('_active');
    tabIconCoffee.classList.remove('_active');
    tabItemDessert.classList.remove('_active');
    tabIconDessert.classList.remove('_active');
    tabItemTea.classList.add('_active');
    tabIconTea.classList.add('_active');

    teaGallery.forEach((item, index) => {

        const card = document.createElement('div');
        card.classList.add('card');
        grid.append(card);

        const itemBoxImage = document.createElement('div');
        itemBoxImage.classList.add('item__box-image');
        card.append(itemBoxImage);

        const itemImage = document.createElement('img');
        itemImage.classList.add('item__image');
        itemImage.src = item.image;
        itemImage.alt = item.title;
        // itemImage.width = 310;
        // itemImage.height = 310;
        itemBoxImage.append(itemImage);

        const itemDescription = document.createElement('div');
        itemDescription.classList.add('item__description');
        card.append(itemDescription);

        const itemDescriptionTitle = document.createElement('h2');
        itemDescriptionTitle.classList.add('item__description-title');
        itemDescriptionTitle.innerText = item.title;
        itemDescription.append(itemDescriptionTitle);

        const itemDescriptionSubtitle = document.createElement('p');
        itemDescriptionSubtitle.classList.add('item__description-subtitle');
        itemDescriptionSubtitle.innerText = item.subtitle;
        itemDescription.append(itemDescriptionSubtitle);

        const itemDescriptionPrice = document.createElement('p');
        itemDescriptionPrice.classList.add('item__description-price');
        itemDescriptionPrice.innerText = ` $${item.price}`;
        itemDescription.append(itemDescriptionPrice);

        // btn-show-more 

        let cards = document.querySelectorAll('.card');
        if (cards.length > 4) {
            btnShowMore.classList.add('_active');
        }
        else {
            btnShowMore.classList.remove('_active');
        }

        btnShowMore.addEventListener('click', () => {
            btnShowMore.classList.remove('_active');
            card.classList.add('_show-more');
        });

        if (card) {
            card.addEventListener("click", onCardClick);
        }

        card.addEventListener("click", showCardInfo);

        function showCardInfo(e) {
            chooseSizeOptionS();
            removeAdditivesOptions();
            popupImage.src = item.image;
            popupTitle.innerHTML = item.title;
            popupSubtitle.innerHTML = item.subtitle;
            popupSizeS.innerHTML = '200 ml';
            popupSizeM.innerHTML = '300 ml';
            popupSizeL.innerHTML = '400 ml';
            popupAdditives1.innerText = 'Sugar';
            popupAdditives2.innerText = 'Lemon';
            popupAdditives3.innerText = 'Syrup';

            let price = Number(item.price);
            totalPrice.innerHTML = `$${item.price}`;

            popupSizeS.addEventListener("click", (e) => {
                addPrice = addPriceSizeS;
                let sum = (price + addPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum}`;
            });

            popupSizeM.addEventListener("click", (e) => {
                addPrice = addPriceSizeM;
                let sum = (price + addPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum}`;
            });

            popupSizeL.addEventListener("click", (e) => {
                addPrice = addPriceSizeL;
                let sum = (price + addPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum}`;
            });
        }

    });
});

// tab Item Dessert 

tabItemDessert.addEventListener('click', (e) => {

    grid.innerHTML = '';
    tabItemCoffee.classList.remove('_active');
    tabIconCoffee.classList.remove('_active');
    tabItemDessert.classList.add('_active');
    tabIconDessert.classList.add('_active');
    tabItemTea.classList.remove('_active');
    tabIconTea.classList.remove('_active');

    dessertGallery.forEach((item, index) => {

        const card = document.createElement('div');
        card.classList.add('card');
        grid.append(card);

        const itemBoxImage = document.createElement('div');
        itemBoxImage.classList.add('item__box-image');
        card.append(itemBoxImage);

        const itemImage = document.createElement('img');
        itemImage.classList.add('item__image');
        itemImage.src = item.image;
        itemImage.alt = item.title;
        // itemImage.width = 310;
        // itemImage.height = 310;
        itemBoxImage.append(itemImage);

        const itemDescription = document.createElement('div');
        itemDescription.classList.add('item__description');
        card.append(itemDescription);

        const itemDescriptionTitle = document.createElement('h2');
        itemDescriptionTitle.classList.add('item__description-title');
        itemDescriptionTitle.innerText = item.title;
        itemDescription.append(itemDescriptionTitle);

        const itemDescriptionSubtitle = document.createElement('p');
        itemDescriptionSubtitle.classList.add('item__description-subtitle');
        itemDescriptionSubtitle.innerText = item.subtitle;
        itemDescription.append(itemDescriptionSubtitle);

        const itemDescriptionPrice = document.createElement('p');
        itemDescriptionPrice.classList.add('item__description-price');
        itemDescriptionPrice.innerText = ` $${item.price}`;
        itemDescription.append(itemDescriptionPrice);

        // btn-show-more 

        let cards = document.querySelectorAll('.card');
        if (cards.length > 4) {
            btnShowMore.classList.add('_active');
        }
        else {
            btnShowMore.classList.remove('_active');
        }

        btnShowMore.addEventListener('click', () => {
            btnShowMore.classList.remove('_active');
            card.classList.add('_show-more');
        });

        if (card) {
            card.addEventListener("click", onCardClick);
        }

        card.addEventListener("click", showCardInfo);


        function showCardInfo(e) {
            chooseSizeOptionS();
            removeAdditivesOptions();
            popupImage.src = item.image;
            popupTitle.innerHTML = item.title;
            popupSubtitle.innerHTML = item.subtitle;
            popupSizeS.innerHTML = '50 g';
            popupSizeM.innerHTML = '100 g';
            popupSizeL.innerHTML = '200 g';
            popupAdditives1.innerText = 'Berries';
            popupAdditives2.innerText = 'Nuts';
            popupAdditives3.innerText = 'Jam';
            let price = Number(item.price);
            totalPrice.innerHTML = `$${item.price}`;

            popupSizeS.addEventListener("click", (e) => {
                addPrice = addPriceSizeS;
                let sum = (price + addPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum}`;
            });

            popupSizeM.addEventListener("click", (e) => {
                addPrice = addPriceSizeM;
                let sum = (price + addPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum}`;
            });

            popupSizeL.addEventListener("click", (e) => {
                addPrice = addPriceSizeL;
                let sum = (price + addPrice).toFixed(2);
                totalPrice.innerHTML = `$${sum}`;
            });
        }

    });
});

// popup 

function onCardClick(e) {
    document.body.classList.toggle('_lock');
    popup.classList.add('_active', 'display-popup');
}

function closePopup(e) {
    if (popup.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        popup.classList.remove('_active');
    }
}

popupButtonClose.addEventListener('click', closePopup);

popup.addEventListener('click', function (event) {
    const isOutSide = !event.target.closest('.pop-up__content');
    if (isOutSide) {
        closePopup();
    }
});

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
