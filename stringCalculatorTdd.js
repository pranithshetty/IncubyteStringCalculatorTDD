const {checkNegative, split} = require('./utils');

function stringCalculatorTdd(str) {
    const delimiter = [',','\n'];

    if (typeof str !== "string") {
        return "Input is not a string";
    }

    if (str === '') {
        return 0;
    }

    if(str.startsWith('//')){
        let customDelimeter = str[2]
        delimiter.push(customDelimeter)
        str = str.slice(4)
    }

    const splitNumbers = split(str, delimiter);
   
    try{
       return checkNegative(splitNumbers)
    }catch(err){
        console.error(err.message)
        throw err;
    }

}

module.exports = stringCalculatorTdd;