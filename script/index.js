document.getElementById('music').volume = 0.2
window.sr = ScrollReveal({ reset: true })
sr.reveal('.reveal-1', {
    rotate: { x: 80, y: 0, z: 0 },
    duration: 1500
})
sr.reveal('.reveal-2', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 1500
})
sr.reveal('.reveal-3', {
    rotate: { x: 80, y: 0, z: 0 },
    duration: 1500
})
sr.reveal('.reveal-4', {
    rotate: { x: 80, y: 0, z: 0 },
    duration: 1500
})

sr.reveal('.rotate-reveal', {
    rotate: { x: 0, y: 0, z: 80 },
    duration: 1500
})

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

