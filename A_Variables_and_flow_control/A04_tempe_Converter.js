
// convert temperature from fahrenheit to celsius

let fahrenheit = 32  // 0c - 273.15k
let fahrenheit1 = 50

console.log('\r\n.................. celsius .......................\r\n')
// calculate celsius and store in celsius variable
//               T(°C) = (T(°F) - 32) × 5/9   ---> formula

let celsius = (fahrenheit - 32) * 5 /9
let celsius1 = (fahrenheit1 - 32) * 5 /9

// print that value
console.log(celsius)
console.log(celsius1)


console.log('\r\n.................. kelvin .......................\r\n')
// calculate kelvin value and store in variable
//        T(K) = (T(°F) + 459.67) × 5/9  ---> formula

let kelvin = (fahrenheit + 459.67) * 5 / 9
let kelvin1 = (fahrenheit1 + 459.67) * 5 / 9
// print that value
console.log(kelvin)
console.log(kelvin1)