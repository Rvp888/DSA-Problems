
// Problem: 
// Given an array of users (objects), sort them according to their last names. 

// Example:
// const users = [
//     {
//         firstName: 'Rohan',
//         lastName: 'Palankar'
//     },
//     {
//         firstName: 'Abhi',
//         lastName: 'Anvekar'
//     },
//     {
//         firstName: 'Aditya',
//         lastName: 'Revankar'
//     },
//     {
//         firstName: 'Rahul',
//         lastName: 'Bhat'
//     }
// ]

// Ans:    [
//             {
//                 firstName: 'Abhi',
//                 lastName: 'Anvekar'     
//             },
//             {
//                 firstName: 'Rahul',
//                 lastName: 'Bhat'
//             },
//             {
//                 firstName: 'Rohan',
//                 lastName: 'Palankar'
//             },
//             {
//                 firstName: 'Aditya',
//                 lastName: 'Revankar'
//             }
//         ]


function sortUsers(userArr) {
    userArr.sort((a,b) => {
        if(a.lastName < b.lastName) {
            return -1;
        }
        else if(a.lastName > b.lastName) {
            return 1;
        }
    })
    return userArr;
}

console.log(sortUsers(users));