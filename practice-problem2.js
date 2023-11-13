/**
 * You are given an array say: [33, 50, 79, 78, 90, 101, 30]. Now
 * return/get all the element whic are divisible by 10 using 
 * array.filter() method
 * 
 * now do the same task of question 2, But do this using array.find() method
 * then compare the output of question 2 & 3
 * */ 

// using array.filter() method
const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 = numbers.filter(num => num % 10 === 0);
console.log(divisibleBy10);

// using array.find() method 
const newDevisibleBy10 = numbers.find(num => num % 10 === 0);
console.log(newDevisibleBy10)