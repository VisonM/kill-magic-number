/* eslint-disable */
function valueToLabel() {
  let map;
  if (!map) {
    map = {};
    this.forEach(item => {
      map[item.value] = item.label;
    });
    map.invert = label => this.labelToValue(label);
  }
  return value => {
    const isValueExist = value !== undefined;
    return isValueExist ? map[value] : map;
  };
}

function labelToValue() {
  let map;
  if (!map) {
    map = {};
    this.forEach(item => {
      map[item.label] = item.value;
    });
    map.invert = value => this.valueToLabel(value);
  }
  return label => (label !== undefined ? map[label] : map);
}
/**
 * @class TypeArray 创建常量，不能在程序运行时被修改。
 * devDependencies依赖：extends Array语法编译依赖 babel-plugin-transform-builtin-extend，否则可能会访问不到 toLabel toValue属性
 * @returns new TypeArray(...) 创建的对象本身可以用于构建el-option
 */
/**
 * @example
 * const CASH_BACK_TYPE_ARRAY = new TypeArray(
 *   { value: 0, label: '按订单价返' },
 *   { value: 1, label: '定额返' },
 *   { value: 2, label: '特惠购' }
 * );
 * CASH_BACK_TYPE_ARRAY // 返回数组：[{ value: 0, label: '按订单价返' },{ value: 1, label: '定额返' },{ value: 2, label: '特惠购' }]
 * // ------ 分割线 ------
 * CASH_BACK_TYPE_ARRAY.toLabel() // value转label的map
 * CASH_BACK_TYPE_ARRAY.toLabel(0) // '按订单价返'
 * CASH_BACK_TYPE_ARRAY.toLabel(1) // '定额返'
 * CASH_BACK_TYPE_ARRAY.toLabel().invert() // 相当于CASH_BACK_TYPE_ARRAY.toValue()
 * CASH_BACK_TYPE_ARRAY.toLabel().invert('定额返') // 相当于CASH_BACK_TYPE_ARRAY.toValue('定额返')
 * // ------ 分割线 ------
 * CASH_BACK_TYPE_ARRAY.toValue() // label转value的map
 * CASH_BACK_TYPE_ARRAY.toValue('按订单价返') // 0
 * CASH_BACK_TYPE_ARRAY.toValue('定额返') // 1
 * CASH_BACK_TYPE_ARRAY.toValue().invert() // 相当于CASH_BACK_TYPE_ARRAY.toLabel()
 * CASH_BACK_TYPE_ARRAY.toValue().invert(1) // 相当于CASH_BACK_TYPE_ARRAY.toLabel(1)
 */

export default class TypeArray extends Array {
  constructor(...args) {
    super(...args);
    this.forEach(item => (Object.freeze(item)));
    this.valueToLabel = valueToLabel.call(this);
    this.labelToValue = labelToValue.call(this);
    Object.freeze(this);
  }

  // 简写，方便调用：
  toLabel(value) {
    return this.valueToLabel(value);
  }

  // 简写，方便调用：
  toValue(label) {
    return this.labelToValue(label);
  }

  /**
   * @param {String} 'options.valueKey' 将会被替换为value字段的字段
   * @param {String} 'options.labelKey' 将会被替换为label字段的字段
   * @param {Array} 'options.array' 操作的数组
   */
  static format(options) {
    const { array = [], valueKey = 'value', labelKey = 'label' } = options;
    return array.map(item => {
      const result = JSON.parse(JSON.stringify(item));
      result.value = item[valueKey];
      result.label = item[labelKey];
      if (valueKey !== 'value') {
        delete result[valueKey];
      }
      if (labelKey !== 'label') {
        delete result[labelKey];
      }
      return result;
    });
  }
}
