const names = ['Mikhail', 'Ivan', 'Albert', 'John', 'Ian', 'Petr', 'Alexandr', 'Oleg', 'Jaroslav', 'Vsevolod'];

const products = [
    {
        id: 1,
        name: 'Intro to JavaScript',
        category: 'books',
        price: 150,
    },
    {
        id: 2,
        name: 'Intro to CSS',
        category: 'books',
        price: 120,
    },
    {
        id: 3,
        name: 'Deep dive into JavaScript',
        category: 'books',
        price: 350,
    },
    {
        id: 4,
        name: 'Intro to PHP',
        category: 'books',
        price: 250,
    },
    {
        id: 5,
        name: 'Deep dive into PHP',
        category: 'books',
        price: 350,
    },
];

const developers = [
    {
        id: 1,
        fullName: 'Ivan Ivanov',
        skills: ['HTML', 'CSS', 'Git', 'Gulp', 'Pug']
    },
    {
        id: 2,
        fullName: 'Petr Petrov',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'npm']
    },
    {
        id: 3,
        fullName: 'Ian Melnikov',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript']
    }
]

const shortNames = names.filter((name) => name.length < 5);
console.log(shortNames);

const cheapProducts = products.filter((product) => product.price < 300);
console.log(cheapProducts);

const tsDevelopers = developers.filter((developer) => developer.skills.includes('TypeScript'));
console.log(tsDevelopers);