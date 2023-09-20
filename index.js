/* const moment  = require('moment');

setInterval(() => {
  const time = moment().format();
  console.log(`Hozirgi vaqt ${time}`);
}, 5000); */



// inquirer package - eng ko'p ishlatiladigan package bu bizga terminal bn bog'liq kiritish chiqarish. Bugungi misolda user input qilishi uchun ishlatamiz!
/* const inquirer = require('inquirer');
inquirer
.prompt([{type: 'input', name: 'raqam', message: 'raqamni kiriting? '}])
.then((answer) => {
  console.log('Men kiritgan raqamning qiymati:', answer.raqam);
})
.catch ((err) =>console.log(err)); */



/* //validator package - bu malumotlarni validat qilib beradi. Install qilamiz
const validator = require('validator');
//const test = validator.isEmail('foo@bar.com');
//const test = validator.isInt('100');// integerni tekshiradi
const test = validator.isIP('121.139.161.'); //ipni tekshiradi
console.log('test', test); // bu aynan emailimizni @ belgisi borligini va .com bo'lishini tekshiradi. Buni tekshirish uchun algoratim yozib o'tirmasdan shuni tayyor ishlatish mumkin */


/* const { v4: uuidv4 } = require('uuid'); // Random identifier yaratib beradinpm
const random = uuidv4();
console.log("random:", random);//bb8ea8ae-ccf7-4445-9f25-774c942b6fa4 */

const { v4: uuidv4 } = require('uuid');
const random = uuidv4();
console.log("random:", random);

const chalk = require ('chalk');
const log = console.log;

log(chalk.red(`uuid creates ${random}`)); //rangini o'zgartirib beradi