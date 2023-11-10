// импорт moment module
const moment = require('moment-timezone');
//экспорт функций
module.exports = {
    getCurrentDate: function() {
        return moment().format('DD.MM.YYYY');
    },
    getCurrentMinutes: function(){
        return moment().minutes();
    },
    getOtherFormatDate: function(date, format) {
        return moment(date).format(format);
    },
    getCurrentLocalDateTime(){
        return moment().format('DD.MM.YYYY hh:mm:ss A');
    },
    convertLocalToTimezone: function(localDt, localDtFormat, timezone) {
        return moment(localDt, localDtFormat).tz(timezone).format('DD.MM.YYYY hh:mm:ss A');
    },
    subtractDays: function(date, days) {
        return moment(date).subtract(days, 'days').format('DD.MM.YYYY');
    }
};
