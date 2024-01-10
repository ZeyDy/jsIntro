/*
IF - salygos sakinys

OPERATORIAI:
visi: >, <, >=, <=, ==, !=(nelygu), ===, !==
nenaudotini: ==, !=
naudotini: >, <, >=, <=, ==, !=(nelygu)

SABLONAI:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else {} ... else if () {}
if () {} else {} ... else if () {} else {}
*/

if (4 <= 2) {
    console.log('taip');
} else {
    console.log('ne');
}


const akys = 'zalio';

if (akys === 'melynos') {
    console.log('Melynakis');
} else if (akys === 'zalios') {
    console.log('Zaliaakis');
} else if (akys === 'rudos') {
    console.log('Rudaakis');
} else {
    console.log('Neatpazinta spalva');
}


const parosMetas = 'sadf';

if (parosMetas === 'rytas') {
    console.log('Labas rytas');
} else {
    if (parosMetas === 'diena'){
        console.log('Laba diena');
    } else {
        if (parosMetas === 'vakaras') {
            console.log('Labas vakaras');
        } else {
            console.log('Neatpazintas paros laikas');
        }
    }
}