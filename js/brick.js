/*
UZDUOTIS:
-gaunam, kiek sienu turi namas
-gaunam, kokio plocio yra kiekviena siena (metrais)
-sienos neturi angu ir/ar skyliu
-gaunam sienos auksti, kuris visur yra vienodas
-turim plytos dydi (aukstis ir plotis) (metrais)
-reikia suzinoti, keliu plytu mums reikes, jei plytu skaldyti negalima
*/
// Math.floor(5.99999) -> ats: 5, apvalina i apacia iki sveiko skaicio
// Math.ceil(8.00323)  -> ats: 9, apvalina i virsu 
// Math.round(7.49999) -> ats: 7, apvalina < 0.5 i apacia, jei >= 0.5 i virsu

function bricks(sienuPlociai, sienosAukstis, plytosAukstis, plytosPlotis) {
    let bendrasSienuPlotis = 0;
    for (let i=0; i<sienuPlociai.length; i++) {
    const sienosPlotis = sienuPlociai[i];
    bendrasSienuPlotis += sienosPlotis;
    }
    const plytuAukstyje = Math.ceil(sienosAukstis / plytosAukstis);
    const plutuPlotyje = Math.ceil(bendrasSienuPlotis / plytosPlotis);
    const plytuKiekis = plytuAukstyje * plutuPlotyje;
    return plytuKiekis;
}

console.log(bricks([1, 2], 1, 0.1, 0.2), '->', 150);
console.log(bricks([1, 1, 1], 1, 0.1, 0.2), '->', 150);
console.log(bricks([2, 1, 3], 0.5, 0.1, 0.2), '->', 150);
console.log(bricks([1], 1, 0.1, 0.2), '->', 50);
console.log(bricks([1.05], 1.05 , 0.1, 0.2), '->', 66);

