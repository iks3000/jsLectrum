/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */


// Решение

const person = {
    get salary() {
        const date = new Date();
        const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const diff = lastDayOfMonth.getDate() - date.getDate();

        if (diff > 20) {
            return 'good salary';
        }

        return 'bad salary';
    }
};

person.salary; // good salary

exports.person = person;
