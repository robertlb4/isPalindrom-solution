document.getElementById('palindrome-form').addEventListener('submit', e => {
    e.preventDefault()
    const word = document.getElementById('word').value.trim()
    word ? addToList(word) : null
    document.getElementById('word').value = ''
})


const addToList = (word) => {
    const list = isPalindrome(word) ? document.getElementById('palindrome-list') :
        document.getElementById('not-palindrome-list')

    const p = document.createElement("li");
    p.innerHTML = word;
    list.appendChild(p);
}


const isPalindrome = (word) => {
    word = word.toLocaleLowerCase()
    // .replace(/\s+/g, '')
    const length = word.length
    const middle = Math.floor(length / 2)
    let j = 1
    let i;
    for (i = 0; i < middle; i++) {
        while (word[i] === ' ') { i++ }
        while (word[length - j] === ' ') { j++ }
        if (word[i] !== word[length - j]) return false
        j++
    }

    return true
    // let reverse = word.split('').reverse().join('')

    // return word === reverse;

}
