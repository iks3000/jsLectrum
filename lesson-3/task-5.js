/**
 * Задача 5.
 *
 * Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
 * Создайте из него новый массив, где останутся только положительные числа `[1, 2, 3, 7]`.
 * Создайте для этого вспомогательную функцию `isPositive(-3)`,
 * которая параметром будет принимать число и возвращать true,
 * если число положительное, и false — если отрицательное.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Для добавление нового элемента в конец массива используйте метод push.
 */

const array = [1, 2, -4, 3, -9, -1, 7];

// Решение

function isPositive(arr) {
  if (arr < 0 ) {
    return false;
  } else if (arr > 0) {
    return true;
  } else if (typeof(arr) === 'string') {
    throw new Error('Error: parameter type is not a Number');
  }

  var newArray = [];
  for (let i = 0, lengthArray = arr.length; i < lengthArray; i++) {
    if (arr[i] > -1) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

isPositive(array);

/* не удалять */
isPositive(-3); // false
isPositive(3); // true
isPositive('s'); // Error: parameter type is not a Number

export { isPositive };
/* не удалять */
