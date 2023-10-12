console.log('\r\n  ---> Example 0')
let isAccountLocked0 = true

if (isAccountLocked0) {
    console.log('Is account locked')
} else {
    console.log('Welcome')
}

/*

if (true) {
    console.log('This code will run')  <-------------------
} else if (true) {
    console.log('this code will not run')
} else {
    console.log('this code will not run')
}

if (false) {
    console.log('this code will not run')
} else if (true) {
    console.log('This code will run')  <-------------------
} else {
    console.log('this code will not run')
}

if (false) {
    console.log('this code will not run')
} else if (false) {
    console.log('this code will not run')
} else {
    console.log('This code will run')   <-------------------
}

*/

console.log('\r\n --->  Example 1 (if, else if, else')
let isAccountLocked1 = false
let userRole1 = 'admin'

if (isAccountLocked1) {
    console.log('is Account locked')
} else if (userRole1 === 'admin') {
    console.log('welcome Admin')
} else {
    console.log('Welcome')
}


console.log('\r\n --->  Example 2 (if, else if, else')
let isAccountLocked2 = false
let userRole2 = 'user'

if (isAccountLocked2) {
    console.log('is Account locked')
} else if (userRole2 === 'admin') {
    console.log('welcome Admin')
} else {
    console.log('Welcome')
}


//-----------------------  CHALLENGE   --------------------------------------------------
console.log('\r\n..................((((( Challenge Area ))))).......................\r\n')


// it is freezing outside
// it is hot outside
// go for it. its is pretty nice

console.log('\r\n --->  Example 0')
let temp = 45

if (temp <= 32) {
    console.log('it is freezing outside')
} else if (temp >= 110) {
    console.log('it is hot outside') 
} else {
    console.log('Go for it. It is pretty nice')
}

//-------------------------------------------------------
console.log('\r\n --->  Example 1')
let temp1 = 450

if (temp1 <= 32) {
    console.log('it is freezing outside')
} else if (temp1 >= 110) {
    console.log('it is hot outside') 
} else {
    console.log('Go for it. It is pretty nice')
}

//-------------------------------------------------------
console.log('\r\n --->  Example 2')
temp2 = 30

if (temp2 <= 32) {
    console.log('it is freezing outside')
} else if (temp2 >= 110) {
    console.log('it is hot outside') 
} else {
    console.log('Go for it. It is pretty nice  ***')
}