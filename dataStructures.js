// level {1/2/3}

//level 2

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