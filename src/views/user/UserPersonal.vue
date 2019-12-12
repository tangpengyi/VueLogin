<template>
  <div>
    <div class="block">
      <!--collapse-tags clearable-->
      <span  class="demonstration">权限
        <el-cascader :options="options" :show-all-levels="false"
                     :props="props" change-on-select
                     ref="cascaderAddr" v-model="selectedOptions"
                     @change="handleChange">
        </el-cascader>
        </span>

      <el-button type="primary" @click="queryResult()">查看结果</el-button>

    </div>
  </div>
</template>

<script>
  export default {

    name: "UserPersonal",
    data() {
      return {
        selectedOptions:[['权限','删除权限'],['权限','添加权限']],
        props: {multiple: true},
        index:1,
        options: [{
          value: '权限',
          label: '权限',
          children: [{
            value: '删除权限',
            label: '删除权限',
          },{
            value: '添加权限',
            label: '添加权限',
          },{
            value:'修改权限',
            label:'修改权限'
          },{
            value:'查询权限',
            label:'查询权限'
          }]
        },{
        value: '授权权限',
          label: '授权权限',
          children: [{
          value: '删除授权权限',
          label: '删除授权权限',
        },{
          value: '添加授权权限',
          label: '添加授权权限',
        },{
          value:'修改授权权限',
          label:'修改授权权限'
        },{
          value:'查询授权权限',
          label:'查询授权权限'
        }]
      }]
      };
    },
    methods: {
      handleChange() {
        console.log(this.selectedOptions);
      },
      queryResult: function () {
        console.log('查看结果');
        console.log(this.selectedOptions);
        this.selectedOptions.forEach(items=>{
          this.index = 1;
          items.forEach(item=>{

            if(this.index == 3){
              console.log(item);
            }
            this.index = this.index+1;
          });
        });
      }
    }
  }
</script>

<style scoped>

</style>
