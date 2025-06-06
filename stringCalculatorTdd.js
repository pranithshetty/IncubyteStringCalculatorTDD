function stringCalculatorTdd(str) {
    if (typeof str !== "string") {
        return "Input is not a string";
    }

    if (str === '') {
        return 0;
    }
    
    if (!str.includes(',') && !str.includes('\n')) {
        return Number(str);
    }
}

module.exports = stringCalculatorTdd;