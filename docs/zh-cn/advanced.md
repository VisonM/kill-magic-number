## 别名系统

如何解决复杂业务中的重名问题。例如
```
//数据分析接口返回
[{value:1,label:"垃圾回收率排第一"}]

//垃圾分类接口返回
[{value:1,label:"干垃圾"}]
```

原来的基础上，填多一个alias字段，label-array会生成 `TRASH_LABEL_ARRAY.aliases` :
```
const TRASH_LABEL_ARRAY = labelArray([
  { alias: 'TRASH_DRY', value: 0, label: '干垃圾' },
  { alias: 'TRASH_WET', value: 1, label: '湿垃圾' },
  { alias: 'TRASH_RECYCLE', value: 2, label: '可回收垃圾' },
  { alias: 'TRASH_HARMFUL', value: 3, label: '有害垃圾' }
]);

TRASH_LABEL_ARRAY.aliases <==> {
  TRASH_DRY: 0,
  TRASH_WET: 1,
  TRASH_RECYCLE: 2,
  TRASH_HARMFUL: 3
}

TRASH_LABEL_ARRAY.aliases.TRASH_HARMFUL // 3
```

如果你觉得这样使用太长了，label-array 默认会将`TRASH_LABEL_ARRAY.aliases`里面的属性都复制到`TRASH_LABEL_ARRAY`这一层，所以你可以这样使用:
```
TRASH_LABEL_ARRAY.TRASH_HARMFUL // 3
```

> 如果你不希望复制到上一层，配置options的`copyAlias: false`，则放弃复制aliases到上一层。


