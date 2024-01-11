/* 
Automobilis:
-kuro kiekis
-kuro sanaudos
-norimas nuvaziuoti atstumas

Ar pavyks nuvaziuoti norima atstuma su turimu kuro kiekiu?
*/

function candrive(kiekis, sanaudos, atstumas) {
    const imanomasNuvaziuotiAtstumas = kiekis / sanaudos * 100;
    if(imanomasNuvaziuotiAtstumas >= atstumas) {
        return true;
    }
    return false;
}


const try1 = candrive(20, 5, 400);
console.log(try1);

const kurokiekis = 20;
const kurosanaudos = 3;
const nuvaziuotasAtstumas = kurokiekis / kurosanaudos * 100;
console.log(nuvaziuotasAtstumas);
if (nuvaziuotasAtstumas <= 400) {
    console.log('True');
} else {
    console.log('False');
}