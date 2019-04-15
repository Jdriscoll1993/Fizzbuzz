//------------------------------------------------------//

//            !FIZZ BUZZ!


for (let i = 1; i < 101; i++) {
    if (i % 35 === 0) console.log("chickenmonkey");
    else if (i % 7 === 0) console.log("monkey");
    else if (i % 5 === 0) console.log("chicken");
    else console.log(i);
}

//------------------------------------------------------//


for (let i = 1; i < 101; i++) {

    const printMe = i;
    if (i % 7 === 0 && i % 5 === 0) {
        console.log("chickenmonkey");
    } else if (i % 5 === 0) {
        console.log("chicken");
    } else if (i % 7 === 0) {
        console.log("monkey");
    } else console.log(printMe);
} 

//------------------------------------------------------//

