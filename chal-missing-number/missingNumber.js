function missingNumber(nums, maxNum) {
    for (let i = 1; i <= maxNum; i++) {
        if (!nums.includes(i)) {
            return i
        }
    }
}
//calling in the function with parameters inside parentheses
console.log(missingNumber([2, 1, 4, 3, 6, 5, 7, 10, 9], 10));