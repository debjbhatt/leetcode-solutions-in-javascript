/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = []
    
    nums.reduceRight((prev, acc, i) => {
        output[i] = prev
        return prev * acc
    }, 1)
    
    nums.reduce((prev, acc, i) => {
        output[i] *= prev
        return prev * acc
    }, 1)
    
    return output
};