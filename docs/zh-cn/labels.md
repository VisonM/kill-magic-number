## labels
> 获取实例的labels属性，value转label的map
### 示例
```

const AD_TYPE_ARRAY = LabelArray([
  { value: 0, label: '苹果广告' },
  { value: 1, label: '雪梨广告' }
])

//console.log(AD_TYPE_ARRAY.labels)
{
  0: "苹果广告",
  1: "雪梨广告"
}           
```

## values
> 获取实例的labels属性，value转label的map
### 示例
```

const AD_TYPE_ARRAY = LabelArray([
  { value: 0, label: '苹果广告' },
  { value: 1, label: '雪梨广告' }
])

//console.log(AD_TYPE_ARRAY.values)
{
  苹果广告:0,
  雪梨广告:1
}           
```