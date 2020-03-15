
let experiment1 = maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]); // 43
let experiment2 = maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]);   // 100
let experiment3 = maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);    // 40

/**
 * Finds the maximum possible total made by summing 5 of the 10 numbers
 * 
 * @param {Array} givenArr Array of 10 numbers.
 * @return {number} Maximum possible total;
 */
function maxTotal(givenArr) {
    if (!Array.isArray(givenArr)) {
        throw (new Error('Uncorrect type of data'));
    }
    let result = 0;
    givenArr.sort(compare);
    for (i = 0; i < 5; i++) {
        result += givenArr[9 - i]
    }
    return result;
}

/**
 * Calculate difference between two numbers
 * 
 * @param {number} numOne First number.
 * @param {number} numTwo Second number.
 * @return {number} Difference between numbers;
 */
function compare(numOne, numTwo) {
    return numOne - numTwo;
}

