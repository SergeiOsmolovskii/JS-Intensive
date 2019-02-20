window.addEventListener('DOMContentLoaded', function () {

    const cartWrapper = document.querySelector('.cart__wrapper');
    const cart = document.querySelector('.cart');
    const close = document.querySelector('.cart__close');
    const open = document.querySelector('#cart');
    const goodsBtn = document.querySelectorAll('.goods__btn');
    const products = document.querySelectorAll('.goods__item');
    const confirm = document.querySelector('.confirm');
    const badge = document.querySelector('.nav__badge');
    const totalCost = document.querySelector('.cart__total > span');
    const titles = document.querySelectorAll('.goods__title');

    function openCatr() {
        cart.style.display = 'block';
        document.body.style.overflow = 'hidden'; // не прокркчиваем страницу с открытой карзиной
    }

    function closeCatr() {
        cart.style.display = 'none';
        document.body.style.overflow = ''; // возврат к исходному варианту
    }

    open.addEventListener('click', openCatr);
    close.addEventListener('click', closeCatr);

    goodsBtn.forEach(function (btn, i) {
        btn.addEventListener('click', function () {
            let item = products[i].cloneNode(true);
            let trigger = item.querySelector('button');
            let removeBtn = document.createElement('div');
            let empty = cartWrapper.querySelector('.empty');

            trigger.remove();
            showConfirm();
            calcGoods(1);

            removeBtn.classList.add('goods__item-remove');
            removeBtn.textContent = 'X';
            item.appendChild(removeBtn);
            cartWrapper.appendChild(item);
            
            if (empty) {
                empty.style.display = 'none';
            }

            calcTotalPrice();
            removeFromCart();
        });
    });

    function cartEmpty() {
        let empty = cartWrapper.querySelector('.empty');
        let goodsItem = document.querySelectorAll('.cart__wrapper > .goods__item');
        if (goodsItem.length == 0) {
            empty.style.display = 'block';
        }
    }

    function sliceTitle() {
        titles.forEach(function (item) {
            if (item.textContent.length < 70) {
                return;
            } else {
                const str = item.textContent.slice(0, 71) + '...';
                item.textContent = str;
            }
        });
    }

    function showConfirm() {
        confirm.style.display = 'block';
        let counter = 100;
        const id = setInterval(frame, 10);

        function frame() {
            if (counter == 10) {
                clearInterval(id);
                confirm.style.display = 'none';
            } else {
                counter--;
                confirm.style.transform = `translateY(-${counter}px)`;
                confirm.style.opacity = '.' + counter;
            }
        }
    }

    function calcGoods(i) {
        const items = cartWrapper.querySelectorAll('.goods__item');
        badge.textContent = items.length + i;
    }

    function calcTotalPrice() {
        const prices = document.querySelectorAll('.cart__wrapper > .goods__item > .goods__price > span');
        let total = 0;
        prices.forEach(function (item) {
            total += parseInt(item.textContent);

        });
        totalCost.textContent = total;
    }

    function removeFromCart() {
        const removeBtn = cartWrapper.querySelectorAll('.goods__item-remove');
        removeBtn.forEach(function (btn) {
            btn.addEventListener('click', function () {
                btn.parentElement.remove();
                calcGoods(0);
                calcTotalPrice();
                cartEmpty();
            })
        })

    }
    sliceTitle();
});