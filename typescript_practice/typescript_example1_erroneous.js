// compile using : npx tsc typescript_example1.ts
function isAdult(user) {
    return user.age >= 18;
}
var justine = {
    name: 'Justine',
    age: 'Secret!'
};
var isJustineAnAdult = isAdult(justine, "I shouldn't be here!");
