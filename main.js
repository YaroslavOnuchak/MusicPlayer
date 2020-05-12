 function MusicPlayer(audioUrl) {
     this.audio = new Audio();
     this.audio.src = audioUrl.url;
     this.artist = audioUrl.artist
     this.song = audioUrl.song
     this.setEventPlayer();
 }

 MusicPlayer.prototype.setEventPlayer = function () {
     let play = document.querySelector('.play');
     let pause = document.querySelector('.pause');
     let stop = document.querySelector('.stop');
     play.addEventListener('click', function () {
         play.style.display = 'none';
         pause.style.display = 'block';
         this.audio.play()
     }.bind(this));
     stop.addEventListener('click', function () {
         pause.style.display = 'none';
         play.style.display = 'block';
         this.audio.pause();
         this.audio.currentTime = 0.0;
     }.bind(this));
     pause.addEventListener('click', function () {
         pause.style.display = 'none';
         play.style.display = 'block';
         this.audio.pause()
     }.bind(this));
     document.getElementById('volumeslider').addEventListener('mousemove', function () {
         this.audio.volume = volumeslider.value / 100;
     }.bind(this));
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
