import { ICard } from '../services/reducers/cards';

export const customSort = (option: string, cards: ICard[]) => {
  let sortedResult = [...cards];

  console.log(option);

  switch (option) {
    case 'Сначала в наличии':
      sortedResult = sortedResult.sort((a, b) =>
        a.availability === b.availability ? 0 : a.availability ? -1 : 1,
      );
      break;
    case 'По имени (A-Z)':
      sortedResult = sortedResult.sort((a, b) => a.brand.localeCompare(b.brand));
      break;
    case 'По имени (Z-A)':
      sortedResult = sortedResult.sort((a, b) => b.brand.localeCompare(a.brand));
      break;
    case 'Сначала старше':
      sortedResult = sortedResult.sort((a, b) => a.model_year - b.model_year);
      break;
    case 'Сначала новее':
      sortedResult = sortedResult.sort((a, b) => b.model_year - a.model_year);
      break;
    case 'Сначала дешевле':
      sortedResult = sortedResult.sort(
        (a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')),
      );
      break;
    case 'Сначала дороже':
      sortedResult = sortedResult.sort(
        (a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')),
      );
      break;
    default:
      break;
  }
  console.log();

  return {
    sortCards: sortedResult,
    option,
  };
};
