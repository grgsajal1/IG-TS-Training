var songIndex : number = 0;
var songs : any = [
    {
      title: 'Shape Of Your',
      artist: 'ED Sheeran',
      coverPath: 'images/shapeofyou.jpeg',
      discPath: 'music/music1.mp3',
      duration: '4:23',
    },
    {
      title: 'In the End',
      artist: 'Linkin Park',
      coverPath: 'images/intheend.jpg',
      discPath: 'music/music2.mp3',
      duration: '3:38',
    },
    {
      title: 'Despacito',
      artist: 'Luis Fonsi',
      coverPath: 'images/despacito.jpg',
      discPath: 'music/music3.mp3',
      duration: '4:41',
    },
  ];
var cover  = document.getElementById('cover') as HTMLImageElement;
var disc   = document.getElementById('disc') as HTMLAudioElement;
var title = document.getElementById('title');
var artist = document.getElementById('artist');
var progressContainer = document.getElementById('progress-container');
var progress = document.getElementById('progress');
var timer = document.getElementById('timer');
var duration : any = document.getElementById('duration');
var prev = document.getElementById('prev');
var play = document.getElementById('play');
var next = document.getElementById('next');

onload =() => {



play.addEventListener('click', playPauseMedia);


disc.addEventListener('play', updatePlayPauseIcon);
disc.addEventListener('pause', updatePlayPauseIcon);
disc.addEventListener('timeupdate', updateProgress);
disc.addEventListener('ended', gotoNextSong.bind(null, true));

prev.addEventListener('click', gotoPreviousSong);


next.addEventListener('click', gotoNextSong.bind(null, false));


progressContainer.addEventListener('click', setProgress);

}





loadSong(songs[songIndex]);


function loadSong(song) {
  cover.src = song.coverPath;
  disc.src = song.discPath;
  title.textContent = song.title;
  artist.textContent = song.artist;
  duration.textContent = song.duration;
}


function playPauseMedia() {
  if (disc.paused) {
    disc.play();
  } else {
    disc.pause();
  }
}


function updatePlayPauseIcon() {
  if (disc.paused) {
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
  } else {
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
  }
}


function updateProgress() {
  progress.style.width = (disc.currentTime / disc.duration) * 100 + '%';

  let minutes = Math.floor(disc.currentTime / 60);
  let seconds = Math.floor(disc.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  timer.textContent = `${minutes}:${seconds}`;
}


function resetProgress() {
  progress.style.width = 0 + '%';
  timer.textContent = '0:00';
}


function gotoPreviousSong() {
  if (songIndex === 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex = songIndex - 1;
  }

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex]);
  resetProgress();
  if (isDiscPlayingNow) {
    playPauseMedia();
  }
}


function gotoNextSong(playImmediately) {
  if (songIndex === songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex = songIndex + 1;
  }

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex]);
  resetProgress();
  if (isDiscPlayingNow || playImmediately) {
    playPauseMedia();
  }
}


function setProgress(ev) {
  const totalWidth = this.clientWidth;
  const clickWidth = ev.offsetX;
  const clickWidthRatio = clickWidth / totalWidth;
  disc.currentTime = clickWidthRatio * disc.duration;
}

