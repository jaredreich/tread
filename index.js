function tread (oldObject, newObject, strict) {
  var obj = oldObject
  for (var key in newObject) {
    if (typeof obj[key] === 'object') {
      tread(obj[key], newObject[key])
    } else {
      if (strict) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = newObject[key]
        }
      } else {
        obj[key] = newObject[key]
      }
    }
  }
  return obj
}

module.exports = tread
