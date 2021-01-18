'use strict';

// if (1) {
//     console.log("OK!");
// } else {
//     console.log('Error');
// }

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('More!');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log("false");


let num = '50';


switch (num) {
    case '49': 
        console.log('false');
        break;
    case '100':
        console.log('false');
        break;
    case '50': 
        console.log("You get it!");
        break;
    default:
        console.log("Not in this case");
        break;
}