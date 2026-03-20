const esfera = document.getElementById('esfera');
const player = new Audio();

// Lista de músicas (Substitua pelos nomes dos seus arquivos .mp3 locais)
const musicas = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", 
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
];

// Função para gerar cor aleatória
function gerarCor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

esfera.addEventListener('mouseenter', () => {
    // 1. Escolhe uma nova cor
    const novaCor = gerarCor();

    // 2. Aplica a cor e o brilho (Glow) na esfera
    esfera.style.background = `radial-gradient(circle at 75px 75px, ${novaCor}, #000)`;
    esfera.style.boxShadow = `inset -25px -25px 60px rgba(0,0,0,0.8), 0 0 80px ${novaCor}`;

    // 3. Escolhe e toca uma música aleatória do Justin
    const musicaAleatoria = musicas[Math.floor(Math.random() * musicas.length)];
    
    player.src = musicaAleatoria;
    player.play().catch(error => {
        console.log("Interação necessária para tocar áudio.");
    });
});

// Para parar a música quando o mouse sair (opcional)
esfera.addEventListener('mouseleave', () => {
    // player.pause(); // Descomente se quiser que a música pare ao tirar o mouse
});