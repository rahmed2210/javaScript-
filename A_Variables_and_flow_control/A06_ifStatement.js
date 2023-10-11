let temp = 32
let isFreezing = temp <= 32

/*
if ( CONDITION ) {
     CODE TO RUN   
}

() <--  Condition goes inside the parentheses
{}  <-- Code to run goes inside the curly braces (code block)

*/

if (isFreezing) {
    console.log('It is freezing outside')
}

let temp1 = 80
if (temp1 <= 32) {
    console.log('It is freezing outside')
}

if (temp >= 110) {
    console.log('It is way to hot outside')
}


//-----------------------  CHALLENGE   --------------------------------------------------
console.log('\r\n..................((((( Challenge Area ))))).......................\r\n')

let age = 70
// if 7 or under print message about child pricing
// if 65 or older print message about senior discount

if (age <= 65) {
    console.log('You will get a child discount!')
}

if (temp >= 65) {
    console.log('You will get a senior discount!')
}