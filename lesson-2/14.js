/*# Задача 14

Дано число `n=1000`. 
Делите его на 2 столько раз, пока результат деления не станет меньше 50.
 Какое число получится? 
 Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), 
 и запишите его в переменную `num`.

Использовать встроенные методы массивов — нельзя.
*/

var n = 1000;
var num = 0;
for(; n >= 50; n/2, num++) {
  n /= 2;
}
console.log(`by for => ${n} = ${num} iterations`);

var n2 = 1000;
var num2 = 0;
while (n2 >= 50) {
  n2 /= 2;
  num2++;
}
console.log(`by while => ${n2} = ${num2} iterations`);
