## toLabel()

> 数字转文字的方法
- **参数**
  * `{ number } param`

### 示例
```javascript
const AD_TYPE_ARRAY = LabelArray([
  { value: 0, label: '苹果广告' },
  { value: 1, label: '雪梨广告' }
])

AD_TYPE_ARRAY.toLabel(0) //苹果广告
AD_TYPE_ARRAY.toLabel(1) //雪梨广告       
```


## toValue()

> 文字转数字的方法
- **参数**
  * `{ string } param`

### 示例
```javascript
const AD_TYPE_ARRAY = LabelArray([
  { value: 0, label: '苹果广告' },
  { value: 1, label: '雪梨广告' }
])

AD_TYPE_ARRAY.toLabel("苹果广告") //0
AD_TYPE_ARRAY.toLabel("雪梨广告") //1    
```


