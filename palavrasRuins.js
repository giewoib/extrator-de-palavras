// export const PALAVRAS_RUINS = new Set([ ... ]);
// Você pode manter essa declaração no topo do seu script.js ou em um arquivo separado
// e importá-la se estiver usando módulos JS.
// Para este exemplo, vamos declarar ela diretamente aqui para simplicidade.

const PALAVRAS_RUINS = new Set([
    "que", "para", "com", "não", "uma", "por", "mais", "dos", "como", "mas",
    "foi", "ele", "das", "tem", "seu", "sua", "ser", "quando", "muito", "está",
    "também", "pelo", "pela", "até", "isso", "ela", "entre", "era", "depois", "sem",
    "mesmo", "aos", "ter", "seus", "quem", "nas", "esse", "eles", "estão", "você",
    "tinha", "foram", "essa", "num", "nem", "suas", "meu", "minha", "têm", "numa",
    "pelos", "elas", "havia", "seja", "qual", "será", "nós", "tenho", "lhe", "deles",
    "essas", "esses", "pelas", "este", "fosse", "dele", "vocês", "vos", "lhes", "meus",
    "minhas", "teu", "tua", "teus", "tuas", "nosso", "nossa", "nossos", "nossas",
    "dela", "delas", "esta", "estes", "estas", "aquele", "aquela", "aqueles", "aquelas",
    "isto", "aquilo", "estou", "estamos", "estive", "esteve", "estivemos", "estiveram",
    "estava", "estávamos", "estavam", "e", "ou", "onde", "aquilo", "embora", "apesar",
    "porque", "enquanto", "contudo", "entretanto", "portanto", "além", "antes", "todavia",
    "inclusive", "diante", "sobre", "quanto", "apenas", "desde", "uma vez", "segundo", "junto"
]);


document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const extractButton = document.getElementById('extractButton');
    const wordList = document.getElementById('wordList');

    extractButton.addEventListener('click', () => {
        const text = inputText.value.trim(); // Pega o texto e remove espaços extras
        wordList.innerHTML = ''; // Limpa a lista anterior

        if (text === '') {
            const listItem = document.createElement('li');
            listItem.textContent = 'Por favor, insira algum texto.';
            wordList.appendChild(listItem);
            return;
        }

        // Divide o texto em palavras, removendo pontuação e espaços múltiplos
        // A expressão regular /\b\w+\b/g busca por sequências de letras, números ou underscores (palavras)
        // \b garante que sejam palavras completas (limites de palavra)
        const words = text.match(/\b\w+\b/g);

        if (words && words.length > 0) {
            const wordCount = {};
            words.forEach(word => {
                const lowerCaseWord = word.toLowerCase(); // Converte para minúsculas

                // **Verifica se a palavra NÃO está na lista PALAVRAS_RUINS**
                if (!PALAVRAS_RUINS.has(lowerCaseWord)) {
                    wordCount[lowerCaseWord] = (wordCount[lowerCaseWord] || 0) + 1;
                }
            });

            // Cria uma lista de palavras únicas e as adiciona ao HTML
            // Ordena as palavras por contagem (do maior para o menor)
            const sortedWords = Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]);

            if (sortedWords.length > 0) {
                sortedWords.forEach(word => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${word} (${wordCount[word]})`; // Exibe palavra e contagem
                    wordList.appendChild(listItem);
                });
            } else {
                const listItem = document.createElement('li');
                listItem.textContent = 'Nenhuma palavra significativa encontrada após a filtragem.';
                wordList.appendChild(listItem);
            }

        } else {
            const listItem = document.createElement('li');
            listItem.textContent = 'Nenhuma palavra encontrada no texto.';
            wordList.appendChild(listItem);
        }
    });
});