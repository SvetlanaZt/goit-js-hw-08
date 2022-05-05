import Player from '@vimeo/player';
import throttle from "lodash.throttle";
 
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCAL_KEY = "videoplayer-current-time";

player.on('timeupdate', onPlay)
player.on('play', updateTime)

const onPlay = function() {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem(LOCAL_KEY, seconds);
    });
};

const updateTime = function () {
    const saveTime = localStorage.getItem(LOCAL_KEY)
    player.setCurrentTime(saveTime).then(function (seconds) {
        console.log(seconds)
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;
        }
    });
}
