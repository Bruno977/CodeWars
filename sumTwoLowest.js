function sumTwoSmallestNumbers(numbers) {  
    numbers.sort(function(a, b) {
        return a - b;
    });
    let array = []
    array.push(numbers[0])
    array.push(numbers[1])
    return (array[0] + array[1])
}sumTwoSmallestNumbers([15, 28, 4, 2, 43])
