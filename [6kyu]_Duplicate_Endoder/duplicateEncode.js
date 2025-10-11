function duplicateEncode(word){

    const upperCasedWord = transformStringToUpperCase(word);
    const splittedCharacters = splitCharactersInArray(upperCasedWord);

    return ;
}

duplicateEncode("dIn");


// -----------------------------------------
// Secondary fonctions

function transformStringToUpperCase(string){
    const upperCasedString = string.toUpperCase()
    console.log(upperCasedString);

    return upperCasedString;
};

function splitCharactersInArray(string){
    const splittedString = string.split('')
    console.log(splittedString);

    return splittedString;
}