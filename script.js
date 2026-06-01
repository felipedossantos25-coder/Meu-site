const dicas = [
    "💡 Sempre ajuste a sensibilidade do mouse para melhorar sua precisão.",
    "🎮 Faça pausas regulares durante longas sessões de jogo.",
    "⚡ Mantenha seus drivers de vídeo atualizados.",
    "🏆 Treine diariamente para melhorar suas habilidades."
];

document.getElementById("btnMensagem").addEventListener("click", () => {
    const aleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    alert(aleatoria);
});
