
// Problem: 
// Given an array of users (objects), sort them according to their last names. 
// a. increasing order
// b. decreasing order

// Example:
const users = [
    {
        firstName: 'Rohan',
        lastName: 'Palankar'
    },
    {
        firstName: 'Abhi',
        lastName: 'Anvekar'
    },
    {
        firstName: 'Aditya',
        lastName: 'Revankar'
    },
    {
        firstName: 'Rahul',
        lastName: 'Bhat'
    }
]

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


function sortUsers_1(userArr) {
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

console.log(sortUsers_1(users));


// function sortUsers_2(userArr) {
//     userArr.sort((a,b) => {
//         if(a.lastName < b.lastName) {
//             return 1;
//         }
//         else if(a.lastName > b.lastName) {
//             return -1;
//         }
//     })
//     return userArr;
// }

// console.log(sortUsers_2(users));