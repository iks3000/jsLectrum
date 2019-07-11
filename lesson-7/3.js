/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

function createArray(el, index) {
    if(!el || !index) {
        throw new Error('must be two arguments');
    } else if(typeof el !== 'string') {
        throw new Error('first argument must be a String')
    } else if (typeof index !== 'number') {
        throw new Error('second argument must be a Number');
    } else {
        return Array(index).fill(el);
    }
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
