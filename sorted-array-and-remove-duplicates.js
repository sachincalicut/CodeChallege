// Remove duplicates and sorted array in javascript ?
function removeDuplicate(nums){
    let i=0;
    for(let j=1; j<nums.length; j++){
        if(nums[i]!== nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }
    nums.length = i+1;
    return nums;
}
console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5]));