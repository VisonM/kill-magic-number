/**
 * @deprecated 其他模块已有同样的实现
 */
/* eslint-disable */
const bindProperty = (array, property, key, value)=>{
  let values = {};
  array.forEach(item=>{
    values[item[key]] = item[value];
  });

  Object.defineProperty(array, property, {
    value: values,
    enumerable: false,
    configurable: false,
    write: false,
  });
}

export default function magicArray() {
  let args = Object.prototype.toString.call(arguments[0]) === '[object Array]' ? arguments[0] : arguments;
  const array = [...args];
  bindProperty(array, 'labels', 'value', 'label');
  bindProperty(array, 'values', 'label', 'value');
  return array;
}