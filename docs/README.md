# 开发指南

> An awesome project.

<vuep template="#example">

</vuep>

<script v-pre type="text/x-template" id="example">
  <template>
    <div>
      <div>Hello, {{ name }}!</div>
      <el-button @click="visible = true">Button</el-button>
      <el-dialog
        title="提示"
        :visible.sync="visible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>    
    </div>
  </template>

  <script>
    
    module.exports = {
      data: function () {
        return { 
          name: 'Vue',
          visible:false
         }
      },
      mounted(){
      },
      methods:{
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        }
      }
    }
  </script>
</script>
