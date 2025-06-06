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

module.exports = {checkNegative, split};