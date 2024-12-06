function findBiggestAndSmallest(arr) {
    let biggest = null;
    let smallest = null;

    for (let i = 1; i < arr.length - 1; i++) {
        // Check if the current element is not smaller than its neighbors
        if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
            // Update biggest
            if (biggest === null || arr[i] > biggest) {
                biggest = arr[i];
            }
            // Update smallest
            if (smallest === null || arr[i] < smallest) {
                smallest = arr[i];
            }
        }
    }

    return { biggest, smallest };
}

// Example array
const array = [5, 10, 20, 15, 16, 18, 20];

// Find biggest and smallest
const result = findBiggestAndSmallest(array);
console.log('Biggest:', result.biggest); // Output: Biggest: 20
console.log('Smallest:', result.smallest); // Output: Smallest: 20
