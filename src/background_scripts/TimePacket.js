import Storage from "./Storage";

export default () => {
    return {
        time: Storage.store.passedMinutes,
        limit: Storage.store.isReading ? Storage.store.readingTimeAmount : Storage.store.breakTimeAmount,
        reading: Storage.store.isReading
    }
}