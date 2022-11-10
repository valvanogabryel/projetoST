document.getElementById('music').volume = 0.2
window.sr = ScrollReveal({ reset: true })
sr.reveal('.reveal-1', { duration: 1000 })
sr.reveal('.reveal-2', { duration: 1000 })
sr.reveal('.reveal-3', { duration: 1000 })
sr.reveal('.reveal-4', { duration: 1000 })


function switchTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    const theme = document.body.classList[0];
    const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg';

    const audio = document.querySelector('audio#music');
    audio.src = `assets/musics/${music}`;
    audio.volume = 0.2;
    audio.play()
}

