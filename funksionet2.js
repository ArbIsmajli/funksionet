function mbledh(nr1 = 250, nr2 = 34) {
    // let rezultati = nr1 + nr2;
    // return rezultati;

    // ose

    // return nr1 + nr2;
    console.log(nr1, nr2);
    return nr1 + nr2;
}
// mbledh(100, 13);
// mbledh(5, 3)

function double(nr3 = 3) {
    return nr3 * 2
}
function ngritjekatror(Nr7) {
    return Nr7*Nr7;

}

let arbi = (numri0)=> {
    if (numri0 == 0 || numri0 == 1) {
        return "nuk ki nevoj me ngrit ne fuqi";
    }
    return numri0 * numri0;
}
// menyra e njejte po veq thirret function arrow
function sayhello() {
    console.log("hello");
}
// ose
let sayhello = () => {
    console.log("hello")
}