function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aliceScore += 1;
        } else if (a[i] < b[i]) {
            bobScore += 1;
        }
        // No points for equal scores
    }
    return [aliceScore, bobScore]; // Return an array
}


let result = compareTriplets([5, 6, 7, 5, 6], [3, 6, 10, 3, 4])
console.log(result)


// function compareTriplets(a, b, scores = { alice: 0, bob: 0 }) {
//     // Ensure the scores object is passed correctly and updated
//     for (let i = 0; i < Math.min(a.length, b.length); i++) {
//         if (a[i] > b[i]) {
//             scores.alice += 1;
//         } else if (a[i] < b[i]) {
//             scores.bob += 1;
//         }
//         // No points for equal scores
//     }
//     return scores; // Return the updated scores object
// }

// // Example usage
// let scores = { alice: 0, bob: 0 };

// scores = compareTriplets([5, 6, 7, 5, 6], [3, 6, 10, 3, 4], scores);
// console.log(scores); // Output: { alice: 4, bob: 1 }

// scores = compareTriplets([8, 9, 10], [10, 9, 8], scores);
// console.log(scores); // Output: { alice: 6, bob: 2 }
