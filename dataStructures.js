// level {1/2/3}

//level 2
// level {1/2/3}

//level 2

//1 Write a function to remove all even numbers from an Array.
let array = [1, 3, 4, 6, 7, 8]

function removeEven(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(removeEven(array));


//2 Replace all the vowels in a string with uppercase vowels.

let str = 'Elie'

function changeVowelToUpper(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    if (vowel.includes(str)) {
        return str.toUpperCase();
    } else {
        return str;
    }
}

function changeVowel(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        res += changeVowelToUpper(str[i]);
    }
    return res;
}


console.log(changeVowel(str))


//3. Write a function to find the maximum number in an array.

let arr =  [1, 3, 4, 6, 7, 8, 2, 5]

function findMax(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));
