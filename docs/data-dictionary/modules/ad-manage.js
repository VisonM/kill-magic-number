import TypeArray from '../type-array'

// NUM_TYPE收集所有字符串代表数字：
const NUM_ALIAS = {
  FALSE: 0,
  TRUE: 1,
  AD_APPLE: 0,
  AD_PEAR: 1,
  AD_TIME_MORNING: 0,
  AD_TIME_NOON: 1,
  AD_TIME_NIGHT: 2
}
Object.freeze(NUM_ALIAS)

const AD_TYPE_ARRAY = new TypeArray(
  { value: NUM_ALIAS.AD_APPLE, label: '苹果广告' },
  { value: NUM_ALIAS.AD_PEAR, label: '雪梨广告' }
)
const AD_TIME_TYPE_ARRAY = new TypeArray(
  { value: NUM_ALIAS.AD_TIME_MORNING, label: '晨间广告' },
  { value: NUM_ALIAS.AD_TIME_NOON, label: '午间广告' },
  { value: NUM_ALIAS.AD_TIME_NIGHT, label: '夜间广告' }
)
const AD_ENABLE_TYPE_ARRAY = new TypeArray(
  { value: NUM_ALIAS.FALSE, label: '下架' },
  { value: NUM_ALIAS.TRUE, label: '启用' }
)

export default {
  NUM_ALIAS,
  AD_TYPE_ARRAY,
  AD_TIME_TYPE_ARRAY,
  AD_ENABLE_TYPE_ARRAY
}
