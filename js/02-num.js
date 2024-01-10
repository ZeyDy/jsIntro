/*
NUMBERS: 
teigiami, neigiami, +0, -0
desimtainiai, sveikieji
tikri, +begalybes, -begalybes, NaN
*/

const teigiamas = 5;
const neigimas = -8;
const nulis = 0;
const nulisMinus = -0;
console.log(nulis, nulisMinus);

const desimtainis = 3.874376498;
console.log(desimtainis);

const begalybe = Infinity;
console.log(Infinity);

const nesamone = NaN;
console.log(nesamone);

const puseZodzio = `labas` / 2;
console.log(puseZodzio); 
// ats: NaN nes meginom suskaiciuoti nesamone(zodi padalinti is dvieju)
const angle = 30;
const sin30 = Math.sin(angle / 180 * Math.PI)

console.log(Math.sqrt(81));  // kvadratine saknis

console.log(Math.pow(2, 3));  // kelimas laipsniu

console.log(17 % 5);  // liekana

