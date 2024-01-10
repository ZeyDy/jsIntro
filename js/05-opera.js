const w1 = 'labas';
const w2 = 'rytas';
const w3 = 'tau';

const sakinys = w1 + ' ' + w2 + ' ' + w3;
console.log(sakinys);
//arba
const sakinys2 = `${w1} ${w2} ${w3}`;
console.log(sakinys2);

const x = [10, 4, 4, 5, 8];
const alternuojantiSuma = x[0] - x[1] + x[2] - x[3] + x[4];
console.log(alternuojantiSuma);

const d = [w1, w2, w3];
const sak = `${d[2]}, ${d[1]}, ${d[0]}`;
console.log(sak);

// dr - d array recersed
const dr = d.reverse();
console.log(dr);

const sakinys5 = dr.join(', ');
console.log(sakinys5);