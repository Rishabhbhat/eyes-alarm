import defaultValues from '../configs/defaults';
const storageKeys = [
    'isReading',
    'passedMinutes',
    'breakTimeAmount',
    'readingTimeAmount',
    'idleDetectionInterval',
    'soundEnabled',
    'soundPath'
]

export default {
    store: {},

    load({callback, params}) {
        browser.storage.local.get(null)
            .then(result => {
                storageKeys.forEach(key => {
                    storage.store[key] = result[key] || defaultValues[key]
                })
                if (callback) {
                    callback(params)
                }
            })
            .catch(err => {
                console.error(err)
            })
    }
}
