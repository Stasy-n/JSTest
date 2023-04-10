// Напишите программу калькулятора со switch, обработайте возможные ошибки ввода 
// let numer1 = 11;
// let numer2 = 9;
// let operator = '+';

// switch (operator){
//     case "+":
//         result = numer1 + numer2;
//         console.log(result);
//         break;
//     case "-":
//         result = numer1 - numer2;
//         console.log(result);
//         break;
//     default:
//         console.log("default");

// }

// Попробуйте внедрить в свою программу с кофе вложенный if

// При помощи цикла for выведите чётные числа от 2 до 10
// for(let i = 2; i<= 10; i=i+2){
//     console.log(i);
// }

// Задача с интервью
// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
let sum1 = 0;
let sum2 = 0;
let str = '()()(';
console.log(str.length);
for(let i=0; i<=str.length; i++){
    if(str[i] === "(" )
    sum1 +=1;
    else if (str[i] === ")" )
    sum2 +=1;
}
if(sum1 == sum2)
console.log("equal");
else
console.log("not equal");
// // Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.
// let text = 'You are the best QA ever';
// let newText = '';
// let count = 0;
// for (let i = 0; i < text.length; i++){
//     if(count % 2 == 0){
//         newText = newText + text[i] + "br";
//     }
//     count += 2;
// }
// console.log(newText);

// let decodedText = '';
// for(let i = 0; i<newText.length; i+=3){
//     decodedText += newText[i];
// }
// console.log(decodedText);