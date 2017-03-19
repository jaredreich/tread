module.exports = tread

function tread (objOld, objNew, strict) {
  var obj = objOld
  for (var key in objNew) {
    if (typeof obj[key] === 'object') {
      tread(obj[key], objNew[key])
    } else {
      if (strict) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = objNew[key]
        }
      } else {
        obj[key] = objNew[key]
      }
    }
  }
  return obj
}
