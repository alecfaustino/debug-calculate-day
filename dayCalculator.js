function calculateDayInYear(date) {
  const splitDate = date.split('/'); // is an array of the input
  // the format is YYYY/MM/DD
  const year = Number(splitDate[0]);
  const month = Number(splitDate[1]);
  const day = Number(splitDate[2]);

  // will check if a number like 13 is inputted
  // was correctly implemented
  const validMonth = function(month) {
    return month && month >= 1 && month <= 12;
  }

  //check leapYear
  const isLeapYear = function(year) {
    return (isMultiple(year, 4) && !isMultiple(year, 100)) || isMultiple(year, 400);
  }
  
  const daysInFeb = function(year) {
    // if it is, 29. if it is not, 28.
    return isLeapYear(year) ? 29 : 28;
  }

  const DAYS_IN_MONTH = [31, daysInFeb(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // now fixed
  const validDay = function(month, day) {
    return day && day >= 1 && day <= DAYS_IN_MONTH[month - 1]; // month - 1 because 0 indexed array. 
  }
  
  const calculateDayNumber = function(month, day) {
    // should automatically count the days we input 
    let dayOfYear = day;
    // looping through 
    // January is DAYS_IN_MONTH[0]
    for (let i = 1; i < month; i++) {
      dayOfYear += DAYS_IN_MONTH[i - 1];
    }
    
    return dayOfYear;
  }

  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
    return calculateDayNumber(month, day);
  } else {
    console.log("Invalid date");
  }
}

const isMultiple = function(numerator, denominator) {
  return numerator % denominator === 0;
}

/*
    Below are some simple tests!

    They run the function with a predetermined parameter and compare the output to the value we are expecting to get!

    The console.log will output either 'true' or 'false' based on whether or not the function
    returns a value that matched our expected value.

    You'll know your code works correctly when all of these tests return 'true'.
*/
console.log("Tests:");
console.log("---------------");
console.log(calculateDayInYear("1900/3/2") === 61);
console.log(calculateDayInYear("2000/3/2") === 62);
console.log(calculateDayInYear("2012/2/29") === 60);
console.log(calculateDayInYear("2015/12/31") === 365);