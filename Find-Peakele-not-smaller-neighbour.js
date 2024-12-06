function findPeakElement(arr) {
    const n = arr.length;

    // Check the first element
    if (n === 1 || arr[0] >= arr[1]) {
        return arr[0];
    }

    // Check the last element
    if (arr[n - 1] >= arr[n - 2]) {
        return arr[n - 1];
    }

    // Check the middle elements
    for (let i = 1; i < n - 1; i++) {
        if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
            return arr[i];
        }
    }

    // If no peak is found (theoretically shouldn't happen with valid input)
    return null;
}

// Example array
const array = [5, 10, 20, 15, 16, 18, 21];

// Find peak element
const peakElement = findPeakElement(array);
console.log('Peak Element:', peakElement); // Output: Peak Element: 21
