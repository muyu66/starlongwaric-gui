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
                    <input v-on:keyup.enter="getAuthLogin" v-model="password" type="password" class="form-control">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-8">
                    <button type="submit" v-on:click="getAuthLogin" class="btn btn-default">登录</button>
                    <button type="submit" class="btn btn-default">注册</button>
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
            }
        },
        name: 'login',
        methods: {
            getAuthLogin: function () {
                window.auth_email = this.email;
                window.auth_password = this.password;
                window.auth_header = {
                    headers: {
                        Authorization: 'Basic ' +
                        btoa(window.auth_email + ':' + window.auth_password)
                    }
                }
                this.$http.get(
                    'http://www.slw.app/auth/login', window.auth_header
                ).then((response) => {
                    if (response.body.status) {
                        /**
                         * 检测登录返回状态，成功则跳转
                         */
                        this.$router.push('index');
                    } else {
                        alert('error');
                    }
                }, (response) => {
                    console.log(response);
                });
            }
        },
    }
</script>

<style>
    #login {

    }
</style>
