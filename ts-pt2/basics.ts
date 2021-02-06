const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Kyle',
    age: 24,
    hobbies: ['gaming' , 'cooking'],
    role: [2, 'author']
};

let activites: string[];
// any[] type is a catch-all. Don't use it too often! Otherwise, what's the point of using TS?
activites = ['sleeping'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) This would error! This is a great example of why to use TS
}