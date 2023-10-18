// Question 02

const maxOfThree = function (...nums) {
    let max = nums[0];
    for (let num of nums) {
        if (typeof num !== 'number') return console.log(('Please enter valid arguements'));
        if (num > max) max = num;
    }
    console.log(max);
}

// maxOfThree(-93, -67, -3);


// Question 03

function isCharVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let decision = false;
    for (let vowel of vowels) {
        if (char === vowel.toUpperCase() || char === vowel.toLowerCase()) {
            decision = true;
        }
    }
    console.log(decision);
}

// isCharVowel('B');

//Question 04

const sumArray = function (nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    console.log(sum);
}

// sumArray([2, 4, 5]);

// Question 05

function multiplyArray(...nums) {
    answ = 1;
    for (let num of nums) {
        answ *= num;
    }
    console.log(answ);
}
// multiplyArray(2, 3, 4);

// Question 06

const numArgs = function (...arg) {
    console.log(arg.length);
}

// numArgs([4, 5, 4], 5, 'r');

// Question 07

function reverseString(str) {
    let reverseStringArray = [];
    for (let char of str) {
        reverseStringArray.unshift(char);
    }
    console.log(reverseStringArray.join(''));
}

// reverseString('Dylan')

// Question 08

const longestSringInArray = function (arrayOfStrings) {
    maxLenghthOfString = 0;
    for (let string of arrayOfStrings) {
        if (string.length > maxLenghthOfString) maxLenghthOfString = string.length;
    }
    console.log(maxLenghthOfString);
}

// longestSringInArray(['cat', 'runner', 'ti'])

// Question 09

function stringsLongerThan(array_Strings, len) {
    outPutArray = [];
    for (let string of array_Strings) {
        if (string.length > len) outPutArray.push(string);
    }
    console.log(outPutArray)
}

// stringsLongerThan(['ten', 'carrot', 'my', 'phone', 'Tree'], 3)