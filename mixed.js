const randWord1 = ['funny', 'silly', 'cute'];
const randWord2 = ['banana', 'pineapple', 'pear'];
const randWord3 = ['bum', 'fart','poo', 'wee' ] ;

function randIndex() {
    return Math.floor(Math.random() * 2);
}
let randomWord1 = randWord1[randIndex()];
let randomWord2 = randWord2[randIndex()];
let randomWord3 = randWord3[randIndex()];


function makeSentence() {
    
    console.log(`knock knock. Who's there? ${randomWord1}. ${randomWord1} who? ${randomWord1} ${randomWord2} ${randomWord3}`);
}

makeSentence();
