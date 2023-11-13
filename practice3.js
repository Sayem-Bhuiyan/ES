/**
 * 3) You have an array of objects;
 * const instructor = [
 *      { name: 'Nodi', age: 28, position: 'Senior' }
 *      { name: 'Akil', age: 26, position: 'Juniors' }
 *      { name: 'Shobuj', age: 30, position: 'Senior' }
 *  ]
 * 
 * Your task is to display the instructor names that has the position 
 * senior using filter
 * */

const instructor = [
    { name: 'Nodi', age: 28, position: 'Senior' },
    { name: 'Akil', age: 26, position: 'Juniors' },
    { name: 'Shobuj', age: 30, position: 'Senior' }
]

const findName = instructor.filter(obj => obj.position === 'Senior')
const names = findName.map(n => n.name);
console.log(names);

