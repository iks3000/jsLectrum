/**
 * Задача 7.
 *
 * Дан массив с числами `[1, 2, 3]`.
 * Создайте функцию `f`, которая принимает массив в качестве параметра,
 * а затем последовательно выводит на экран его элементы.
 *
 * Условия:
 * - Входной параметр должен быть не пустым массивом;
 * - Обязательно использовать рекурсию;
 * - Использовать цикл запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

var i = 0;
function f(arr) {
    if (typeof(arr) === 'string' || typeof(arr) !== 'object') {
        throw new Error('parameter type should be an array');
    } else if (!arr || !arr.length) {
        throw new Error('parameter can\'t be an empty')
    } else {
        console.log(arr[i]);
        i++;
        if (i < arr.length) {
            f(arr)
        };
    }
}

/* не удалять */
f([1, 2, 3]);
// 1
// 2
// 3
f(1, 2, 3); // Error: parameter type should be an array
f('Content'); // Error: parameter type should be an array
f([]); // Error: parameter can't be an empty

export { f };
/* не удалять */
