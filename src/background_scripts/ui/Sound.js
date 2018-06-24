import {AudioElement, defaultSoundPath} from "./AudioElement";

class Sound {

  element = AudioElement;

  get src() {
    return this.element.src;
  }

  set src(value) {
    this.element.src = value;
  }

  set volume(value) {
    this.element.volume = value;
  }

  set muted(value) {
    this.element.muted = value;
  }

  /**
   * if user doesnt specify the path to play, play default one
   * if user specified a path, play it
   * @param {String} path 
   */
  updatePath(path = '') {
    if (path) {
      if (this.src !== path) {
        this.src = path
      }
    } else if (this.src !== defaultSoundPath) {
      this.src = defaultSoundPath
    }
  }

  /**
   * set path and volume
   * then play
   * @param {String} path 
   */
  play(path, volume) {
    try {
      this.updatePath(path)
      this.volume = volume
      this.element.play()
    } catch (err) {
      console.error(err)
      console.log(this.element)
    }
  }
}

export default new Sound;