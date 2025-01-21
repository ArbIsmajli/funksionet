let vitilindjes = prompt("shkruaj vitin e lindjes");

function kalkulomoshen(vlera) {
    let rezultati =(2025 - vlera);
    return rezultati; //24
}
let mosha = kalkulomoshen(vitilindjes);
console.log("variabla mosha" + mosha);

console.log(kalkulomoshen(vitilindjes))

// gjeje numrin ma te madh
function numrimeimadh(numri1, numri2) {
    if (numri1 > numri2) {
        return numri1;
    } else if (numri1 == numri2) {
        return "numrat jane te barabart";
    } else {
        return numri2;
    }
}
console.log(numrimeimadh(14, 15));
// repeat a word - pa return

function repeatword(fjala, numriiperseritjeve) {
    for (let i = 1; i <= numriiperseritjeve; i++) {
        console.log(fjala);
    }
}
repeatword("mirjeta", 15);
repeatword("mirjeta1234", 10);
repeatword("a", 100);
repeatword(12345, 4);
