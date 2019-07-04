/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

const PRICE = '$120';

// Решение

 function extractCurrencyValue(source) {
  if(source === ''){
     return 0;
  } else if(typeof source === 'string') {
       return parseFloat(source.slice(1));
  } else {
     throw new Error('parameters type should be a String')
  }
 }

extractCurrencyValue(PRICE); // 120

exports.extractCurrencyValue = extractCurrencyValue;
