<template>
    <div id="register">
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
                    <div class="well well-lg">
                        注意：目前处于删档版本中
                    </div>
                    <div class="well well-lg">
                        协议：目前还在想
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-8">
                    <button type="submit" @click="postAuthRegister" class="btn btn-default">注册</button>
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
        name: 'register',
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
            postAuthRegister: function () {
                this.$http.post(
                    'http://www.slw.app/auth/register', { email: this.email, password: this.password }
                ).then((response) => {
                    if (response.body.code == 200) {
                        /**
                         * 检测登录返回状态，成功则跳转
                         */
                        this.$router.push('login');
                    } else {
                        this.$exception.render(response.body.code, response.body.msg);
                    }
                }, (response) => {
                    alert('连接服务器失败');
                });
            },
        },
    }
</script>

<style>

</style>
