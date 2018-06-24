import storage from "./storage";

export default () => {
    return {
        time: storage.store.passedMinutes,
        limit: storage.store.isReading ? storage.store.readingTimeAmount : storage.store.breakTimeAmount,
        reading: storage.store.isReading
    }
}