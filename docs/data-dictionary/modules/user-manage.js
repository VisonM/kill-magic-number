import TypeArray from '../type-array'

// NUM_TYPE收集所有字符串代表数字：
const NUM_ALIAS = {
  FALSE: 0,
  TRUE: 1,
  USER_NORMAL: 0,
  USER_VIP: 1,
  USER_SUPER_VIP: 2
}
Object.freeze(NUM_ALIAS)

const USER_TYPE_ARRAY = new TypeArray(
  { value: NUM_ALIAS.USER_NORMAL, label: '普通用户' },
  { value: NUM_ALIAS.USER_VIP, label: '普通会员' },
  { value: NUM_ALIAS.USER_SUPER_VIP, label: '超级会员' }
)
const USER_ENABLE_TYPE_ARRAY = new TypeArray(
  { value: NUM_ALIAS.FALSE, label: '冻结用户' },
  { value: NUM_ALIAS.TRUE, label: '启用用户' }
)

export default {
  NUM_ALIAS,
  USER_TYPE_ARRAY,
  USER_ENABLE_TYPE_ARRAY
}
