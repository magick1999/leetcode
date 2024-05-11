function threeSum(nums, targetSum) {
    if (targetSum === void 0) { targetSum = 0; }
    if (nums.length < 3)
        return [];
    nums = nums.sort(function (a, b) { return a - b; });
    var triplets = [];
    for (var anchorIndex = 0; anchorIndex < nums.length - 2; anchorIndex++) {
        // Remove any duplicates from anchor position before setting up pointers.
        while (nums[anchorIndex] === nums[anchorIndex - 1])
            anchorIndex++;
        var leftPointer = anchorIndex + 1;
        var rightPointer = nums.length - 1;
        while (leftPointer < rightPointer) {
            var _a = [
                nums[anchorIndex],
                nums[leftPointer],
                nums[rightPointer],
            ], anchorValue = _a[0], leftValue = _a[1], rightValue = _a[2];
            var sum = anchorValue + leftValue + rightValue;
            if (sum === targetSum) {
                triplets.push([anchorValue, leftValue, rightValue]);
                // Remove any duplicates after finding the target sum.
                while (nums[leftPointer] === nums[leftPointer + 1])
                    leftPointer++;
                // Traverse one past current Non duplicate value.
                leftPointer++;
            }
            if (sum > targetSum)
                rightPointer--;
            if (sum < targetSum)
                leftPointer++;
        }
    }
    return triplets;
}
;
threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0], 0);
