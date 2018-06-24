import defaults from '../configs/defaults';

class Storage {

    store = {}

    keys = [
        'isReading',
        'passedMinutes',
        'breakTimeAmount',
        'readingTimeAmount',
        'idleDetectionInterval',
        'soundEnabled',
        'soundPath'
    ]

    async load() {
        let result = await browser.storage.local.get(null);

        this.keys.forEach(key => {
            this.store[key] = result[key] || defaults[key]
        })

        return this.store;
    }
}

export default new Storage;
