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
    "inclusive", "diante", "sobre", "quanto", "apenas", "desde", "uma vez", "segundo", "junto",
    ,"romance", "minha", "culpa",
"romance", "para", "todos", "garotos", "que", "já", "amei",
"ação", "e", "romance", "atualmente", "como", "treinar", "seu", "dragão", "live", "action", "pois", "ficou", "mt", "dahora",
"terror", "entidade",
"terror", "junto", "com", "romance", "pois", "ele", "dá", "aquela", "adrenalina", "que", "pode" ,"ser", "tudo", "ou", "nada",
"terror", "rua", "do", "medo",
,"terror", "pois", "filmes", "de", "terror", "são", "populares", "por", "várias", "razões", "que", "agradaram", "a", 
"diferentes", "pessoas", "eles", "oferecem", "uma", "liberação", "de", "adrenalina", "segura", "exploram", "o", "desconhecido", 
"e", "o", "sobrenatural", "e", "permitam", "uma", "catarse", "emocional", "ao", "liberar", "o", "medo", "e", "a", "ansiedade",
 "além", "disso", "assistir", "a", "esses", "filmes", "pode", "ser", "uma", "experiência", "de", "vínculo", "social", "e", 
 "uma", "forma", "de", "superar", "o", "medo", "muitos", "são", "bem", "feitos", "com", "qualidade", "cinematográfica",
  "impressionante", "na", "trilha", "sonora", "e", "nos", "efeitos", "visuais", "por", "fim", "alguns", "filmes", "de",
   "terror", "vão", "além", "do", "susto", "servindo", "como", "uma", "reflexão", "sobre", "questões", "profundas", "da",
    "condição", "humana",
,"terror", "porque", "eu", "gosto"
,"ação", "animação", "e", "dependendo", "do", "contexto", "terror"
,"Ação", "Kingsman",
,"Ação", "e", "ficção", "científica", "meu", "filme", "favorito", "é", "Django", 
"Livre", "filme", "muito", "bem", "trabalhado", "história", "cativante", "o", "protagonista", "é", "muito", "foda",
"Ação", "e", "comédia",
"meu", "gênero", "de", "filme", "favorito", "com", "certeza", "é", "o", "gênero", 
"de", "ação", "entretanto", "meu", "filme", "favorito", "é", "Suzume",
"ação", "animação", "e", "dependendo", "do", "contexto", "terror",
"aventura", "ficção", "e", "animação", "como", "treinar", "o", "seu", "dragão", "pela",
 "história", "impactante", "e", "arrepiante",
"anime", "Your", "Name", "porque", "sim",
"atualmente", "como", "treinar", "seu", "dragão", "live", "action", "pois", "ficou", "mt", "dahora",
"Ficção", "científica", "Jogador", "Número", "1",
"Ficção", "Científica/Bladerunner", "2049", "é", "uma", "história", "que", "apesar", "de",
 "confusa", "ela", "é", "impactante", "por", "conta", "da", "sua", "atmosfera", "e", "história", 
 "e", "porque", "tem", "o", "Ryan", "Gosling", "como", "protagonista",
"comédia", "e", "ação", "Gente", "Grande",
"Comédia", "O", "Vendedor", "de", "Sonhos",
"comédia", "Gente", "Grande", "pq", "o", "Adam", "Sandler", "é", "fo#@",
"Vingadores",
"Documentário", "pois", "me", "traz", "conhecimento", "e", "a", "realidade", "em", "alguns", "casos"
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
