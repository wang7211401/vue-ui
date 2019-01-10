<template>
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
</template>
<script>
import GButton from "../../../src/button/button.vue";
import GInput from "../../../src/input.vue";
import DemoFormRow from "../../../src/demo-form-row.vue";
import formMixin from '../../../src/form-mixin'

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
  },

};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
<style scoped lang="scss">
.form{
    background:white;
    padding:24px;
    border-radius:8px;
    margin-top:36px;
    &-wrapper{
        display:flex;
        justify-content:center;
    }
    .ok{
        display:block;
        width:100%;
        margin-top:24px;
    }
}
</style> 
