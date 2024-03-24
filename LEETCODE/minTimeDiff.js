// 539. Minimum Time Difference
// Medium
// Topics
// Companies
// Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.

// Example 1:

// Input: timePoints = ["23:59","00:00"]
// Output: 1
// Example 2:

// Input: timePoints = ["00:00","23:59","00:00"]
// Output: 0

// Constraints:

// 2 <= timePoints.length <= 2 * 104
// timePoints[i] is in the format "HH:MM".

function findMinDifference(timePoints) {
    // Function to convert time points to minutes
    const toMinutes = (time) => {
        const [hours, minutes] = time.split(':');
        return parseInt(hours) * 60 + parseInt(minutes);
    };

    // Convert time points to minutes
    const minutes = timePoints.map(toMinutes);
    minutes.sort((a, b) => a - b);

    // Find the minimum difference between adjacent time points
    let minDiff = Infinity;
    for (let i = 0; i < minutes.length - 1; i++) {
        minDiff = Math.min(minDiff, minutes[i + 1] - minutes[i]);
    }

    // Consider the circular nature of the clock
    minDiff = Math.min(minDiff, 1440 - (minutes[minutes.length - 1] - minutes[0]));

    return minDiff;
}

// Test cases
const timePoints1 = ["23:59", "00:00"];
console.log(findMinDifference(timePoints1)); // Output: 1

// const timePoints2 = ["00:00", "23:59", "00:00"];
// console.log(findMinDifference(timePoints2)); // Output: 0



