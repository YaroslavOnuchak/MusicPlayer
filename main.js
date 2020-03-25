function MusicPlayer(audioUrl) {
    this.audio = new Audio();
    this.audio.src = audioUrl.url;
    this.artist = audioUrl.artist
    this.song = audioUrl.song
    this.event();


}

MusicPlayer.prototype.event = function () {
    let that = this;
    document.querySelector('.play').addEventListener('click', function () {
        this.style.display = 'none';
        document.querySelector('.pause').style.display = 'block';
        that.audio.play()

    });
    document.querySelector('.stop').addEventListener('click', function () {

        that.audio.pause();
        that.audio.currentTime = 0.0;
        document.querySelector('.pause').style.display = 'none';
        document.querySelector('.play').style.display = 'block';

    });
    document.querySelector('.pause').addEventListener('click', function () {
        document.querySelector('.pause').style.display = 'none';
        document.querySelector('.play').style.display = 'block';
        that.audio.pause()

    });
    document.getElementById("volumeslider").addEventListener("mousemove", function () {
        that.audio.volume = volumeslider.value / 100;
    });
    document.querySelector('.artist').innerText = this.artist;
    document.querySelector('.song').innerText = this.song;

}


audioUrl = {
    url: 'https://muz16.z1.fm/f/b1/anastaysha_-_left_outside_alone_(zf.fm).mp3',
    artist: 'Anastaysha',
    song: 'left outside alone'
}
let song = new MusicPlayer(audioUrl)




// class MusicPlayer{
//     constructor(url){
//         this.audio = new Audio(),
//         this.audio.src = url
//     }
//     event () {
//             let that = this;
//             document.querySelector('.play').addEventListener('click', function () {
//                 this.style.display = 'none';
//                 document.querySelector('.pause').style.display = 'block';
//                 that.audio.play()

//             });
//             document.querySelector('.stop').addEventListener('click', function () {

//                 that.audio.pause();
//                 that.audio.currentTime = 0.0;

//             });
//             document.querySelector('.pause').addEventListener('click', function () {
//                 document.querySelector('.pause').style.display = 'none';
//                 document.querySelector('.play').style.display = 'block';
//                 that.audio.pause()

//             });


//         }
// }