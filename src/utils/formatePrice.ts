export const formatePrice = (price: string): string => {
    const numericPrice = parseFloat(price.replace('$', ''));
    return numericPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };