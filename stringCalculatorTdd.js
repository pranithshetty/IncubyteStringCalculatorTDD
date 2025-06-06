function stringCalculatorTdd(str) {
    if (typeof str !== "string") {
        return "Input is not a string";
    }

    if (str === '') {
        return 0;
    }
}

module.exports = stringCalculatorTdd;