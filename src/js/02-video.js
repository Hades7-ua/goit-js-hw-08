import Player from '@vimeo/player';
import throttle from 'lodash.throttle ';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const CURRENT_TIME_STORAGE = 'videoplayer-current-time';

player.on('timeupdate', throttle(onplay, 1000));

function onplay(e) {
  localStorage.setItem(CURRENT_TIME_STORAGE, e.seconds);
}

setCurrentTime();

function setCurrentTime() {
  if (!localStorage.getItem(CURRENT_TIME_STORAGE)) {
    return;
  }
  player.setCurrentTime(localStorage.getItem(CURRENT_TIME_STORAGE));
}
