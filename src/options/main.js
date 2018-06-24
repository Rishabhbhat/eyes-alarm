import "../styles/options_entry.sass";
import options from './options';
import page from './page';
import nodes from './nodes';

document.addEventListener("DOMContentLoaded", page.render)
nodes.getDOM("apply").addEventListener("click", options.save)
nodes.getDOM("reset").addEventListener("click", options.reset)
nodes.getDOM("soundEnabled").addEventListener("click", page.inputs.sound.toggleEditable)
nodes.getDOM("soundVolume").addEventListener("change", page.labels.sound.volume.set)