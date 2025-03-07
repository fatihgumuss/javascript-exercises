const sumAll = function(firstNum,secondNum) {
    sum = 0;
    if(firstNum < 0 || secondNum < 0 || !(typeof firstNum === "number") || !(typeof secondNum === "number"))
        return "ERROR";
    if(firstNum > secondNum)
    {
        smallerNum = secondNum;
        biggerNum = firstNum;
    }
    else{
        smallerNum = firstNum;
        biggerNum = secondNum;
    }
    for(;smallerNum<=biggerNum;smallerNum++)
    {
        sum += smallerNum;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
