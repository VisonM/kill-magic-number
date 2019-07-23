function bindPropertyValue(obj, property, value) {
  Object.defineProperty(obj, property, {
    configurable: false,
    enumerable: false,
    value: value,
    writable: false
  });
}

function createFieldMap(arr, key, value) {
  let map = {};
  arr.forEach(item => {
    map[item[key]] = item[value];
  });
  return map;
}

function toLabel(value) {
  return this.labels[value];
}

function toValue(label) {
  return this.values[label];
}

function format(array = [], options) {
  const {
    valueKey = "value",
    labelKey = "label",
    deleteOldKey = false
  } = options;
  return array.map(item => {
    const result = JSONparseSafe(JSON.stringify(item));
    result.value = item[valueKey];
    result.label = item[labelKey];
    if (valueKey !== "value" && deleteOldKey) {
      delete result[valueKey];
    }
    if (labelKey !== "label" && deleteOldKey) {
      delete result[labelKey];
    }
    return result;
  });
}

function obj2array(obj) {
  const array = [];
  let value;
  let isCustomError = false;
  try {
    for (const [key, val] of Object.entries(obj)) {
      value = parseInt(key, 10);
      if (isNaN(value)) {
        isCustomError = true;
        throw Error("Invalid parameter: " + JSON.stringify(obj));
      }
      array.push({
        value,
        label: val
      });
    }
  } catch (e) {
    if (isCustomError) throw e;
    throw Error("Parse Object to Array fail, when constructing");
  }
  return array;
}

function isObject(item) {
  return Object.prototype.toString.call(item) === "[object Object]";
}

function validArrayFormat(arr) {
  const hasInvalid = arr.some(item => {
    return !isObject(item);
  });
  if (hasInvalid) {
    throw Error("Array format invalid");
  }
}

function JSONparseSafe(string, append) {
  try {
    return JSON.parse(string);
  } catch (e) {
    console.log("JSON.parse() fail");
    return append || {};
  }
}

function validOptionsFormat(options) {
  if (!isObject(options)) {
    throw Error('parameter "options" invalid');
  }
}

export default function labelArray(arr, options) {
  let array;
  if (Object.prototype.toString.call(arr) === "[object Array]") {
    validArrayFormat(arr);
    array = JSONparseSafe(JSON.stringify(arr), []);
  } else {
    array = obj2array(arr);
  }
  if (options) {
    validOptionsFormat(options);
    array = format(array, options);
  }

  bindPropertyValue(array, "labels", createFieldMap(array, "value", "label"));
  bindPropertyValue(array, "values", createFieldMap(array, "label", "value"));
  bindPropertyValue(array, "toLabel", toLabel.bind(array));
  bindPropertyValue(array, "toValue", toValue.bind(array));

  array.forEach(item => Object.freeze(item));
  Object.freeze(array);

  return array;
}
