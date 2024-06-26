
let phrase = "O mundo pode ser um lugar sombrio as vezes, só basta apagar a luz."

let text = textSeparator(phrase)

musicWriter(text)

function textSeparator (phrase){
    return phrase.split(' ')
};

async function musicWriter(text){
    const music = new Audio("tecla.mp3")
    let phrase = ""
    music.pause()

    for (let first = 0; first < text.length; first++) {
        for (let second = 0; second < text[first].length; second++) {
            phrase += text[first][second]
            console.log(phrase)
            await music.play()
            await delay(0.6)
            console.clear()
        };
        music.pause()
        phrase = phrase + " "
    };

    console.log(phrase)
};

async function delay(seconds){
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
};

