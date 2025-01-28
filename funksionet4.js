// function guesstheword (beba) {
//     let fmia = "skanteku"
//     if (fmia == beba) {
//         alert("urime e gjete");
//     } else {
//         alert("nuk e gjete");
//     }
// }
// let fjala = prompt("gjeje fjalen e duhur");
// guesstheword(fjala);
// guesstheword("abcd");

// function A(fjal){
//     for (let i = 0; i < fjal.length; i++) {
//         if (fjal[i] == "a") {
//             return true;
//         }
//     }
// }

// console.log(A("aaafdsf"));
function akanumracift(vargu) {
    for (i = 0; i < vargu.length; i++) {
        if (vargu[i] % 2 == 0) {
            return "ky numer eshte cift";
        }
        else{
            return "ky numer eshte tek"
        }
    }

}

akanumracift([1, 2, 3, 54, 56]);