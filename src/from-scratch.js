// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr, arrSum = 0, index = 0) => {
    if (index === arr.length) return arrSum
    return sum(arr, arrSum + arr[index], index + 1)
}

/**
 * sum 0, index 0
 * sum 1, index 1
 * sum 3, index 2
 * sum 6, index 3
 * sum 16, index 4
 * 
 */

// Reverse string using recursive approach
const reverse = (str) => {
    if (str.length === 1) return str
    // if the string has only one letter then return the str 
    return reverse(str.substring(1)) + str[0];
    // return the 
}


// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
    if (n === 0) return 0
    let first = 0
    let second = 1
    let fib = first + second

    for (let i = 2; i < n; i++) {
        first = second
        second = fib
        fib = first + second
    }

    return fib

};

// Recursive fibonacci
// Recursive fibonacci
// current = prev + prev-prev
//fib(5) = fib(4) + fib(3)
//fib(4) = fib(3) + fib(2)
//fib(3) = fib(2) + fib(1)
//fib(2) = fib(1) + fib(0)
// fib(1) = fib(0) + fib(-1) → -1
//fib(0) = fib(-1) + fip(-2)
const fibRec = (n) => {
    //base case: n <= 1 return n if (n <= 1) return n;
    if (n <= 1) return n
    // recursive case
    return fibRec(n - 1) + fibRec(n - 2);
}

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    // if target is not in array we need base case
    if (start > end) return -1
    // find the middle index
    let middleIndex = Math.floor((start + end) / 2)
    // if middle index is not the target 
    if (arr[middleIndex] === target) return middleIndex
    // check if the middle index is less than the target 
    if (arr[middleIndex] > target) {
        // call the function recursively on the left side of array 
        return binarySearch(arr, target, start, middleIndex - 1)
    } else {
        // call the function recursively on the middle index and the last index 
        return binarySearch(arr, target, middleIndex + 1, end)
    }
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };








