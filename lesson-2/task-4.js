/*# Задача 4
Перепишите код с использованием одной конструкции `switch`:
js
const value = 0;

if (value === 0) {
    console.log(0);
}
if (value === 1) {
    console.log(1);
}
if (value === 2 || value === 3) {
    console.log('2,3');
}
*/

const value = 0;

switch (value) {
    case  0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log('2,3');
        break;
}