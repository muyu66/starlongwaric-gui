exports.install = function (Vue, options) {
    Vue.prototype.$exception = {
        render: function (error_code, error_msg) {
            switch (error_code) {
                case 40101:
                    alert('账号或密码输入错误');
                    break;
                default:
                    alert(error_msg);
            }
        }
    };
};