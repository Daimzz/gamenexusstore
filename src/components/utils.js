//функция для расчета общей стоимости товаров
export const calcTotalPrice = (items) => {
  return items.reduce((acc, val) => (acc += val.price), 0);
};

//функция для склонения слова в зависимости от количества товаров
const getWordForm = (number, one, two, five) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};

//Формирует текст заказа, на основе склонения слов и общей стоимости товаров
export const generateTextCount = (
  items,
  calcPrice,
  firstWord,
  secondWord,
  thirdWord,
) => {
  const wordForm = getWordForm(items.length, firstWord, secondWord, thirdWord);
  return `Ваш заказ: ${items.length} ${wordForm} на сумму ${calcPrice(items)} ₽`;
};
