const query = 'https://whatcms.org/API/Tech?key=6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8';
const addressList = ['ya.ru', 'google.com', 'vk.com', 'twitter.com', 'habr.com', 'github.com', 'mail.ru', 'notexist1', 'notexist2', 'notexist3'];


(async function (query, addressList) {
  for(let i = 0; i < addressList.length; i++) {
    await fetch(query + '&url=' + addressList[i]).then(res => res.json()).then(console.log)
  }

  console.log('Выполнение завершено')
})(query, addressList);


/**
 * Альтернативный вариант:
 */

(function (query, addressList) {
  let counter = 0
  const queryList = addressList.map((address) => {
    return fetch(query + '&url=' + address)
      .then(res =>res.json())
      .then(console.log)
      .then(() => {
        counter++
        if (counter === queryList.length) {
          console.log('Выполнение завершено')
        }
      })
  })

  Promise.allSettled(queryList)
})(query, addressList);
