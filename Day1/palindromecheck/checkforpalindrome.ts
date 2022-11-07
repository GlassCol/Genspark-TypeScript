function isNumPalindrome (input: number) {
    let text: string = input.toString();
    for (let i = 0, j = text.length - 1; i < j; ++i, --j) {
        if (text[i] !== text[j]) {
            return false;
        }
    }
    return true;
}

function isPalindrome (input: string) {
    let text: string = input.toString();
    for (let i = 0, j = text.length - 1; i < j; ++i, --j) {
        if (text[i] !== text[j]) {
            return false;
        }
    }
    return true;
}

console.log(isNumPalindrome(12321));
console.log(isNumPalindrome(5743));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Dave"));