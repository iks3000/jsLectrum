/*# Задача 6

Написать код который посчитает сумму всех элементов в массиве.

Использовать встроенные методы массивов — нельзя.

```js
const array = [1, 2, 3, 4];
```
*/

const array = [1, 2, 3, 4];

var result  = 0;

for (var i in array) {
    result += array[i];
}
console.log(result);