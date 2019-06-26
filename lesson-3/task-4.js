/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
 * а затем возвращает день недели на русском языке.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 * - Входной параметр должен быть числом от 1 до 7.
 */

// Решение

function f(day) {
  const daysOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];
  if (day < 0 || day > 7 ) {
    throw new Error('parameter should be in the range of 1 to 7');
  } else if (typeof(day) === 'number') {
    for(let i = 0; i < daysOfWeek.length; i++) {
      if (i === day) {
        return daysOfWeek[i-1];
      }
    }
  } else {
    throw new Error('parameter type is not a Number');
  }
}

/* не удалять */
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

export { f };
/* не удалять */
