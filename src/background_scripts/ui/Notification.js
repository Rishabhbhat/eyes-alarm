import Sound from './Sound';

let notificationParams = {
  type: 'basic',
  iconUrl: browser.extension.getURL(paths.notificationIcon),
  title: defaultValues.title,
  message: defaultValues.message
}

let notificationID = 'eyes-alarm-n'


class Notification {
  /**
   * check if there it's some custom data to rewrite parameters used for showing notifiation
   * then check again, but this time is for playing sound
   */
  async create() {
    try {
      let result = await browser.storage.local.get(['title', 'message', 'soundEnabled', 'soundPath', 'soundVolume']);

      // rewrite data for creating notification
      ['title', 'message'].forEach(key => {
        if (result[key]) {
          notificationParams[key] = result[key]
        }
      })

      // creating
      browser.notifications.create(notificationID, notificationParams)

      if (result.soundEnabled) {
        Sound.play(result.soundPath, result.soundVolume)
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * close notifcation
   */
  clear() {
    browser.notifications.clear(notificationID)
  }
}

export default new Notification;