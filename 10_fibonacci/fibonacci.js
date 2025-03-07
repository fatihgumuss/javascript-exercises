const fibonacci = function(number) {
    if(number < 0)
        return "OOPS"
    if(number <= 2)
        return 1
    let first = 1
    let second = 1
    for(let i = 0;i < number-2; i++){
        let temp = second
        second += first
        first = temp
    }
    return second
};

// Do not edit below this line
module.exports = fibonacci;
