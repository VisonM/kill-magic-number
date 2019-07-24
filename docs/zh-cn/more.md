### demo

1. 后端返回的数据
  
```javascript
    list: [
      { ad_type: 0, ad_time: 2, ad_enable: 1 },
      { ad_type: 1, ad_time: 0, ad_enable: 0 },
      { ad_type: 0, ad_time: 1, ad_enable: 1 }
    ]
```

2. 声明
  
```javascript
    const AD_TYPE_ARRAY = LabelArray([
      { value: 0, label: '苹果广告' },
      { value: 1, label: '雪梨广告' }
    ])
    const AD_TIME_TYPE_ARRAY = LabelArray([
      { value: 0, label: '晨间广告' },
      { value: 1, label: '午间广告' },
      { value: 2, label: '夜间广告' }
    ])
    const AD_ENABLE_TYPE_ARRAY = LabelArray([
      { value: 0, label: '下架' },
      { value: 1, label: '启用' }
    ])

```


<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
  <template>
    <div class="ad-manage__page">
      <h3>广告管理</h3>
      <el-table :data="myList" border>
        <el-table-column label="广告类型">
          <template slot-scope="scope">
            {{AD_TYPE_ARRAY.toLabel(scope.row.ad_type)}}
            {{scope.row.ad_type}}
          </template>
        </el-table-column>
        <el-table-column label="广告时间">
          <template slot-scope="scope">
            {{AD_TIME_TYPE_ARRAY.toLabel(scope.row.ad_time)}}
            {{scope.row.ad_time}}
          </template>
        </el-table-column>
        <el-table-column label="广告状态">
          <template slot-scope="scope">
            {{AD_ENABLE_TYPE_ARRAY.toLabel(scope.row.ad_enable)}}
            {{scope.row.ad_enable}}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="onLoadForm(scope.row)" type="primary">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="编辑框" :visible.sync="myForm.id">
        <h4>当前编辑的id: {{myForm.id || '无'}}</h4>
        <el-form label-width="120px" width="500px">
          <el-form-item label="广告类型：">
            <el-select v-model="myForm.ad_type">
              <el-option 
                v-for="item in AD_TYPE_ARRAY" 
                :key="item.value"
                :label="`${item.label}${item.value}`" 
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="广告时间：">
            <el-select v-model="myForm.ad_time">
              <el-option 
                v-for="item in AD_TIME_TYPE_ARRAY" 
                :key="item.value"
                :label="`${item.label}${item.value}`" 
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="广告状态：">
            <el-select v-model="myForm.ad_enable">
              <el-option 
                v-for="item in AD_ENABLE_TYPE_ARRAY" 
                :key="item.value"
                :label="`${item.label}${item.value}`" 
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-button @click="submit" type="primary">更新</el-button>
      </el-dialog>
    </div>
  </template>
  <script>
    
    const AD_TYPE_ARRAY = LabelArray([
      { value: 0, label: '苹果广告' },
      { value: 1, label: '雪梨广告' }
    ])
    console.log(AD_TYPE_ARRAY)
    const AD_TIME_TYPE_ARRAY = LabelArray([
      { value: 0, label: '晨间广告' },
      { value: 1, label: '午间广告' },
      { value: 2, label: '夜间广告' }
    ])
    const AD_ENABLE_TYPE_ARRAY = LabelArray([
      { value: 0, label: '下架' },
      { value: 1, label: '启用' }
    ])
    module.exports = {
      data: function () {
        return { 
          AD_TYPE_ARRAY,
          AD_TIME_TYPE_ARRAY,
          AD_ENABLE_TYPE_ARRAY,
          myList: [],
          myForm: {}
         }
      },
      mounted(){
        this.mock().then(res => {
          this.myList = res.list
        })
      },
      methods:{
        mock () {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve({
                list: [
                  { id: this.$getUuid(), ad_type: 0, ad_time: 2, ad_enable: 1 },
                  { id: this.$getUuid(), ad_type: 1, ad_time: 0, ad_enable: 0 },
                  { id: this.$getUuid(), ad_type: 0, ad_time: 1, ad_enable: 1 }
                ]
              })
            }, 500)
          })
        },
        onLoadForm (item) {
          this.myForm = JSON.parse(JSON.stringify(item))
        },
        submit () {
          const editedItem = this.myList.find(item => item.id === this.myForm.id)
          const editedIndex = this.myList.indexOf(editedItem)
          this.$set(this.myList, editedIndex, JSON.parse(JSON.stringify(this.myForm)))
          this.$message({
            message: '更新成功',
            type: 'success',
            onClose:()=>{
              console.log("hey")
            }
          });
          this.myForm={}
        }
      }
    }
  </script>
</script>