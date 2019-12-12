<template>
  <div>

    <el-cascader
      v-model="ruleForm.ap" :options="apOptions"
      change-on-select :show-all-levels="false"
      clearable :props="props"
    >
    </el-cascader>

  </div>
</template>

<script>
  export default {
    name: "UserContext",
    data() {
      return {
        props: {multiple: true},
        apOptions: [
          {
            value: '',
            label: '全部'
          }
          , {
            value: 'zhinan',
            label: '指南',
            children: [
              {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
          }
        ],
        ruleForm:{
          ap:[['zhinan','shejiyuanze','yizhi']]
        }
      };
    }
  }
</script>

<style scoped>

</style>
