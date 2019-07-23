import TypeArray from '../type-array'
import createLabelArray from '../create-label-array'
// import magicArray from '../magic-array'
import labelArray from '../label-array'

// NUM_TYPE收集所有字符串代表数字：
const NUM_ALIAS = {
  FALSE: 0,
  TRUE: 1,
  TRASH_DRY: 0,
  TRASH_WET: 1,
  TRASH_RECYCLE: 2,
  TRASH_HARMFUL: 3,
  TRASH_POSITION_FRONT: 0,
  TRASH_POSITION_END: 1
}
Object.freeze(NUM_ALIAS)

const TRASH_POSITION_TYPE_ARRAY = new TypeArray(
  { value: NUM_ALIAS.TRASH_POSITION_FRONT, label: '前门垃圾桶' },
  { value: NUM_ALIAS.TRASH_POSITION_END, label: '后门垃圾桶' }
)
// const TRASH_TYPE_ARRAY = new TypeArray(
//   { value: NUM_ALIAS.TRASH_DRY, label: '干垃圾' },
//   { value: NUM_ALIAS.TRASH_WET, label: '湿垃圾' },
//   { value: NUM_ALIAS.TRASH_RECYCLE, label: '可回收垃圾' },
//   { value: NUM_ALIAS.TRASH_HARMFUL, label: '有害垃圾' }
// )

const TRASH_TYPE_ARRAY = createLabelArray([
  { value: NUM_ALIAS.TRASH_DRY, label: '干垃圾' },
  { value: NUM_ALIAS.TRASH_WET, label: '湿垃圾' },
  { value: NUM_ALIAS.TRASH_RECYCLE, label: '可回收垃圾' },
  { value: NUM_ALIAS.TRASH_HARMFUL, label: '有害垃圾' }
])

// const TRASH_BIN_STATE_LABEL_ARRAY = new TypeArray(
//   { value: NUM_ALIAS.FALSE, label: '弃用垃圾桶' },
//   { value: NUM_ALIAS.TRUE, label: '启用垃圾桶' }
// )

const TRASH_BIN_STATE_LABEL_ARRAY = labelArray([
  { value: NUM_ALIAS.FALSE, label: '弃用垃圾桶' },
  { value: NUM_ALIAS.TRUE, label: '启用垃圾桶' }
])

export default {
  NUM_ALIAS,
  TRASH_POSITION_TYPE_ARRAY,
  TRASH_TYPE_ARRAY,
  TRASH_BIN_STATE_LABEL_ARRAY
}
