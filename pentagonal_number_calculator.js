
let experiment1 = pentagonalNumber(1) // 1
let experiment2 = pentagonalNumber(2) // 5
let experiment3 = pentagonalNumber(5) // 35
let experiment4 = pentagonalNumber(9) // 117

/**
 * Returns the number of distinct dots in a pattern *P*n
 * 
 * @param {number} n Upper bound of dots in side.
 * @return {number} Number of distinct dots in a pattern *P*n;
 */
function pentagonalNumber(n) {
    if (typeof(n) !== 'number') {
        throw (new Error('Uncorrect type of data'));
    }

    if (n < 1) {
        throw (new Error(' n must be more or equal to 1'));
    }

    let result = (3 * n*n - n) / 2; // formula of pentagonal number
    return result;
}