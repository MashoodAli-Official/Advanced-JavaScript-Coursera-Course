// The Switch Statement
// The switch statement is used to perform different actions based on different conditions.
// We can select the one of the many options using switch statement.

function getItem(item){
    switch (item){
        case 'Harry Potter':
            console.log("You are a wizard.");
            break;
        case 'Hermione Granger':
            console.log("You are a witch.");
            break;
        case 'Ron Weasley':
            console.log("You are a wizard.");
            break;
        default:
            console.log("You are not a wizard or witch.");
    }
    return item;
}
getItem('Harry Potter'); // You are a wizard.