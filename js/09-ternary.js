/*
TERNARY OPERATOR

klausimas ? teigiama : neigiama
*/

const arLyja = true;

const sketis = arLyja ? 'pasiimk' : 'nereikia';
console.log(sketis);

const skaicius = 4 > 2 ? 'daugiau' : 'ne daugiau';
console.log(skaicius);

let s2 = '';
if (4 < 2) {
    s2 = 'daugiau';
} else {
    s2 = 'ne daugiau'
}
console.log(s2);

let s3 = 'ne daugiau';
if (4 < 2) {
    s3 = 'daugiau';
}
console.log(s3);

/*
Nestintas ternaty
*/

const colorr = 'blue';
const x11 = colorr === 'blue' ? 'Melyna' : 'nezinoma spalva';
console.log(x11);


const color = 'red';
const x1 = color === 'blue' ? 'Melyna' : color === 'red' ? 'Raudona' : 'nezinoma spalva';
console.log(x1);

const color2 = 'blue';
const light = true;
const x2 = color2 === 'blue' ? light ? 'Sviesiai melyna' : 'Melyna' : color === 'red' ? 'Raudona' : 'nezinoma spalva';
console.log(x2);