
// sezione per form
var button = document.getElementById('button');
var cupon = document.getElementById('cupon')
var priceHtml = document.getElementById('price-humburger');
var cuponList10 = ['sconto10', 'pippo10', 'paperino10']
var cuponList20 = ['sconto20', 'topolino20', 'paperone20']
var priceBase = 50;
var discount = 0;

button.addEventListener('click', function(){
    var price = priceBase;
    var foodOption = document.getElementsByClassName('food-option');
    for (var i = 0; i < foodOption.length; i++) {
        if (foodOption[i].checked) {
            price += parseFloat(foodOption[i].value)
        }
    }

    var flag = false;

    for (var x = 0; x < cuponList10.length; x++){
        if (cuponList10[x] == cupon.value ) {
            discount = 10;
            flag = true;
        }
    }
    for (var z = 0; z < cuponList20.length; z++){
        if (cuponList20[z] == cupon.value ) {
            discount = 20;
            flag = true;
        }

    }

    if (cupon.value.length > 0  && flag == false) {
        alert('il codice è errato')
    }


    price = price * ((100 - discount) / 100) ;
    priceHtml.innerHTML = price.toFixed(2) + '€';

});