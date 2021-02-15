const palindrome = (str) => {
    // const newStr = str.split('').reduce((rev, char) => char + rev, '');
    // if (newStr === str) return true;

    // return;
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

palindrome('tiago')

module.exports = palindrome;