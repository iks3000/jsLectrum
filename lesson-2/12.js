/*# Задача 12

Найдите сумму положительных элементов массива.
В результате вы должны получить число `7`.

Использовать встроенные методы массивов — нельзя.

```javascript
const array = [2, -1, -3, 15, 0, 4];
```
*/

const array = [2, -1, -3, 15, 0, 4];
var result = 0;
for (var i in array) {
    if (array[i]  > 0 ) {
        result += array[i];
    }
}
console.log(result);


