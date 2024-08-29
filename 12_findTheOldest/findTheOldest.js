const getAge = function(yearOfBirth, yearOfDeath) {
    if (!yearOfDeath) yearOfDeath = new Date().getFullYear();
    return yearOfDeath - yearOfBirth;
};

const findTheOldest = function(people) {
    // let age = [];
    // const currentYear = (new Date()).getFullYear();

    // people.forEach((person) => {
    //     if (person.yearOfDeath == null) {
    //         age.push(currentYear - person.yearOfBirth);
    //     } else {
    //         age.push(person.yearOfDeath - person.yearOfBirth);
    //     }
    // })

    // maxAge = Math.max(...age);
    // maxAgeIndex = age.indexOf(maxAge);
    // return people[maxAgeIndex];

    // ------------------------------------------------------------------------------
    // const oldestToYoungest = people.toSorted((firstPerson, secondPerson) => {
    //     getAge(secondPerson.yearOfDeath, secondPerson.yearOfBirth) - 
    //     getAge(firstPerson.yearOfDeath, firstPerson.yearOfBirth)
    // });

    // return oldestToYoungest[0];

    return people.reduce((oldest, current) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        if (currentAge > oldestAge) {
            return current;
        } else {
            return oldest;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
