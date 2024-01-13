/*
UZDUOTIS:
-gaminam pieno kokteilius
-gaunam uzakymu kiek per diena (vienetais)
-gauname vienos porcijos dydi (litrais)
-vienos karves duodamo pieno keikis per diena (litrais)
-reikia rasti, kiek reikia tureti karviu, norint patenkinti visus uzsakymus?
*/

function milk(uzsakymai, porcija, pienoIskarves) {
    //validation
    if(typeof uzsakymai === 'undefined') {
        return 'Error: pirmas parametras nebuvo duotas';
    }
    if(typeof uzsakymai !== 'number') {
        return 'Error: pirmas parametras turi buti skiacius';
    }
    if (!isFinite(uzsakymai)) {
        return `Error: pirmas parametras negali buti ${uzsakymai}`;
    } // atmeta (-)infinity, NaN. Kitokios kabutes
    if (uzsakymai <0) {
        return 'Error: pirmas parametras negali buti neigiamas';
    }
    if (uzsakymai % 1 !== 0) {
        return 'Error: pirmas parametras turi buti sveikasis skaicius';
    }
    if(typeof porcija !== 'number') {
        return 'Error: antras parametras turi buti skiacius';
        
    }
    if(typeof pienoIskarves !== 'number') {
        return 'Error: trecias parametras turi buti skiacius';
        
    }

    //logic
    const reikiaPieno = uzsakymai * porcija;
    const reikiaKarviu = Math.ceil(reikiaPieno / pienoIskarves);
    //return result
    return reikiaKarviu;
}

console.log(milk(10, 0.5, 9), '->', 1);
console.log(milk(100, 0.5, 9), '->', 6);

console.log(milk('', 0.5, -9));
