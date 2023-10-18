// Question 02

function maxOfThree(...nums) {
    let max = 0;
    for (let num of nums) {
        if (typeof num !== 'number') return console.log(('Please enter valid arguements'))
        if (num > max) max = num
    }
    console.log(max)
}
maxOfThree(-93, -67, 3)

// Question 03

function isCharVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let decision = false;
    for (let vowel of vowels) {
        if (char === vowel.toUpperCase() || char === vowel.toLowerCase()) {
            decision = true
        }
    }
    console.log(decision)
}

// isCharVowel('s')

//Question 04

function sumArray(...nums) {
    let sum = 0
    for (let num of nums) {
        sum += num
    }
    console.log(sum)
}

// sumArray(2, 3, 4, 6, 5)

// Question 05

function multiplyArray(...nums) {
    answ = 1
    for (let num of nums) {
        answ *= num
    }
    console.log(answ)
}
// multiplyArray(2, 3, 4)

// Question 06

function numArgs(...arg) {
    console.log(arg.length)
}

// numArgs('r', 7, [4, 5, 4])

// Question 06

// function reverseString(str) {
//     let reverseStringArray = []
//     let i = -1
//     while (i >= -(str.length)) {
//         reverseStringArray.un(str.slice(i))
//         i--
//     }
//     console.log(reverseStringArray)
// }

// reverseString('rockstar')

function reverseString(str) {
    let reverseStringArray = []
    for (let char of str) {
        reverseStringArray.unshift(char)
    }
    console.log(reverseStringArray.join(''))
}

// reverseString('Dylan')

function longestSringInArray(arrayOfStrings) {
    maxLenghthOfString = 0
    for (let string of arrayOfStrings) {
        if (string.length > maxLenghthOfString) maxLenghthOfString = string.length
    }
    console.log(maxLenghthOfString)
}

// longestSringInArray(['cat', 'runner', 'encyclopedia'])

function stringsLongerThan(array_Strings, len) {
    outPutArray = []
    for (let string of array_Strings) {
        if (string.length > len) outPutArray.push(string)
    }
    console.log(outPutArray)
}

// stringsLongerThan(['ten', 'carrot', 'my', 'phone', 'Tree'], 3)