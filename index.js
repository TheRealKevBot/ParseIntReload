// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:

// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them 

let smallNums = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "eleven": 11,
    "twelve": 12,
    "thirteen": 13,
    "fourteen": 14,
    "fifteen": 15,
    "sixteen": 16,
    "seventeen": 17,
    "eighteen": 18,
    "nineteen": 19,
    "twenty": 20,
    "thirty": 30,
    "forty": 40,
    "fifty": 50,
    "sixty": 60,
    "seventy": 70,
    "eighty": 80,
    "ninety": 90
}

let bigNums = {
    "hundred": 100,
    "thousand": 1000,
    "million": 1000000,
    "billion": 1000000000
}

function newParseInt(string) {
    // string = string.replaceAll('-', ' ')
    string = string.split('-').join(" ")
    let stringArr = string.toLowerCase().split(' ')
    let num = 0
    let lastNum = 0
    for (let i = 0; i < stringArr.length; i++){
        if (bigNums[stringArr[i]]) {
            num < 1000 ? num *= bigNums[stringArr[i]]
            : num += (bigNums[stringArr[i]] * lastNum) - lastNum
            lastNum = bigNums[stringArr[i]] * lastNum
        }
        if (smallNums[stringArr[i]]) {
            num += smallNums[stringArr[i]]
            lastNum = smallNums[stringArr[i]]
        }
    }
    return num
}


console.log(newParseInt('one'), 1);
console.log(newParseInt('twenty'), 20);
console.log(newParseInt('two hundred forty-six'), 246);
console.log(newParseInt('two thousand three hundred and seventy-seven'), 2377);
console.log(newParseInt('one hundred-thousand one hundred'), 100100);
console.log(newParseInt('one million one hundred-thousand one hundred'), 1100100);
console.log(newParseInt('Nine million nine hundred-thousand nine hundred'), 9900900);
console.log(newParseInt('one hundred million one hundred thousand one hundred'), 100100100);
console.log(newParseInt("seven hundred eighty-three thousand nine hundred and nineteen"), 783919);
console.log(newParseInt('ninety-nine billion'), 99000000000);
console.log(newParseInt('eight thousand nine hundred and forty-two'), 8942);
console.log(newParseInt('twenty-six thousand three hundred and fifty-nine'), 26359);
console.log(newParseInt('thirty-four thousand eight hundred and twenty-five'), 34825);
