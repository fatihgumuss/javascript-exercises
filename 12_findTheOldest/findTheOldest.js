const findTheOldest = function(people) {
    const oldestPerson = people.sort((a,b) => {
        let aAge = 0
        if(!a.yearOfDeath)
            aAge = new Date().getFullYear() - a.yearOfBirth
        else
            aAge = a.yearOfDeath - a.yearOfBirth
        let bAge = 0
        console.log(aAge)
        if(!b.yearOfDeath)
            bAge = new Date().getFullYear() - b.yearOfBirth
        else
            bAge = b.yearOfDeath - b.yearOfBirth
        console.log(bAge)
        return aAge - bAge
    })
    return oldestPerson.reverse()[0]
};

// Do not edit below this line
module.exports = findTheOldest;
