/**
 * You have an odd arry (array with odd numbers). [1, 3, 5, 7, 9].
 * Now convert this array into even number (array with even numbers). [2, 4, 6, 8, 10].
 * Do this using for loop & array.map() method. HInts: add one to any odd number and it will 
 * become an even number.
 * */ 

// using map
const oddNumbers = [1, 3, 5, 7, 9];
const evenArray = oddNumbers.map( n => n + 1)
console.log(evenArray)


// using for of
const eventNumbers = [];
for ( const num of oddNumbers){
    const newEven = num + 1;
    eventNumbers.push(newEven)
}
console.log(eventNumbers)