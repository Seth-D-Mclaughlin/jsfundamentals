let coffee = ['espresso', 'nitro cold brew', 'americano', 'frappuccino'];

console.log(coffee[2]);

let verybest = coffee.pop();

console.log(verybest);

console.log(coffee);

coffee.push('latte', 'decaf');

console.log(coffee);

// Stack(LIFO) stack of pancakes
// Array.pop();
// Array.push(<item>);

//Queue (FIFO) line for a roller coaster
// Array.shift();
// Array.unshift(<item>);

let firstItem = coffee.shift();
console.log(firstItem);
console.log(coffee);

coffee.unshift('instant', 'drip');
console.log(coffee);


console.log(coffee.indexOf('cappuccino'));

// If indexof returns something other than -1, keep looking but keep the number that comes back
coffee.forEach((item) => {
    console.log(item.length);
});

function forEach(callbackfn){
    
}