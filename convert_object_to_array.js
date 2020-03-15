

let experiment1 = toArray({ "1": 500, "2": 15, "5": 4, "4": 480, "10": 87 });
let experiment2 = toArray({key1: 'value1', key2: 'value2'});
let experiment3 = toArray({});

/**
 * Converts an object into array
 * 
 * @param {object} givenObj Object to convert.
 * @return {Array} array made by converting givenObj;
 */
function toArray(givenObj) {
    if (typeof(givenObj) !== 'object') {
        throw (new Error('Uncorrect type of data'));
    }
    
    let result = Object.entries(givenObj);
    return result;
}


