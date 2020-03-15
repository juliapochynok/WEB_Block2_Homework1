
let experiment1 = avgWordLengthCalc("q w e r t y."); // 1.00
let experiment2 = avgWordLengthCalc("The reduce method executes a reducer function."); // 5.57
let experiment3 = avgWordLengthCalc("callback is called, accumulator!"); // 6.75
let experiment4 = avgWordLengthCalc(""); // 0


/**
 * Takes in text and return the number of the average word length
 * 
 * @param {string} givenStr Text message.
 * @return {number} Avarage word length;
 */
function avgWordLengthCalc(givenStr) {
    if (typeof(givenStr) !== 'string') {
        throw (new Error('Uncorrect type of data'));
    }

    let wordsNum = 1;
    let currLength = 0;
    var newWordFlag = false;
    var letters = /^[a-zA-Z]+$/;
    for (var i = 0; i < givenStr.length; i++) {
        if (letters.test(givenStr[i])) {
            currLength += 1;
            if (newWordFlag) {
                wordsNum += 1;
                newWordFlag = false;
            }
        }
        else {
            newWordFlag = true;
        }
      }
    let result = currLength/wordsNum;
    if (result == NaN) { return 0;}
    return result;
}

