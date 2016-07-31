module.exports = tread

function tread (objOld, objNew) {
  var obj = objOld
  for (var key in objNew) {
    if (obj.hasOwnProperty(key)) {
    	if (typeof obj[key] == 'object') {
      	tread(obj[key], objNew[key])
      } else {
      	obj[key] = objNew[key]
      }
    }
  }
  return obj
}
