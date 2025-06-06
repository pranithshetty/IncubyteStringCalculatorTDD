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
function checkNegative(arr){
    let negatives = [];
    let sum = 0;
    arr.forEach(element => {
        const num = Number(element);
       
        if(num< 0){
            negatives.push(num)
        } else if(num <= 1000) {
            sum += num
        }
    });

    if(negatives.length) {throw new Error(`Negatives not allowed ${negatives}`)}

    return sum;
    
}

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