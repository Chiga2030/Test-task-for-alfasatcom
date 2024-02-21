# Test-task-for-alfasatcom

### 1. Документация и защита кода
[link to file](./Alphabet%20slice/index.js)

```javascript
/**
 * Возвращает фрагмент алфавита, последовательности UTF-16, начиная со строчных английских букв.
 * Опционально можно указать символы которые будут пропущены.
 * @param {number} [from=number] - Начальный индекс.
 * @param {number} [to=number] - Конечный индекс.
 * @param {string[]} [exclude=string[]] - Массив символов, которые необходимо исключить из результата.
 * @returns {string} - Фрагмент алфавита.
 */
const alphabetSlice = (from = 0, to = 25, exclude = []) => {
  if (typeof from !== 'number' || typeof to !== 'number' || !Array.isArray(exclude)) {
    throw new Error('Один из параметров указан неверно.');
  }

  const content = [];
  for (let i = from; i <= to; i++) {
    const char = String.fromCharCode(97 + i);
    if (!exclude.includes(char)) {
      content.push(char);
    }
  }
  return content.join(' ');
};
```


### 2.1. Array.prototype.reduce
[link to file](./Hight%20order%20functions/Array-prototype-reduce/index.js)

```javascript
const result = someArray.reduce((acc, item, index) => {
  acc[String.fromCharCode(97 + index)] = item
  return acc
}, {})
```


### 2.2. Convert object to array
[link to file](./Hight%20order%20functions/Convert-object-to-array/index.js)

```javascript
// 2.2.1 Только действительных конечных чисел
const realFiniteNumberArr = someObject.myFilter(isRealFiniteNumber)
// 2.2.2 Только натуральных чисел
const naturalNumberArr = someObject.myFilter(isNaturalNumber)
// 2.3.3 Только объектов JS POJO (Plain Object)
const pojoArr = someObject.myFilter(isPOJO)
```

### 3. Demo-приложение
[Ссылка на репозиторий](https://github.com/Chiga2030/site-info-app)


### 4. Async queries
[link to file](./Async%20queries/index.js)

```javascript
(async function (query, addressList) {
  for(let i = 0; i < addressList.length; i++) {
    await fetch(query + '&url=' + addressList[i]).then(res => res.json()).then(console.log)
  }

  console.log('Выполнение завершено')
})(query, addressList)
```


### 5. Работа с DOM

Просто скопировать код и вставить в консоль на любой из вкладок браузера:
```javascript
const element = document.createElement("h1")
element.setAttribute('id', 'my-element')
element.setAttribute('my-before', 'init value - ')
element.innerText = 'this is new element'

const style = document.createElement('style');
style.innerText = '#my-element::before {content:attr(my-before);}';

document.head.appendChild(style);
document.body.prepend(element)


setInterval(() => {
  element.setAttribute('my-before', `${Date.now()} - `)
}, 1000)
```
