export const SORT_MENU_TEXT: {
  id: number;
  text: string;
}[] = [
  { id: 1, text: 'Сначала в наличии' },
  { id: 2, text: 'По имени (A-Z)' },
  { id: 3, text: 'По имени (Z-A)' },
  { id: 4, text: 'Сначала новее' },
  { id: 5, text: 'Сначала старше' },
  { id: 6, text: 'Сначала дешевле' },
  { id: 7, text: 'Сначала дороже' },
];

export const config = {
  baseUrl: 'http://localhost:4000',

  headers: {
    'Content-Type': 'application/json',
  },
};
