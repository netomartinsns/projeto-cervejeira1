document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play-sound');
    const audio = document.getElementById('audio');

    if (playButton && audio) {
        playButton.addEventListener('click', function() {
            audio.play();
        });

        // Tocar a música automaticamente quando a página carregar
        audio.play().catch(error => {
            console.error('Autoplay falhou:', error);
        });
    } else {
        console.error('Elemento play-sound ou audio não encontrado.');
    }
});