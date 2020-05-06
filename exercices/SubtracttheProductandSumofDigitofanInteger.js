/**
 * PROBLEM
 * Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

    Example 1:

    Input: n = 234
    Output: 15 
    Explanation: 
    Product of digits = 2 * 3 * 4 = 24 
    Sum of digits = 2 + 3 + 4 = 9 
    Result = 24 - 9 = 15
    
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const split = n.toString().split('').map(el => parseInt(el, 10));
    
    const sum = calcSum(...split);
    const product = calcProduct(...split);
    
    function calcSum(...args) {
        return split.reduce((a, b) => a + b);
    }
    
    function calcProduct(...args) {
        return split.reduce((a, b) => a * b);
    }
    
    return product - sum;
};