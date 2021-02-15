// reverse(hello) === olleh

function reverse(str) {
    // const splt = str.split('');
    // let newStrg = [];
    // for (let i = splt.length; 0 < i; i--) {
    //     newStrg.push(splt[i-1])
    // }
    // return newStrg.join('')
    let reverse = ''
    for (let character of str) {
        console.log(character)
        reverse = character + reverse;
        console.log(reverse)
    }
    return reverse
}

module.exports = reverse;