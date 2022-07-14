// sumToTarget (2)
const sumToTarget = (array, target) => {
    let reminderMap = {}; // object to save all previous reminders of each iteration
    for (let num of array) { // loop through all numbers in the array
        let reminder = target - num; // find the reminder of when the current number is deducted from the target
        if (reminderMap[num]) { // check to see if the current number already exists as a reminder in the object
            return [reminder, num] // if true, then return both the number and it's reminder
        };
        reminderMap[reminder] = true; // else, save the reminder for possible future encounter in the array
    };
    return []; // if there is no possible sum return an 
};


console.log(sumToTarget([7, 3, 5, 2], 10));