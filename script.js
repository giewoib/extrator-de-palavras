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
            // Conta a frequência de cada palavra
            const wordCount = {};
            words.forEach(word => {
                const lowerCaseWord = word.toLowerCase(); // Converte para minúsculas para contar palavras iguais
                wordCount[lowerCaseWord] = (wordCount[lowerCaseWord] || 0) + 1;
            });

            // Cria uma lista de palavras únicas e as adiciona ao HTML
            for (const word in wordCount) {
                const listItem = document.createElement('li');
                listItem.textContent = `${word} (${wordCount[word]})`; // Exibe palavra e contagem
                wordList.appendChild(listItem);
            }
        } else {
            const listItem = document.createElement('li');
            listItem.textContent = 'Nenhuma palavra encontrada.';
            wordList.appendChild(listItem);
        }
    });
});