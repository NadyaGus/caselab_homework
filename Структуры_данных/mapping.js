const numbers = [1, 22, 12, 66, 90, 51, 11];

const developers = [
  {
    id: 1,
    fullName: "Anton Petrov",
    skills: ["HTML", "CSS", "JavaScript", "Git", "React"],
    salary: 1000,
  },
  {
    id: 2,
    fullName: "Ivan Ivanov",
    skills: ["HTML", "CSS", "JavaScript", "Git", "Vue"],
    salary: 950,
  },
  {
    id: 3,
    fullName: "Albert Sidorov",
    skills: ["HTML", "CSS", "JavaScript", "Git", "jQuery"],
    salary: 850,
  },
];

const doubledNumbers = numbers.map((e) => e * 2);
console.log(doubledNumbers);

const middleDevelopers = [];
developers.forEach((developer) => {
    const middle = {...developer};
    middle.salary += 500;
    middle.skills = [...developer.skills, 'TypeScript']

    middleDevelopers.push(middle);
})


// Изменяем middleDevelopers не мутируя developers
console.log(middleDevelopers, developers);
