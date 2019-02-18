window.addEventListener('DOMContentLoaded', function(){


    const cartWrapper = document.querySelector('.cart__wrapper');
    const cart = document.querySelector('.cart');
    const close = document.querySelector('.cart__close');
    const open = document.querySelector('#cart');
    const goodsBtn = document.querySelectorAll('.goods__btn');
    const products = document.querySelectorAll('.goods__item');
    const confirm = document.querySelector('.confirm');
    const badge = document.querySelector('.nav__badge');
    const totalCost = document.querySelector('.cart__total > span');
    const titles = document.querySelectorAll('goods___title'); 
    
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
        btn.addEventListener('click', function() {
            let item = products[i].cloneNode(true);
            let trigger = item.querySelector('button');
            let removeBtn = document.createElement('div');
            let empty = cartWrapper.querySelector('.empty');
    
            trigger.remove();
            removeBtn.classList.add('goods__item-remove');
            removeBtn.textContent = 'X';
            item.appendChild(removeBtn);
            cartWrapper.appendChild(item);
    
            if (empty) {
                empty.remove();
            }
        });
    });
    
});
