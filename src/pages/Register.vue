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
                    <div v-html="code_html" @click="audioWelcome"></div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-8">
                    <div class="well well-lg">
                        注意：目前处于 Alpha 版本中，游戏记录随时可能被删除
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
            audioWelcome: function () {
                this.$audio.play('welcome');
                this.generate();
            },
            getAuthCode: function () {
                this.$http.get(
                    this.$api.get('auth/code')
                ).then((response) => {
                    this.code_html = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            postAuthRegister: function () {
                this.$http.post(
                    this.$api.get('auth/register'), { email: this.email, password: this.password }
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
            /**
             * 专用于 验证码
             */
            generate: function () {
                document.getElementById('loading').style.display = '';
                document.getElementById('check_box').style.display = 'none';
                document.getElementById('check_right').style.display = 'none';

                this.$http.get(this.$api.get('auth/code-generate')).then((response) => {
                    setTimeout(function () {
                        this.valid();
                    }.bind(this), response.body * 1000);
                }, (response) => {
                    console.log(response);
                });
            },
            valid: function () {
                this.$http.get(this.$api.get('auth/code-valid')).then((response) => {
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('check_box').style.display = 'none';
                    document.getElementById('check_right').style.display = '';
                }, (response) => {
                    console.log(response);
                });
            },
        },
    }
</script>

<style>

</style>
