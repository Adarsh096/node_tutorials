// compile using : npx tsc typescript_example1.ts

// type keyword is responsible for declaring our custom type of objects representing users
type User = {
    name: string;
    age: number;
};

function isAdult(user: User): boolean {
return user.age >= 18;
}

const justine: User = {
name: 'Justine',
age: 23,
};

const isJustineAnAdult: boolean = isAdult(justine);

