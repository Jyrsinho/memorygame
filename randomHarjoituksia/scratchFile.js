
object = {
    nimi: "Jyri,",
    naimisissa: false,
    syntymapaikka: "Tampere"
        };

taulukko = [1,2,3,4,5];

function longestWord(...words) {
    let longestWord = words[0]
    let longestWordLen = longestWord.length
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWordLen) {
            longestWord = words[i]
        }
    }
    return longestWord
}


console.log(object);
console.log(Object.keys(object))

for (let value of taulukko) {
    console.log(value)
}

wordsArray = ["kissa", "kana", "lehmä", "jaakiekonpelaaja"];
console.log(longestWord(...wordsArray));


console.log(longestWord("auto", "kissa", "kana", "koira",
    "karsinogeenikokoelma"));
