// Global  (rubal)(-parents)
    // Local (zayn)(-child)
        // Local (-grandchild)
    // Local (-child)
    console.log('\r\n --->  Example 0 ')
let name = 'Rubal'

if (true) {
    let name = 'Shan'
 //   console.log(name)
    if (true) {
        name = 'Zayn'
        console.log(name)
    }
} 
// this is know as variable shadowing in javaScript  
//   --> it's when a variable in a local scope uses its value instead of 
//        variable in a parent scope
if (true) {
    console.log(name)
}

console.log('\r\n --->  Example 1  ')
if (true) {
    
    if (true) {
        name1 = 'Zayn'
        console.log(name1)
    }
} 
if (true) {
    console.log(name1)
}

// This is referred to as leaked global when we assign a value to a variable,
// but that variable was never explicitly defined
// in this case, we have a new global name

// so always make sure that you use let to create a variable if you're going to be using it
//  throughout your program



console.log('\r\n --->  Example 1  ')
if (true) {
    
    if (true) {
       let name1 = 'Zayn'
        console.log(name1)
    }
} 
if (true) {
    console.log(name1)
}




/* 
if (true) {
    if (true) {

    }
}

if (true) {
    
}
*/