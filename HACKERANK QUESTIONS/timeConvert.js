// const timeConversion = (s) => {
//   let num = Number(s.substring(0, 2));
//   let ampm = s.substring(8);

//   if (num === 12 && ampm === "PM") {
//     return s.substring(0, 8);
//   } else if (num === 12 && ampm === "AM") {
//     return "00" + s.substring(2, 8);
//   } else if (ampm === "PM") {
//     return num + 12 + s.substring(2, 8);
//   } else if (ampm === "AM") {
//     return s.substring(0, 8);
//   }
// };
// s = "12:21:45AM";
// console.log(timeConversion(s));

// const timeConversion = (s) => {
//   let hours = parseInt(s.substring(0, 2));
//   let ampm = s.substring(8);
//   let minSec = s.substring(2, 8);

//   if (hours === 12 && ampm === "AM") {
//     hours = 0;
//   } else if (hours !== 12 && ampm === "PM") {
//     hours += 12;
//   }

//   return String(hours).padStart(2, "0") + minSec;
// };

const timeConversion = (s) => {
  let hours = parseInt(s.substring(0, 2));
  let ampm = s.slice(-2).toUpperCase();
  let minSec = s.substring(2, 8);

  if (ampm === "AM" && hours === 12) {
    hours = 0;
  } else if (ampm === "PM" && hours !== 12) {
    hours += 12;
  }

  return String(hours).padStart(2, "0") + minSec;
};
s = "04:21:45Pm";
console.log(timeConversion(s));
