var twoSum = function(nums, target) {
    const newNums = [...nums]
    newNums.sort((a,b) => {return a-b})
    while (newNums.length>1) {
        let total=newNums[0] + newNums[newNums.length-1]
        if (total == target){
            if (nums.indexOf(newNums[0]) == nums.indexOf(newNums[newNums.length-1])){
                return [nums.indexOf(newNums[0]), nums.lastIndexOf(newNums[0])]
            }
            return [nums.indexOf(newNums[0]), nums.indexOf(newNums[newNums.length-1])]
        } else if ( total > target) {
            newNums.pop()
        } else {
            newNums.shift()
        }
    }
};

console.log(twoSum([2,7,11,15], 9))
// [0,1]

console.log(twoSum([-3,4,3,90], 0))
// [0,1]

console.log(twoSum([3,2,3], 6))
// [0,1]