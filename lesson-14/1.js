/**
 * Задача 1.
 *
 * Дан базовый класс робота-уборщика.
 *
 * Добавьте роботу функционал употребления энергии:
 * - при начале уборки уровень энергии должен уменьшиться;
 * - в расчёте использовать внутренний коэффициент ENERGY_CONSUMPTION.
 *
 * Затем добавьте роботу публичный метод stop() для остановки процесса уборки.
 * В если уборка остановлена раньше времени завершения,
 * onReady сработать не должен, а также нужно вывести другое сообщение.
 *
 * Условия:
 * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять;
 * - использовать функцию clearTimeout;
 * - идентификатор таймера нужно хранить в приватной переменной конструктора.
 */

function CleanerRobot(
  initialEnergy = 0 /* Изначальный заряд батареи робота */,
  cleaningSquare /* Площадь для уборки в метрах. */,
) {
  let energy = initialEnergy;
  let timerId = 0;
  const ENERGY_CONSUMPTION = 1; /* Расход энергии: 1% батареи на 1 час работы. */
  const CLEANING_SPEED = 10; /* Скорость уборки: 10 квадратных метров в час. */
  const getCleaningTime = () => cleaningSquare / CLEANING_SPEED; /* Подсчет времени уборки */
  const remainingPower = () => ENERGY_CONSUMPTION * energy - getCleaningTime(); /* Подсчет оставшейся энергии робота */

  const onReady = () => {
    console.log(`Cleaning completed. Battery remaining: ${remainingPower()}%`);
    clearInterval(interval);
  }

  let timer;
  let interval;
  
  this.clean = () => {
    const cleaningTime = getCleaningTime();

    console.log(
      `Start the cleaning process. Cleaning time: ${cleaningTime} ${(cleaningTime > 1) ? 'hours' : 'hour'}.`,
    );

    interval = setInterval(() => {timerId++}, 1000);

    /* Для удобства время уборки сокращено до формата 1 час = 1 секунда */
    timer = setTimeout(onReady, cleaningTime * 1000);
  };

  // Решение
  this.stop = () => {
    clearTimeout(timer);
    clearInterval(interval);
    let anticipatorily = ENERGY_CONSUMPTION * energy - timerId;
    console.log(`After ${timerId} seconds: Cleaning completed ahead of schedule. Battery remaining: ${anticipatorily}%`);
    timerId = 0;
  };
}

const cleanerRobot = new CleanerRobot(50, 45);
cleanerRobot.clean(); /* Начинаю процесс уборки. Время уборки: 4.5 часов. */
/* Спустя 4.5 секунды: Уборка завершена. Осталось заряда батареи: 45.5. */

// setTimeout(() => {
//   cleanerRobot.stop(); /* Спустя 1 секунду: Уборка завершена досрочно. Осталось заряда батареи: 45.5. */
// }, 1000);

exports.CleanerRobot = CleanerRobot;
