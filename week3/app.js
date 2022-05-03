const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
    return 'Up, up and away!';
    }
    };
    console.log(superman.name, superman.allies[0], superman.fly());
    superman.name = 'Ulises Martinez';
    console.log(superman.name);
    //--------------------------------------------
    //declaring an object
    const name = 'ulises';
    const RealName = 'Ulises';
    const person = {name, RealName};
    console.log(person.name, person.RealName);
    
    //--------------------------------------------
    const hulk = { name: 'Hulk', ['catch' + 'Phrase']: 'Hulk Smash!' };
    console.log(hulk.catchPhrase);
    //--------------------------------------------
    function greet({greeting='Hello',name,age=18}) {
        return `${greeting}! My name is ${name} and I am ${age} years old.`;
        }
    console.log(greet({name:'Ulises',age:22}));
    //--------------------------------------------
    //This object
    const cats = {
        amount: 6,
        countThem(){
            return Math.ceil(this.amount * Math.random());
        }
    }
    console.log(cats.countThem());
    //--------------------------------------------
    