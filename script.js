// Mock data. Replace with your actual music files
const musicData = [
    { title: 'Flu', file: 'audio/flu.wav' },
    { title: 'Invasion', file: 'audio/invasion.wav' },
    { title: 'Warforge', file: 'audio/warforge.wav' },
];

window.onload = function() {
    const musicList = document.getElementById('music-list');

    musicData.forEach(item => {
        const musicDiv = document.createElement('div');
        const title = document.createElement('h3');
        title.innerText = item.title;

        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = item.file;

        musicDiv.appendChild(title);
        musicDiv.appendChild(audio);

        musicList.appendChild(musicDiv);
    });
};