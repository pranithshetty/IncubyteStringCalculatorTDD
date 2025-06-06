function split(str,delimiter){
    let res = []
    let curr = ""
    for(char of str){
        if(delimiter.includes(char)){
            res.push(curr)
            curr =''
        }else {
            curr+=char
        }
    }
    res.push(curr);
    return res;
}

function stringCalculatorTdd(str) {
    const delimiter = [',','\n']
    if (typeof str !== "string") {
        return "Input is not a string";
    }

    if (str === '') {
        return 0;
    }

    if (!str.includes(',') && !str.includes('\n')) {
        return Number(str);
    }
    const splitNumbers = split(str, delimiter);
    return splitNumbers.reduce((acc, curr)=>acc+=Number(curr),0)

}

module.exports = stringCalculatorTdd;