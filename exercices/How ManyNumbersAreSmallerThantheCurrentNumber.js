/**
 * PROBLEM
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count   the number of valid j's such that j != i and nums[j] < nums[i].

    Return the answer in an array.
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let newArr = [];
    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        let value = 0;
        nums.forEach(el => {
            if(curr > el) {
                value+= 1;
            }
        }) 
        newArr.push(value);
        value = 0;
    }
    return newArr;
}