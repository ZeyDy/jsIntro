/*
STRINGS (tekstas)

inicijavimo budai:
-viengubos (') kabutes
-dvigubos (") kabutes
-backtick (`)  kabutes  

*/

const kabutes1 = 'Labas';
const kabutes2 = "rytas";

console.log(kabutes1);
console.log(kabutes2);

// Viengubos (') kabutes
const kabutes21 = "Viengubos (') kabutes.";
console.log(kabutes21);
// Dvigubos (") kabutes
const kabutes12 = 'Dvigunos (") kabutes.';
console.log(kabutes12);
// Viengubos (`) kabutes ir Dvigubos (") kabutes
const kabutes2e = "Viengubos (') ir dvigubos (\") kabutes.";
console.log(kabutes2e);

const backslash = 'tekste \\';
console.log(backslash);

const vardas = 'Vardenis';
const pavarde = 'Pavardenis';
const fullName = vardas + ' ' + pavarde;
console.log(fullName);

// \n - enter
// \t - TAB
const HTML = '<header>\n\
                <img src="# " alt="logo" class="logo">\n\
                <nav>\n\
                    <a href="# ">Link</a>\n\
                    <a href="# ">Link</a>\n\
                    <a href="# ">Link</a>\n\
                    <a href="# ">Link</a>\n\
                </nav>\n\
            </header>';
console.log(HTML);

const imgSrc = './img/logo.png'
const HTMLL = '<header>\n\
                <img src="' + imgSrc + '" alt="logo" class="logo">\n\
                <nav>\n\
                    <a href="# ">Link</a>\n\
                    <a href="# ">Link</a>\n\
                    <a href="# ">Link</a>\n\
                    <a href="# ">Link</a>\n\
                </nav>\n\
            </header>';
console.log(HTMLL);

const HTMLbacktick = `<header>\n\
                <img src="${imgSrc}" alt="logo" class="logo">\n\
                <nav>\n\
                    <a href="# ">Link</a>\n\
                    <a href="# ">Link</a>\n\
                    <a href="# ">Link</a>\n\
                    <a href="# ">Link</a>\n\
                </nav>\n\
            </header>`;
console.log(HTMLbacktick);

const hi = 'Good';
const hiSize = hi.length;
console.log(hiSize);