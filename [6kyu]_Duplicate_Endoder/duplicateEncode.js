function duplicateEncode(word){

    // Count of characters occurencies
    const upperCasedWord = word.toUpperCase();
    const characters = upperCasedWord.split(''); // => array of characters
    const charactersOccurency = {};

    characters.forEach(character => {
        !charactersOccurency[character] ? charactersOccurency[character] = 1 : charactersOccurency[character] += 1;
    });

    console.log(upperCasedWord, characters, charactersOccurency);

    // Encode string
    let encodedString = "";

    characters.forEach(character => {
        charactersOccurency[character] > 1 ? encodedString += ")" : encodedString += "(";
    });

    console.log(encodedString);

    return encodedString;

};

duplicateEncode(word);
