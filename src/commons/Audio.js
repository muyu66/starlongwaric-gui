exports.install = function (Vue, options) {
    Vue.prototype.$audio = {
        play: function (key) {
            let audio = document.createElement("audio");
            audio.src = '/static/' + key + '.mp3';
            audio.preload = 'auto';
            audio.play();
        }
    };
};