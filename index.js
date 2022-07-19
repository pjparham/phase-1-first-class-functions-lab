// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers){
    return (arrayOfDrivers.slice(0,2))
}
const returnLastTwoDrivers = function(arrayOfDrivers){
    return (arrayOfDrivers.slice(-2))
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
   return function x (fare) {
        return fare*multiplier;
    }
}

// const fareDoubler = function(){
//     return createFareMultiplier(2);
// }
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

////


const selectDifferentDrivers = function(arrayOfDrivers, firstTwoOrLastTwo){
    return firstTwoOrLastTwo(arrayOfDrivers);

    // if (firstTwoOrLastTwo === returnFirstTwoDrivers){
    //     return selectingDrivers.slice(0,2)
    // }
    // else if (firstTwoOrLastTwo === returnLastTwoDrivers){
    //     return selectingDrivers.slice(-2)
    // }
}