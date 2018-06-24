class Ticker {

    start() {
        browser.alarms.create('eyes-alarm-counter', {
            periodInMinutes: 1
        })
    }

    stop() {
        browser.alarms.clear('eyes-alarm-counter')
    }

    restart() {
        this.stop();
        this.start();
    }
    
}

export default new Ticker;