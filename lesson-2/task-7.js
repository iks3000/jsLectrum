/*# Задача 7

Напишите код, который посчитает сумму всех парных элементов в массиве.

Использовать встроенные методы массивов — нельзя.

```js
const array = [1, 2, 3, 4];
```
*/

const array = [1, 2, 3, 4];

var result = 0;

for (var i in array) {
    if (array[i] % 2 == 0) {
        result += array[i];
    }
}
console.log(result);
