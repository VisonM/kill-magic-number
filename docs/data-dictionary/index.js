// import TypeArray from './type-array';
import common from './modules/common'
import adManage from './modules/ad-manage'
import trashManage from './modules/trash-manage'
import userManage from './modules/user-manage'

/**
 * 收集所有字符串代表数字：
 */
const NUM_ALIAS = {
  ...common.NUM_ALIAS,
  ...adManage.NUM_ALIAS,
  ...trashManage.NUM_ALIAS,
  ...userManage.NUM_ALIAS,
  FALSE: 0,
  TRUE: 1
}
// 减少vue observe的负担：
Object.freeze(NUM_ALIAS)

export default {
  ...common,
  ...adManage,
  ...trashManage,
  ...userManage,
  // 在index.js的NUM_TYPE放最后，覆盖掉同名的字段：
  NUM_ALIAS
}

/**
 * bug:
 */
// 1.  NUM_ALIAS 里面的key经过Object.asign后字段名可以重复
