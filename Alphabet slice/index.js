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
