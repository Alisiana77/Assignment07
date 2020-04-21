/*eslint-env browser*/

//STEP 1

    // let number = window.prompt("Enter your number.");
    // window.console.log(Math.abs(number));


//STEP 2

    // let number = window.prompt("Enter a floating point value.");
    // window.console.log("The round up of your entered number is " + Math.ceil(number));


//STEP 3

    // let number = window.prompt("Enter a floating point value.");
    // window.console.log("The round down of your entered number is " + Math.floor(number));


//STEP 4 **

    let number = window.prompt("Enter five numbers separate them with a comma");
    let arrNmb = number.split(",").map(Number);
    window.console.log(" Max number is: " + Math.max(...arrNmb) + " and Min number is: " + Math.min(...arrNmb));

//STEP 5

    // let number = window.prompt("Enter any number here. ");
    // window.console.log("The square root of the number you input is: " + Math.sqrt(number));