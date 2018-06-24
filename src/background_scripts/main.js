import { handleResponse } from '../utility';
import ui from "./ui";
import idle from "./idle";
import clock from "./clock";
import counter from "./counter";
import storage from "./storage";
import timePacket from "./timePacket";

/**
 *  callbacks
 */
function resetUI(iconIsGreen) {
    clock.reset()
    //ui.icon.switch(iconIsGreen)
    ui.clock.switch(iconIsGreen)
    ui.clock.sync()
}

function shouldRead() {
    return !storage.store.isReading
        && storage.store.passedMinutes >= storage.store.breakTimeAmount
}

function shouldBreak() {
    return storage.store.isReading
        && storage.store.passedMinutes >= storage.store.readingTimeAmount
}

function updateClock() {
    clock.plus(1)
    ui.clock.sync()
}

// dispatch alarm event
browser.alarms.onAlarm.addListener(alarm => {
    updateClock()
    if (shouldBreak()) {
        counter.restart()
        resetUI(false) // turn to red
        ui.notice.create()
    } else if (shouldRead()) {
        counter.restart()
        resetUI(true) // turn to green
    }
})

// start dispatch request
browser.runtime.onMessage.addListener((request, sender) => {
    switch (request.type) {

        case 'requestTime':
            return Promise.resolve(timePacket())

        case 'resetCounter':
            counter.restart()
            resetUI(true)
            return Promise.resolve(timePacket())
    }
})

// reset alarms when setting changes

browser.storage.onChanged.addListener((changes, area) => {
    if (area === 'local') {
        storage.load({
            callback: () => {
                counter.restart()
                resetUI(true)
            }
        })
    }
})


/**
 *  business logic
 */
storage.load({
    callback: () => {
        idle.init(storage.store.idleDetectionInterval)
        idle.detect.start()
        counter.start()
    }
})