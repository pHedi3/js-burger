var button = document.getElementById('button');
var priceHtml = document.getElementById('price-humburger');
var priceBase = 50;

button.addEventListener('click', function(){
    var price = priceBase;
    var foodOption = document.getElementsByClassName('food-option');
    for (var i = 0; i < foodOption.length; i++) {
        if (foodOption[i].checked) {
            price += parseFloat(foodOption[i].value)
        }
    }
    console.log(price)



});