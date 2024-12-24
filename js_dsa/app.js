function aVeryBigSum(ar) {
    // Initialize a variable to store the sum
    let sum = 0;

    // Iterate over the array and add each element to the sum
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    return sum; // Return the total sum
}


const result = aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
console.log(result);