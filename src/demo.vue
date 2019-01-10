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
import GButton from "./button/button.vue";
import GInput from "./input.vue";
import DemoFormRow from "./demo-form-row.vue";
import formMixin from './form-mixin'

export default {
  name: "demo",
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
          console.log(this.errors)
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
body{
    background:#888;
}
</style>
<style scoped lang="scss">
.form{
    background:white;
    padding:24px;
    border-radius:8px;
    margin-top:36px;
    min-height:60vh;
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

.wrapper{
  /* margin:40px; */
}
.box{
  width:100%;
  height:350px;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:30px;
}
</style> 
