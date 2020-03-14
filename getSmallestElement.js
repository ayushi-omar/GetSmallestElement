(function () {
    console.log("Function called");
    let testCases = 2;
    let arr1Length = 5;
    let arr1 = [4, 5, 1, 2, 3];
    console.log(" Test one result >>", findMinElement(arr1, 0, arr1Length - 1));
    let arr2Length = 7;
    let arr2 = [10, 20, 30, 40, 50, 5, 7];
    console.log(" Test two result >>", findMinElement(arr2, 0, arr2Length - 1));
})();

function findMinElement(arr, min, max) {
    // when array is not rotated at all
    if (max < min) return arr[0];

    // If there is only one element
    if (max == min) return arr[min];

    // Find middle index
    let mid = Math.floor((min + max) / 2);

    // Check if middle itself is minimum element
    if (mid > min && arr[mid] < arr[mid - 1])
        return arr[mid];

    // Check if element (mid+1) is minimum element.
    if (mid < max && arr[mid + 1] < arr[mid])
        return arr[mid + 1];

    // Checking to go to left half or right half
    if (arr[max] > arr[mid])
        return findMinElement(arr, min, mid - 1);
    return findMinElement(arr, mid + 1, max);
}