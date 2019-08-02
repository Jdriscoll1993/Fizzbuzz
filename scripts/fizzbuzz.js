//------------------------------------------------------//

//            !FIZZ BUZZ!

// APRIL 2019

for (let i = 1; i < 101; i++) {
    if (i % 35 === 0) console.log("chickenmonkey");
    else if (i % 7 === 0) console.log("monkey");
    else if (i % 5 === 0) console.log("chicken");
    else console.log(i);
}

//------------------------------------------------------//

// APRIL 2019

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

// AUGUST 2019
for(let i = 1; i < 101; i++){
    if(i % 15 === 0){
        console.log("fizzbuzz");
    } else if(i % 5 === 0){
        console.log("buzz");
    } else if(i % 3 === 0){
        console.log("fizz");
    }else{
        console.log(`${i}`);
    }
}

//------------------------------------------------------//

// AUGUST 2019

for(let i = 0; i < 100;)
    console.log((++i % 3 ? '' : 'fizz')+(i % 5 ? '' : 'buzz')||i);