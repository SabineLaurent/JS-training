function sumTwoSmallestNumbers(numbers) { 

    const supportedNumbers = [];

    numbers.forEach(number => {
        
        if(number > 0){

            if(Number.isInteger(number)){
                supportedNumbers.push(number);
            };

        };

    });

    const ascSortedNumbers = Array.from(supportedNumbers).sort((a, b) => a - b);
    const sumOfTwoSmallestNumbers = ascSortedNumbers[0] + ascSortedNumbers[1];

    console.log(numbers);
    console.log(supportedNumbers);
    console.log(ascSortedNumbers);
    console.log(sumOfTwoSmallestNumbers);

    return sumOfTwoSmallestNumbers;
  
};
