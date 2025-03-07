const palindromes = function (string) {
    string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
    return string.replace(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toUpperCase() == string.replace(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toUpperCase().split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
