// Максимально лаконично преобразуйте объект в массив с фильтрацией [[key, value]]
const someObject = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: NaN, l: 0, m: 0.25, n: null, o: {}, p: [], r:Infinity, s: undefined}


function isRealFiniteNumber (arg) {
  if (Number.isNaN(arg) || !Number.isFinite(arg)) {
    return false
  } return true
}

function isNaturalNumber (arg) {
  if ((!Number.isInteger(arg) && arg !== Infinity) || Number.isNaN(arg) || (Number(arg) <= 0)) {
    return false
  } return true
}

function isPOJO (arg) {
  if (arg === null || typeof arg !== 'object') {
    return false;
  }
  const proto = Object.getPrototypeOf(arg)
  return proto === Object.prototype
}


function myFilter (predicateFunc) {
  const result = []

  for (const [key, value] of Object.entries(this)) {
    if (predicateFunc(value)) {
      result.push([key, value])
    }
  }

  return result
}

Object.prototype.myFilter = myFilter

// 2.2.1 Только действительных конечных чисел
const realFiniteNumberArr = someObject.myFilter(isRealFiniteNumber)
// 2.2.2 Только натуральных чисел
const naturalNumberArr = someObject.myFilter(isNaturalNumber)
// 2.3.3 Только объектов JS POJO (Plain Object)
const pojoArr = someObject.myFilter(isPOJO)



/**
 * Альтернативное решение:
 */

// 2.2.1 Только действительных конечных чисел
const realFiniteNumberArr2 = []
// 2.2.2 Только натуральных чисел
const naturalNumberArr2 = []
// 2.3.3 Только объектов JS POJO (Plain Object)
const pojoArr2 = []

for (const [key, value] of Object.entries(someObject)) {
  if (isRealFiniteNumber(value)) {
    realFiniteNumberArr2.push([key, value])
  }

  if (isNaturalNumber(value)) {
    naturalNumberArr2.push([key, value])
  }

  if (isPOJO(value)) {
    pojoArr2.push([key, value])
  }
}
