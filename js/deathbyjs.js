/*eslint-env browser*/

//STEP 1

// function order1() {
//     "use Strict";
//     let text = window.prompt("Enter a string of texts.");
//     window.console.log(text.match(/\w/g).sort());
// }
// order1();

//STEP 2 

// function order2() {
// let text = window.prompt("Enter text in all lower case.");
// let words = text.split(" ");
// for (i = 0; i < words.length; i++) {
//     words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1).toLowerCase();
// }

// text = words.join(" ");
// window.console.log(text);
// }
// order2();

//STEP 3

// function order3() {

//     "use strict";
//     let text = window.prompt("Enter a string:");
//     let res = text.match(/[aeiouAEIOU]/g);
//     window.console.log(
//        text +   " has " + res.length + " vowels."
//     );

// }
// order3();



//STEP 4

// function pswdGen() {
//     "use strict";
//     let keys = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     let keysNum = 10;
//     let password =  Math.random().toString(36).slice(-8);
//     for (let i = 0; i <= keysNum; i++ ) {
//         let rpswd = Math.floor(Math.random() * keys.length);
//         password += keys.substring(rpswd,rpswd+1);

//     }
//     window.console.log(password);
// }
// pswdGen();

//STEP 5

function Longest_Country_Name() {
    "use strict";
    let arr = window.prompt("Enter 3 country names to find the longest name, separate with comma").split(",");
    let lgth = 0;
    let longest;

    for(var i=0; i < arr.length; i++){
        if(arr[i].length > lgth){
             lgth = arr[i].length;
            longest = arr[i];
        }      
    } 

    window.console.log("The longest country name is: " + longest);
    
 }
Longest_Country_Name();

