/* eslint-disable */
function toLabelReturner() {
  let map;
  if (!map) {
    map = {};
    this.forEach(item => {
      map[item.value] = item.label;
    });
  }
  return function (value) {
    if (arguments.length && value === undefined) {
      return undefined
    }
    if (arguments.length) {
      return map[value]
    }
    return map;
  };
}

function toValueReturner() {
  let map;
  if (!map) {
    map = {};
    this.forEach(item => {
      map[item.label] = item.value;
    });
  }
  return function (label) {
    if (arguments.length && label === undefined) {
      return undefined
    }
    if (arguments.length) {
      return map[label]
    }
    return map
  }
}

function format(array = [], options) {
  const { valueKey = 'value', labelKey = 'label', deleteOldKey = false } = options;
  return array.map(item => {
    const result = JSON.parse(JSON.stringify(item));
    result.value = item[valueKey];
    result.label = item[labelKey];
    if (valueKey !== 'value' && deleteOldKey) {
      delete result[valueKey];
    }
    if (labelKey !== 'label' && deleteOldKey) {
      delete result[labelKey]
    }
    return result
  })
}

function obj2array (obj) {
  const array = []
  for (const [key, val] of Object.entries(obj)) {
    array.push({
      value: parseInt(key, 10),
      label: val
    })
  }
  return array
}

export default function createLabelArray(arr, options) {
  let array
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    array = JSON.parse(JSON.stringify(arr))
  } else {
    array = obj2array(arr)
  }
  if (options) {
    array = format(array, options)
  }
  array.toLabel = toLabelReturner.call(array)
  array.toValue = toValueReturner.call(array)
  array.invert = label => array.toValue.call(array, label)
  return function (value) {
    return arguments.length ? array.toLabel.call(array, value) : array
  }
}