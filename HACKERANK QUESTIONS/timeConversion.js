// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
// s = '12:01:00PM'

// Return '12:01:00'.

// s = '12:01:00AM'
// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in 12 hour format
// Returns

// string: the time in 24 hour format

const timeConversion = (str) => {
  let ampm = str.substring(str.length - 2);
  let firstPart = str.substring(0, 2);

  if (ampm === "PM" && firstPart === "12") {
    return str.substring(0, str.length - 2);
  } else if (ampm === "PM" && firstPart !== "12") {
    return Number(firstPart) + 12 + str.substring(2, str.length - 2);
  } else if (ampm === "AM" && firstPart === "12") {
    return "00" + str.substring(2, str.length - 2);
  } else if (ampm === "AM" && firstPart !== "12") {
    return str.substring(0, str.length - 2);
  } else {
    return "Invalid input";
  }
};

s = "02:10:00PM";
console.log(timeConversion(s));
