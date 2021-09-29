import word from 'an-array-of-english-words';

export default() =>{
    const wordIndex = Math.floor(Math.random() * word.length);

    return word[wordIndex];
}