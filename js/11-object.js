/*
Objektas: key-value poru rinkinys (raktazodziai-reiksme)
*/

const petras = {
    name: 'Petras',
    age: 99,
    color: 'blue',
    'likes banana': true //kaip variantas

};
const maryte = {
    name: 'Maryte',
    age: 88,
    color: 'red'
};
console.log(petras);
console.log(petras.age);
console.log(petras["likes banana"]);

const gyventojai = [petras, maryte];
console.log(gyventojai[1]);

const batas = {
    name: 'kaliosas',
    color: 'red',
    pricing: [
        {
            country: 'Lt',
            price: 99
        },
        {
            country: 'lv',
            price: 88
        },
        {
            country: 'eu',
            price: 77
        },
    ]
}
console.log(batas.pricing[0]);
console.log(batas.pricing[1]);
console.log(batas.pricing[2]);

const kepure = {
    name: 'skrybele',
    color: 'white',
    pricing: {
        lt: 99,
        lv: 88,
        eu: 77
    }
}
console.log(kepure.pricing.lt);