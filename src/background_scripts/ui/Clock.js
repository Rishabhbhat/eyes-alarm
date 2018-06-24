import Storage from "../Storage";
import TimePacket from "../TimePacket";

class Clock {

    reset() {
        Storage.store.passedMinutes = 0
    }

    plus(number) {
        Storage.store.passedMinutes += number
    }

    /**
     * change storage.store.isReading
     * for indicating whether it's at reading mode
     * @param {Boolean} isGreen 
     */
    switch(isGreen) {
        Storage.store.isReading = isGreen
    }

    /**
     * send time to popup from background_script
     */
    async sync() {
        if (browser.extension.getViews({ type: "popup" }).length) {
            try {
                await browser.runtime.sendMessage(TimePacket());
            } catch (error) {
                console.error(error);
            }
        }
    }
}

export default new Clock;