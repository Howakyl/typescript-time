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
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 5] = "READ_ONLY";
    Role[Role["AUTHOR"] = 6] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Kyle',
    age: 24,
    hobbies: ['gaming', 'cooking'],
    role: Role.ADMIN
};
var activites;
// any[] type is a catch-all. Don't use it too often! Otherwise, what's the point of using TS?
activites = ['sleeping'];
console.log(person);
console.log("role is: ", person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) This would error! This is a great example of why to use TS
}
