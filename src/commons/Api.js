exports.install = function (Vue, options) {
    Vue.prototype.$api = {
        get: function (url) {
            return process.env.API_URL + '/' + url;
        }
    };
};