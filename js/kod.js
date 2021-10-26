var arr2 = '';
var arr3 = '';
var arr4 = '';
var arr5 = '';
var arr6 = '';
document.getElementById('param-1').oninput = function () {
    // ползунок - длина массива
 document.getElementById('password-length').innerHTML = this.value;
}
var 
result,
b = document.getElementByName('name1').value,
y = document.getElementByName('name2').value,
z = document.getElementByName('name3').value,
k = document.getElementByName('name4').value ,
c = document.getElementByName('name5').value,
m =document.getElementByName('name6').value ;

    document.getElementByName('param-2').onclick = generate();
    document.getElementById('out').result = '';
    console.log(result);
    /*
    for (var k = 0; k < 6; k++) {
        var pass = ''; // будущий пароль
        var passLength = parseInt(document.getElementById('param-1').value); // длина пароля
        for (var i = 0; i < passLength; i++) {
            // цикл по длине пароля
            // выбираю случайное значение из массива result
            pass += result;
        }
        console.log(pass);
        document.getElementById('out').innerHTML += '<p>' + pass + '</p>';
    }
*/
function generate() {
    result = b+y+z+k+c+m;
    alert(result);
}
function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
