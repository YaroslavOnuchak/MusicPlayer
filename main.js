function MusicPlayer(url) {
    this.audio = new Audio();
    this.audio.src = url;
    this.info = {}
    this.info.link = url
    this.info.artist = ''
    this.info.song = ''


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


    let link = this.info.link;

    let newArr, song, artist;
    for (let i = 0; i < link.length; i++) {

        if (link.indexOf('/', i) < 0) {
            newArr = link.substring(i, link.indexOf('(')).split('-');
            break;

        }
    }
    for (let i = 0; i < newArr.length; i++) {


        this.info.artist = newArr[0].split('_').join(' ');
        this.info.song = newArr[newArr.length - 1].split('_').join(' ')

    }
    document.querySelector('.artist').innerText = this.info.artist;
    document.querySelector('.song').innerText = this.info.song;

}

let song = new MusicPlayer('https://muz16.z1.fm/f/b1/anastaysha_-_left_outside_alone_(zf.fm).mp3')
song.event();
console.log(song.info)



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