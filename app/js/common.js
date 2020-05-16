var data = {
    // ДНЗ та Школа

    "11291" : {
        "image" : "img/goods/201.jpg",
        "name" : "Підготовка до школи 5+ Робочий зошит В’юнник Основа, РДШ004",
        "old_cost" : 80,
        "new_cost" : "57,60",
        "in_stock" : true,
        "in_sales" : true,
        "is new" : false,
        "category" : "ДНЗ та Школа"
    },
    "11292" : {
        "image" : "img/goods/202.jpg",
        "name" : "Дидактична гра. Лісова математика, Ранок, 23х34 см, 15211009У",
        "old_cost" : 105,
        "new_cost" : "74,55",
        "in_stock" : true,
        "in_sales" : true,
        "is new" : false,
        "category" : "ДНЗ та Школа"
    },
    "11293" : {
        "image" : "img/goods/203.jpg",
        "name" : "Цікава математика 4-6 років. Високий рівень. Малятко Волкова, 978-966-429-458-1",
        "old_cost" : 38,
        "new_cost" : "26,79",
        "in_stock" : true,
        "in_sales" : true,
        "is new" : false,
        "category" : "ДНЗ та Школа"
    },
    "11294" : {
        "image" : "img/goods/204.jpg",
        "name" : "EASY ENGLISH. (Рус.) Пособие для детей 4-7 лет, изучающих английский, 978-966-429-081-1",
        "old_cost" : 140,
        "new_cost" : "98,70",
        "in_stock" : true,
        "in_sales" : true,
        "is new" : true,
        "category" : "ДНЗ та Школа"
    },


//  ДИТЯЧА ЛІТЕРАТУРА

    "11391" : {
        "image" : "img/goods/301.jpg",
        "name" : "Казки братів Грімм казки з пазлами 300х220 мм, 12 с., Ранок, А771008У",
        "old_cost" : 160,
        "new_cost" : "113,60",
        "in_stock" : true,
        "in_sales" : true,
        "is new" : true,
        "category" : "ДИТЯЧА ЛІТЕРАТУРА"
    },
    "11392" : {
        "image" : "img/goods/302.jpg",
        "name" : "Де порося Еміль? Віммельбух. Шарлотта Вагнер 31х23 см. 14 с. Ранок, Л901242У",
        "old_cost" : 100,
        "new_cost" : "71",
        "in_stock" : true,
        "in_sales" : true,
        "is new" : false,
        "category" : "ДИТЯЧА ЛІТЕРАТУРА"
    },
    "11393" : {
        "image" : "img/goods/303.jpg",
        "name" : "Казки старої Англії казки з пазлами 300х220 мм, 12 с., Ранок, А771007У",
        "old_cost" : 160,
        "new_cost" : "113,60",
        "in_stock" : true,
        "in_sales" : true,
        "is new" : false,
        "category" : "ДИТЯЧА ЛІТЕРАТУРА"
    },
    "11394" : {
        "image" : "img/goods/304.jpg",
        "name" : "Казки далекого Сходу казки з пазлами 300х220 мм, 12 с., Ранок, А771006У",
        "old_cost" : 160,
        "new_cost" : "113,60",
        "in_stock" : true,
        "in_sales" : true,
        "is new" : false,
        "category" : "ДИТЯЧА ЛІТЕРАТУРА"
    },


    //  ІГРАШКИ

    "11491" : {
        "image" : "img/goods/401.jpg",
        "name" : "Набор - для занятий мозаика Quercetti 0954-Q (фишки 300 шт. квадр. и треуг.)",
        "old_cost" : 359,
        "new_cost" : "315,92",
        "in_stock" : true,
        "in_sales" : true,
        "is new" : false,
        "category" : "ІГРАШКИ"
    },
    "11492" : {
        "image" : "img/goods/402.jpg",
        "name" : "Эксперименты по химии с мгновенным эффектом, 20 опытов, 12114087Р",
        "old_cost" : 489,
        "new_cost" : "352,08",
        "in_stock" : false,
        "in_sales" : true,
        "is new" : false,
        "category" : "ІГРАШКИ"
    },
    "11493" : {
        "image" : "img/goods/403.jpg",
        "name" : "Ночник проектор звездное небо Спящая Черепаха XC-3 (28х20х9 см, таймер 45мин)",
        "old_cost" : "",
        "new_cost" : "299",
        "in_stock" : true,
        "in_sales" : false,
        "is new" : true,
        "category" : "ІГРАШКИ"
    },
    "11494" : {
        "image" : "img/goods/404.jpg",
        "name" : "Конструктор Технотроник (ТехноК, 0830 134 детали, 6 моделей)",
        "old_cost" : "",
        "new_cost" : "155",
        "in_stock" : true,
        "in_sales" : false,
        "is new" : true,
        "category" : "ІГРАШКИ"
    }
}

window.onload = function() {
    var out = '';
    for (var key in data){
        out+='<div class="col col-12 col-sm-6 col-md-4 col-lg-3">';
        out+='<div class="main-goods__cell h-100">';
        out+='<div class="main-goods__tile h-100">';

        out+='<a href="#" class="main-goods__picture">';
        out+='<img src="'+data[key].image+'" alt="alt">';
        out+='</a>';

        out+='<div class="main-goods__title">';
        out+='<a href="#">'+data[key]['name']+'</a>';
        out+='</div>';

        if(data[key]['old_cost']) {
            out+='<p class="main-goods__price-old">'+data[key]['old_cost']+' грн</p>';
        }

        out+='<p class="main-goods__price-new">'+data[key]['new_cost']+'<span class="main-goods__currency"> грн</span></p>';

        if(data[key]['in_stock']) {
            out+='<div class="is-stock"><i class="fas fa-check"></i> В наличии</div>';
        } else {
            out+='<div class="no-stock"><i class="fas fa-times"></i> Нет в наличии</div>';
        }

        out+='<button type="button" class="button btn-block add-to-cart" data-art="'+key+'">Купить</button>';

        out+='</div>';
        out+='</div>';
        out+='</div>';
    }

    var goods = document.getElementById('goods');
    goods.innerHTML = out;
};



