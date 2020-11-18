var a;
var input = document.getElementById('textinput');
var btn1 = document.getElementById('1');
var btn2 = document.getElementById('2');
var btn3 = document.getElementById('3');
var btn4 = document.getElementById('4');
var btn5 = document.getElementById('5');
var btn6 = document.getElementById('6');
var btn7 = document.getElementById('7');
var btn8 = document.getElementById('8');
var btn9 = document.getElementById('9');
var btnplus = document.getElementById('plus');
var btnminus = document.getElementById('minus');
var btnmultiply = document.getElementById('multiply');
var btndivide = document.getElementById('divide');
var percent = document.getElementById('percent');
var btnclear = document.getElementById('c');
var squareNumb = document.getElementById('squareNumb');
var powerNumb = document.getElementById('powerNumb');
var btnequals = document.getElementById('equals');
var btndot = document.getElementById('dot');
var btnzero = document.getElementById('0');

squareNumb.addEventListener('click', function () {
    a = input.value 
    input.value = ""
    input.value += 	Math.sqrt(a) ;

})

powerNumb.addEventListener('click', function () {
    a = input.value
    input.value = ""
    input.value += Math.pow(10,a);
})

btn1.addEventListener('click', function () {
    input.value += '1';
})

btn2.addEventListener('click', function () {
    input.value += '2';
})

btn3.addEventListener('click', function () {
    input.value += '3';
})

btn4.addEventListener('click', function () {
    input.value += '4';
})

btn5.addEventListener('click', function () {
    input.value += '5';
})

btn6.addEventListener('click', function () {
    input.value += '6';
})

btn7.addEventListener('click', function () {
    input.value += '7';
})

btn8.addEventListener('click', function () {
    input.value += '8';
})

btn9.addEventListener('click', function () {
    input.value += '9';
})
btnzero.addEventListener('click', function () {
    input.value += '0';
})

btnplus.addEventListener('click', function () {
    input.value += ' + ';
})

btnminus.addEventListener('click', function () {
    input.value += ' - ';
})

btnmultiply.addEventListener('click', function () {
    input.value += ' * ';
})

btndivide.addEventListener('click', function () {
    input.value += ' / ';
})

percent.addEventListener('click', function () {
    result = input.value/100;
    input.value = result.toString();
})

btnclear.addEventListener('click', function () {
    input.value = "";
})
btndot.addEventListener('click', function () {
    input.value += '.';
})
btnequals.addEventListener('click', function () {
    var numbers = [];
    var string = input.value;
    var array = string.split(" ");
    var operation;
    var result = 0;
    var historic = array
    console.log(array)

    for (var i = 0; i < array.length; i++) {
        var num = array[i];
        switch (num) {
            case "+":
                operation = "addition";
                break;
            case "-":
                operation = "subtraction";
                break;
            case "*":
                operation = "multiplication";
                break;
            case "/":
                operation = "divison";
                break;
            case "%":
                operation = "percent";
                break;    
            default:
                numbers.push(num);
                console.log(numbers);
        }
    }
    if (operation === "addition") {
        for (var j = 0; j < numbers.length; j++) {
            numbers[j] = +numbers[j];
            var a = numbers[j];
            var b = numbers[j - 1];
            result = a + b;
            input.value = result.toString();
        }

    } else if (operation === "subtraction") {
        for (var j = 0; j < numbers.length; j++) {
            numbers[j] = +numbers[j];
            var a = numbers[j];
            var b = numbers[j - 1];
            console.log(a, b)
            result = b - a;
            input.value = result.toString();
        }

    } else if (operation === "multiplication") {
        for (var j = 0; j < numbers.length; j++) {
            numbers[j] = +numbers[j];
            var a = numbers[j];
            var b = numbers[j - 1];
            console.log(a, b)
            result = b * a;
            input.value = result.toString();
        }

    } else if (operation === "divison") {
        for (var j = 0; j < numbers.length; j++) {
            numbers[j] = +numbers[j];
            var a = numbers[j];
            var b = numbers[j - 1];
            console.log(a, b)
            result = b / a;
            input.value = result.toString();
        }

    } 

})