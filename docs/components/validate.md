---
title: Validate
---
 # Validate

简单用法

<validate-demos></validate-demos>

代码

``` js
<div class="form-wrapper">
    <form class="form" @submit.prevent="onSubmit">
        <h1>登录</h1>
        <demo-form-row lable="邮箱" :error="errors.email">
            <g-input type="text" v-model="user.email"></g-input>
        </demo-form-row>
        <demo-form-row lable="密码" :error="errors.password">
            <g-input type="password" v-model="user.password"></g-input>
        </demo-form-row>
        <div>
            <g-button class="ok" type="submit">提交</g-button>
        </div>
    </form>
</div>

export default {
    components: {
        DemoFormRow,
        GButton,
        GInput
    },
    mixins:[formMixin],
    data(){
        return {
            user:{
                email:'',
                password:''
            },
            rules:[
                {
                    key:'email',pattern:'email',required:true
                },
                {
                    key:'password',minLength:6,required:true
                }
            ]
        }
    },
    methods: {
        onSubmit(){
            this.validate(this.user)
        }
    }
};
```