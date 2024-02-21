const someArray = [1,2,3,4,5,6,7,8,9,10]

const result = someArray.reduce((acc, item, index) => {
  acc[String.fromCharCode(97 + index)] = item
  return acc
}, {})
