import { handleResponse } from '../utility';
import Ticker from "./Ticker";
import Storage from "./Storage";
import TimePacket from "./TimePacket";
import IdleDetector from "./IdleDetector";
import Clock from "./ui/Clock";
import Notification from "./ui/Notification";

/**
 *  commands
 */
function resetUI(icontype) {
    Clock.reset();
    Clock.switch(icontype === 'green' ? true : false);
    Clock.sync();
    //Icon.switch(icontype)
}

function shouldRead() {
    return !Storage.store.isReading
        && Storage.store.passedMinutes >= Storage.store.breakTimeAmount
}

function shouldBreak() {
    return Storage.store.isReading
        && Storage.store.passedMinutes >= Storage.store.readingTimeAmount
}

function updateClock() {
    Clock.plus(1);
    Clock.sync();
}

/**
 * preparing listeners
 */
// User interface should respond to status' change
browser.alarms.onAlarm.addListener(alarm => {
    updateClock();

    if (shouldBreak()) {
        Ticker.restart();
        resetUI('red');
        Notification.create();
    } else if (shouldRead()) {
        Ticker.restart();
        resetUI('green');
    }
})

// receive any communication-request from popup(clock)
browser.runtime.onMessage.addListener((request, sender) => {
    switch (request.type) {
        case 'requestTime':
            return TimePacket();

        case 'resetCounter':
            Ticker.restart();
            resetUI('green');
            return TimePacket();
    }
})

// reset popup(clock) and ticker, when setting changes
browser.Storage.onChanged.addListener(async (changes, area) => {
    if (area === 'local') {
        try {
            await Storage.load();

            Ticker.restart();
            resetUI('green');
        } catch (error) {
            console.error(error)
        }
    }
})


/**
 *  Activate clock
 */
(async () => {
    try {
        await Storage.load();
    
        IdleDetector.init(Storage.store.idleDetectionInterval);
        IdleDetector.start();
    
        // The clock start working after this line
        Ticker.start();
    } catch (error) {
        console.error(error);
    }
})

