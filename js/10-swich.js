const akys = 'blue';

switch (akys) {
    case 'blue':
        console.log('Melynos');
        break;

    case 'green':
        console.log('Zalios');
        break;
    
    case 'brown':
        console.log('Rudos');
        break;

    default:
        console.log('Neatpazinta spalva');
        break;
}


const day = 1;

switch (day) {
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: 
        console.log('Darbo diena');
        break;
    case 6: 
    case 7: 
        console.log('Savaitgalis');
        break;
    default:
        console.log('Neatpazinta diena');
        break;
}

if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5 ) {
    console.log('Darbo diena');
} else if (day === 6 || day === 7) {
    console.log('Savaitgalis');
} else {
    console.log('Netapazinta diena');
}

if (day >= 0 && day <6 ) {
    console.log('Darbo diena');
} else if (day >= 6 && day < 7) {
    console.log('Savaitgalis');
} else {
    console.log('Netapazinta diena');
}