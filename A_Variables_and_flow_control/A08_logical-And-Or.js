console.log('\r\n --->  Example 1  AND Operator')

// Logical And Operator   -- True if both side are true. False otherwise

let temp = 65

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
}


console.log('\r\n --->  Example 2  OR Operator')

// Logical Or Operator   -- True if least one side is true. False otherwise

let temp2 = 150
if (temp2 <= 0 || temp2 >= 120) {
    console.log('Do not go outside')
}


console.log('\r\n --->  Example 3  AND-OR Operator')
// Logical AND - OR Operator
let temp3 = 150
if (temp3 >= 60 && temp3 <= 90) {
    console.log('It is pretty nice out')
} else if (temp3 <= 0 || temp3 >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do what you want')
}

//-------------------------------------

let temp33 = 55
if (temp33 >= 60 && temp33 <= 90) {
    console.log('It is pretty nice out')
} else if (temp33 <= 0 || temp33 >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do what you want')
}


//-----------------------  CHALLENGE   --------------------------------------------------
console.log('\r\n..................((((( Challenge Area ))))).......................\r\n')

console.log('\r\n --->  Example 0')
// are both vegan --> only offer up vegan dishes
// at least one vegan  --> Make sure to offer up some vegan options
// else, offer anything on the menu


let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options')
} else {
    console.log('Offer anything on the menu')
}

//-------------------------------------
console.log('\r\n --->  Example 1')
let isGuestOneVegan1 = true
let isGuestTwoVegan1 = true

if (isGuestOneVegan1 && isGuestTwoVegan1) {
    console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan1 || isGuestTwoVegan1) {
    console.log('Make sure to offer up some vegan options')
} else {
    console.log('Offer anything on the menu')
}

//-------------------------------------
console.log('\r\n --->  Example 2')
let isGuestOneVegan2 = false
let isGuestTwoVegan2 = false

if (isGuestOneVegan2 && isGuestTwoVegan2) {
    console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan2 || isGuestTwoVegan2) {
    console.log('Make sure to offer up some vegan options')
} else {
    console.log('Offer anything on the menu')
}