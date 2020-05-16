var cart = {}; //корзина

//В первую очередю загружаем JSON
//В переменную data получает содержимое файла JSON
$.getJSON('goods.json', function (data) {
    var goods = data; //все товары в массиве
    // console.log(goods);
    checkCart();
    console.log(cart);
    showCart(); //вывожу товары на страницу

    function showCart() {
        if ($.isEmptyObject(cart)) {
            var out = 'Корзина пуста. Добавте товар в корзину <a href="/shop/eshop.com/">главная страница</a>';
            $('#my-cart').html(out);
        }
        else {
            var out = '';
            for (var key in cart) {
                out += '<button class="delete" data-art="' + key + '">x</button>';
                out += '<img src="'+goods[key].image+'" width="48">';
                out += goods[key].name;
                out += '<button class="minus" data-art="' + key + '">-</button>';
                out += cart[key];
                out += '<button class="plus" data-art="' + key + '">+</button>';
                out += cart[key]*goods[key].cost;
                out +='<br>';
            }
            $('#my-cart').html(out);
            $('.plus').on('click', plusGoods);
            $('.minus').on('click', minusGoods);
            $('.delete').on('click', deleteGoods);
        }
    }

    function plusGoods() {
        //Получаем артикул
        var articul = $(this).attr('data-art');
        //увеличиваем на еденицу
        cart[articul]++;
        //и перерысовиваем корзину
        saveCartToLocalStorage();
        showCart();
    }

    function minusGoods() {
        //Получаем артикул
        var articul = $(this).attr('data-art');
        //уменьшаем на еденицу
        //если количество товара меньше 1 - удаляем товар из корзины
        //После каждых манипуляций с +, - и удалением, необходимо сохранять состояние корзины
        if (cart[articul] > 1) {
            cart[articul]--;
        }
        else {
            delete cart[articul];
        }
        //и перерысовиваем корзину
        saveCartToLocalStorage();
        showCart();
    }

    function deleteGoods() {
        //Получаем артикул
        var articul = $(this).attr('data-art');
        //удаляем товар из корзины
        //После каждых манипуляций с +, - и удалением, необходимо сохранять состояние корзины
        delete cart[articul];
        //и перерысовиваем корзину
        saveCartToLocalStorage();
        showCart();
    }
});

function checkCart() {
    //проверяю наличие корзины в localStorage;
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
