<template>
  <div>
    <el-form :model="form" class="loginstype" label-position="left">

      <el-form-item label="账号">
        <el-input v-model="form.userAccount" type="text" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="loginSubmit();">登陆</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        form: {
          userAccount: '',
          pwd: ''
        },
        users: {
          userAccount: '',
          pwd: ''
        },
        msg: '',
        list: []
      }
    },
    methods: {
      loginSubmit() {
        sessionStorage.setItem('isLogin', 'true');
        this.$store.dispatch('asyncUpdateUser',{userName:this.form.userAccount,pwd:this.form.pwd});
        this.$router.push({name:'Success',params:{userName:this.form.userAccount}});


        // this.axios.get('http://localhost:8080/test',
        //   {
        //     params: {
        //       userName: 123456
        //     }
        //
        //   }
        // )
        //   .then((response) => {
        //
        //     const result = response.data;
        //
        //     this.form = result.obj;
        //     alert(this.form.userAccount);
        //
        //
        //   })
        //   .catch(function (error) {
        //     alert("失败");
        //     console.log(error);
        //   })
        //   .then(function () {
        //     // always executed
        //   });

      }
    }
  }
</script>

<style scoped>
  .loginstype {
    width: 300px;
    margin: 180px auto;
    border: 1px solid #DCDFE6;
    padding: 26px;
    border-radius: 4px;
    box-shadow: 0 0 25px #DCDFE6;
  }
</style>
