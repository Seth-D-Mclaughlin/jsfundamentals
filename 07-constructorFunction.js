function Person (name, age, canVote){
    this.name = name;
    this.age = age;
    this.canVote = age >= 18;

this.greeting = () => `Hello, my name is ${ this.name }`;
return 'abc'
}

let macyJones = new Person('Macy', 24);
abc = Person('Seth', 24, true);

console.log(macyJones.greeting());
