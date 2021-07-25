#!/usr/bin/env node

let numberList = [];
//create list of numbers
for (i=1;i<101;i++) {
    numberList.push(i)
}
//check list is correctly populated
//console.log(numberList[numberList.length - 1])

numberList = numberList.map(element => {
    if (element % 3 === 0 && element % 5 === 0) {
        element = 'foobar'
        return element
    } else if (element % 5 === 0) {
        element = 'bar'
        return element
    } else if (element % 3 === 0) {
        element = 'foo'
        return element
    } else {
        return element
    }
})

console.log(numberList)