function firstWord(s) {
    if (s === '' || !s.includes(' ')) {
        return s;
    }

    // Find the index of the first space
    const spaceIndex = s.indexOf(' ');

    // Extract the first word up to the first space
    const firstWord = s.slice(0, spaceIndex);

    return firstWord;
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
