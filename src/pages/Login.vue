<template>
    <div id="login">
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-2 control-label">Email</label>
                <div class="col-sm-8">
                    <input v-model="email" type="email" class="form-control">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">密码</label>
                <div class="col-sm-8">
                    <input @keyup.enter="postAuthLogin" v-model="password" type="password" class="form-control">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-8">
                    <div v-html="code_html"></div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-8">
                    <button type="submit" @click="postAuthLogin" class="btn btn-default">启航</button>
                    <button type="submit" @click="goRegister" class="btn btn-default">注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                email: '',
                password: '',
                code_html: '',
            }
        },
        name: 'login',
        created: function () {
            this.getAuthCode();
        },
        methods: {
            getAuthCode: function () {
                this.$http.get(
                    'http://www.slw.app/auth/code'
                ).then((response) => {
                    this.code_html = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            postAuthLogin: function () {
                window.auth_email = this.email;
                window.auth_password = this.password;
                window.auth_header = {
                    headers: {
                        Authorization: 'Basic ' +
                        btoa(window.auth_email + ':' + window.auth_password),
                        Accept: 'application/json',
                    }
                };
                this.$http.post(
                    'http://www.slw.app/auth/login', {}, window.auth_header
                ).then((response) => {
                    if (response.body.code == 200) {
                        /**
                         * 检测登录返回状态，成功则跳转
                         */
                        this.$router.push('index');
                    } else if (response.body.code == 40401) {
                        let captain_name = '';
                        do {
                            captain_name = prompt("请输入舰长名称");
                        } while (!captain_name);
                        this.postFleet(captain_name);
                    } else {
                        this.$exception.render(response.body.code, response.body.msg);
                    }
                }, (response) => {
                    alert('连接服务器失败');
                });
            },
            goRegister: function () {
                this.$router.push('register');
            },
            postFleet: function (name) {
                this.$http.post(
                    'http://www.slw.app/fleets', { name: name }, window.auth_header
                ).then((response) => {
                    this.$router.push('index');
                }, (response) => {
                    console.log(response);
                });
            },
        },
    }
</script>

<style>
    #login {

    }
</style>
