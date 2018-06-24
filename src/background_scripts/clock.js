import storage from "./storage";

export default {
    reset() {
        storage.store.passedMinutes = 0
    },
    plus(number) {
        storage.store.passedMinutes += number
    }
}
