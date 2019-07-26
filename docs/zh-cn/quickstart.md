## 快速上手

>本节将介绍如何在项目中使用 label-array

### 引入 label-array
```
 npm i @iyourcar/label-array -D
```
### labelArray(obj,options) 的参数说明

| 参数    | 说明         | 类型   | 可选值                         | 必传 | 默认值 |
| ------- | ------------ | ------ | ------------------------------ | ---- | ------ |
| obj     | 要转换的对象 | Object | Array / Object                 | 是   | —      |
| options | 配置选项     | Object | Object`( 详见下方options表⬇️)` | 否   | —      |


- options
  
| 参数         | 说明                             | 类型    | 可选值 | 必传 | 默认值 |
| ------------ | -------------------------------- | ------- | ------ | ---- | ------ |
| valueKey     | 指定哪个属性作为value            | string  | -      | 否   | —      |
| labelKey     | 指定哪个属性作为label            | string  | -      | 否   | —      |
| deleteOldKey | 是否删除旧的key                  | boolean | -      | 否   | -      |
| copyAlias    | 是否将别名直接挂载到实例下来访问 | boolean | -      | 否   | true   |


### 使用示例
```
import labelArray from "@iyourcar/label-array"

const TRASH_LABEL_ARRAY = labelArray([
  { value: 0, label: '干垃圾' },
  { value: 1, label: '湿垃圾' },
  { value: 2, label: '可回收垃圾' },
  { value: 3, label: '有害垃圾' }
]);
```
`TRASH_LABEL_ARRAY`返回数组本身：
```
[
  {value: 0, label: '干垃圾' },
  { value: 1, label: '湿垃圾' },
  { value: 2, label: '可回收垃圾'},
  { value: 3, label: '有害垃圾'}
]
```
`TRASH_LABEL_ARRAY`方法调用：
```
TRASH_LABEL_ARRAY.labels // value转label的map

TRASH_LABEL_ARRAY.toLabel(0) // '干垃圾'

TRASH_LABEL_ARRAY.toLabel(1) // '湿垃圾'
​
TRASH_LABEL_ARRAY.values // label转value的map

TRASH_LABEL_ARRAY.toValue('干垃圾') // 0

TRASH_LABEL_ARRAY.toValue('湿垃圾') // 1
```

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
  <template>
    <div>
      <el-button @click="transfrom">查看详情</el-button>
      <el-dialog
        title="转换结果(控制台可查看完整输出)"
        :visible.sync="visible"
      >
        <el-divider content-position="center">实例.lables</el-divider>
        <div v-html="labelOutput"></div>

        <el-divider content-position="center">实例.values</el-divider>
        <div v-html="valueOutput"></div>

        <el-divider content-position="center">实例.toValue()</el-divider>
        <el-radio-group v-model="valueRadio">
          <el-radio :label="item.label" v-for="item in testData">{{item.label}}</el-radio>
        </el-radio-group>
        <div>{{testData.toValue(valueRadio)}}</div>

        <el-divider content-position="center">实例.toLabel()</el-divider>
        <el-radio-group v-model="labelRadio">
          <el-radio :label="item.value" v-for="item in testData">{{item.value}}</el-radio>
        </el-radio-group>
        <div>{{testData.toLabel(labelRadio)}}</div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="visible = false">取 消</el-button>
          <el-button type="primary" @click="visible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </template>

  <script>
    const testData=LabelArray([
      { alias: 'TRASH_DRY', value: 0, label: '干垃圾' },
      { alias: 'TRASH_WET', value: 1, label: '湿垃圾' },
      { alias: 'TRASH_RECYCLE', value: 2, label: '可回收垃圾' },
      { alias: 'TRASH_HARMFUL', value: 3, label: '有害垃圾' }
    ])
    module.exports = {
      data: function () {
        return { 
          testData,
          visible:false,
          labelOutput:"",
          valueOutput:"",
          labelRadio:"",
          valueRadio:""
        }
      },
      methods:{
        transfrom(){
          console.log("____转换结果_____",this.testData)
          const labelStr = JSON.stringify(this.testData.labels, null, 4);
          const valueStr = JSON.stringify(this.testData.values, null, 4);
          this.labelOutput = labelStr.replace(/\n/g, '<br>').replace(/\s/g, '&nbsp');
          this.valueOutput = valueStr.replace(/\n/g, '<br>').replace(/\s/g, '&nbsp');
          this.visible=true
        }
      }
    }
  </script>
</script>