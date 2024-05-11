function threeSum(nums: number[], targetSum: number = 0): number[][] {
    if (nums.length < 3) return [];

    nums = nums.sort((a, b) => a - b);
    const triplets: number[][] = [];
    for (let anchorIndex = 0; anchorIndex < nums.length - 2; anchorIndex++) {
        // Remove any duplicates from anchor position before setting up pointers.
        while (nums[anchorIndex] === nums[anchorIndex - 1]) anchorIndex++;
        let leftPointer: number = anchorIndex + 1;
        let rightPointer: number = nums.length - 1;
        while (leftPointer < rightPointer) {
            const [anchorValue, leftValue, rightValue]: number[] = [
                nums[anchorIndex],
                nums[leftPointer],
                nums[rightPointer],
            ];
            const sum: number = anchorValue + leftValue + rightValue;
            if (sum === targetSum) {
                triplets.push([anchorValue, leftValue, rightValue]);
                // Remove any duplicates after finding the target sum.
                while (nums[leftPointer] === nums[leftPointer + 1]) leftPointer++;
                // Traverse one past current Non duplicate value.
                leftPointer++;
            }
            if (sum > targetSum) rightPointer--;
            if (sum < targetSum) leftPointer++;
        }
    }
    return triplets;
};

threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0], 0);