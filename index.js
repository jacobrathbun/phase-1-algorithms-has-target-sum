function hasTargetSum(array, target) {
  const read = new Set();
  for (const num of array) {
    const goalDifference = target - num;
    if (read.has(goalDifference)) {
      return true;
    }
    read.add(num);
  }
  return false;
}

/* 
  O(n) - it only loops through single array one time
*/

/* 
  function hasTargetSum(array, target)
    read = new set
    for num in array
      goalDifference = target - num
      if goalDifference is in read
        return true
      add num to read
    return false
*/

/*
  -The function creates and empty array for all read 
  numbers to be added
  -loop iterates through the passed in array
  -formula determines if there is a sum of numbers in it by
  subtracting current read number from target number
  -boolean determines if formula number is in the read array
  -returns value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
