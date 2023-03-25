const randWord1 = ['funny', 'silly', 'cute'];
const randWord2 = ['banana', 'pineapple', 'pear'];
const randWord3 = ['bum', 'fart','poo', 'wee', 'bums', 'bottoms' ] ;

function randIndex(array) {
    return Math.floor(Math.random() * (array.length-1));
}
let randomWord1 = randWord1[randIndex(randWord1)];
let randomWord2 = randWord2[randIndex(randWord2)];
let randomWord3 = randWord3[randIndex(randWord3)];


function makeSentence() {
    
    console.log(`knock knock. Who's there? ${randomWord1}. ${randomWord1} who? ${randomWord1} ${randomWord2} ${randomWord3}`);
}

makeSentence();
