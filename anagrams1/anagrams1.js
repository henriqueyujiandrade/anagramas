// Organizar o parametro word em ordem alfabética e mínuscula, vou chamar  de 'w'.
// Depois, a quantidade de letras de 'w' tem que ser igual a quantidade de letras das palavras contidas no array 'palavras'.

//  Aí você filtra essas palavras com mL.push (palavras[i])

// Temos agora um Array 'mL' baseado na length do parametro 'word', se 'word' tiver 10 letras, vamos ter um array de palavras de 10 letras cada palavra.

// Agora... as letras contidas em 'w' tem que ser iguais as letras das palavras contidas em 'mL'.(aqui é o mais dificl)

// Primeiro nós precisamos pegar cada palavra do 'mL' e fazer igual o 'w'... cria um novo array 'mLa' com palavras organizadas em ordem alfabetica
// MAS REPARE QUE O INDEX É O MESMO DE 'mL',POIS A POSIÇÃO VAI SER MANTIDA!!!!******
// AS PALAVVRAS FORAM ORGANIZADAS EM ORDEM ALFABÉTICA E MINUSCULAS, MAS ELAS NÃO SAÍRAM DE POSIÇÃO.

// agora a gente iguala as letras das palavras 'mLa'  com as letras da palavra 'w', os dois vão estar em ordem alfabética, então é só igualar [0] com [0], [1] com [1], [x] com [x]...

// se bater todas as letras certinho então esse index de mLa é válido .... nós vamos pegar esse index, e jogar la no array 'mL' onde a palavra está certinha e não em ordem alfabética.

// então vamos dar push dessa palavra do 'mL' em final.push(mL[f])

// depois return final

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

function getAnagramsOf(word) {
    let w = alphabetize(word)
    let mL = []
    let mLa = []    
    let final =[]

    for (let i = 0; i < palavras.length; i++) {
        if (w.length == palavras[i].length) {
            mL.push(palavras[i])            
        }
    }   

    for (let j = 0; j < mL.length; j++) {
        mLa.push(alphabetize(mL[j]))        
    }    

    for (let f = 0; f<mLa.length; f++){
        let comparador = 0
        for (let l = 0; l<w.length; l++){
            if (w[l] === mLa[f][l]){
                comparador++                                
            }
        }
        if (comparador === w.length){
            final.push(mL[f])
        }          
    }
    return final
}


let p = document.createElement('p')
let div = document.querySelector('div.box')

div.appendChild(p)




const button = document.getElementById("findButton");

button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value;
    p.innerHTML = `[${getAnagramsOf(typedText)}]`;    
});


