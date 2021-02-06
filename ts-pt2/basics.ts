// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Kyle',
//     age: 24,
//     hobbies: ['gaming' , 'cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 5 , AUTHOR = 6};

const person = {
    name: 'Kyle',
    age: 24,
    hobbies: ['gaming' , 'cooking'],
    role: Role.ADMIN
};

let activites: string[];
// any[] type is a catch-all. Don't use it too often! Otherwise, what's the point of using TS?
activites = ['sleeping'];

console.log(person);
console.log("role is: ", person.role)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) This would error! This is a great example of why to use TS
}