import Clock from "./ui/Clock";
import Sound from "./ui/Sound";
import Notification from "./ui/Notification";
import Ticker from "./Ticker";


let isLocked = false

class IdleDetector {

    init(val) {
        browser.idle.setDetectionInterval(val);
    }

    start() {
        browser.idle.onStateChanged.addListener(this.dispatch)
    }

    dispatch(state) {
        switch (state) {
            case 'active':
                if (isLocked) {
                    Sound.muted = false
                    Ticker.start();
                    //ui.icon.switch(true)
                    Clock.switch(true);
                    Clock.sync();
                    isLocked = false
                }
                break;
            case 'idle':
            case 'locked':
                Sound.muted = true
                Ticker.stop();
                Notification.clear();
                Clock.reset();
                isLocked = true
                break;
        }
    }
}

export default new IdleDetector;
