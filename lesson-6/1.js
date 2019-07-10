/**
 * Задача 1.
 *
 * Вручную создать имплементацию функцию `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3];

// Решение

function forEach(arr, callback, thisArg) {
    let length = arr.length;
    for (let i = 0; i < length; i = i + 1) {
        callback.call(thisArg, arr[i], i, arr);
    }
}

const result = forEach(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив
});

console.log(result); // undefined

exports.forEach = forEach;
