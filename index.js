function thirdHighest(input) {
    // Initialize three variables to keep track of the top three maximum values
    var first = 0;
    var second = 0;
    var third = 0;

    for (var i = 0; i < input.length; i++) {
        input[i] > first
            ? (third = second, second = first, first = input[i])
            : input[i] > second
                ? (third = second, second = input[i])
                : input[i] > third
                    ? (third = input[i])
                    : null;  // Optional; handles the case where input[i] is not greater than first, second, or third
    }

    return third;
}

// Example usage:
console.log(thirdHighest([2, 5, 3, 1, 4]));
