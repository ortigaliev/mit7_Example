const moment  = require('moment');


setInterval(() => {
  const time = moment().format();
  console.log(`Hozirgi vaqt ${time}`);

}, 5000);