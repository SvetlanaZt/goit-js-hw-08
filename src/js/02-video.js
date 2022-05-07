import Player from '@vimeo/player';
import throttle from "lodash.throttle";

 
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = "videoplayer-current-time";

const onPlay = ({ seconds }) => {
    localStorage.setItem(LOCAL_KEY, seconds);
    console.log(seconds)
}
player.on('timeupdate', throttle(onPlay, 100))


    const saveTime = localStorage.getItem(LOCAL_KEY);
    if (saveTime) { 
        console.log(saveTime)
        player.setCurrentTime(saveTime).then(function(seconds) {
})
    }

        
    



