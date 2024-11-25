Assignment #4 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.

interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

function isLegal(user: User): boolean {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}