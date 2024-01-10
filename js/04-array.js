/*
ARRAy
 array metodai:
 - .push() - prideti i gala nauja reiksme
 - .unshift() - prideti i prieki nauja reiksme
 - .pop() - isimti is galo (paskutini)
 - .shift() - isimti is priekio (pirmaji)
*/

const marks = [10, 2, 8, 4];
console.log(marks);

const firstmark = marks[0];
console.log(firstmark);

const size = marks.length;
const last = marks[size - 1];

const dictionary = ['labas', 'rytas', 'tau', 'sakau'];
const paskutinisZodis = dictionary[dictionary.length - 1];

const abc = ['b', 'c'];
console.log(abc);

abc.push('d');
console.log(abc);

abc.shift();
console.log(abc);

abc.pop();
console.log(abc);

abc.unshift('a');
console.log(abc);

console.log(abc.reverse());

console.log(['a', 'b'].concat(['c', 'd']));

const a1 = ['a', 'b'];
const a2 = ['c', 'd'];
const a12 = a1.concat(a2);
console.log(a12);

const modern1 = [...a1, ...a2];
console.log(modern1);
