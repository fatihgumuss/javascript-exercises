const reverseString = function(string) {
    splited = string.split("");
    reversedArray = splited.reverse()
    reversedString = reversedArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
