const dateOptions = require('./dateOptions');
console.log(dateOptions.getCurrentDate())
console.log(dateOptions.convertLocalToTimezone('2020-05-20 04:42:44 PM', null, 'America/Los_Angeles'))
console.log(dateOptions.getCurrentMinutes());
console.log(dateOptions.getOtherFormatDate('2023-05-27','DD.MM.YYYY'));
let currentDate = dateOptions.getCurrentLocalDateTime();
console.log(dateOptions.subtractDays(currentDate, 2));