var person = {
    name: 'Kyle',
    age: 24,
    hobbies: ['gaming', 'cooking']
};
var activites;
// any[] type is a catch-all. Don't use it too often! Otherwise, what's the point of using TS?
activites = ['sleeping'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
