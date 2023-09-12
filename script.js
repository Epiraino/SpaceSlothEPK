// Mock data. Replace with your actual music files
const musicData = [
    { title: 'Track 1', file: 'track1.mp3' },
    { title: 'Track 2', file: 'track2.mp3' },
    { title: 'Track 3', file: 'track3.mp3' },
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