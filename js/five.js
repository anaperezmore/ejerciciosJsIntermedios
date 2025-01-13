const numbers = [15, 42, 3, 18, 90, 67, 29];

// Función para encontrar el segundo número más grande
function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const secondLargest = findSecondLargest(numbers);
console.log("El segundo número más grande es:", secondLargest);
