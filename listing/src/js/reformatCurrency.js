export default function reformatCurrency(currency) {

  if(currency === 'USD') {
    return '$';
  }
  if(currency === 'EUR') {
    return '€';
  }
  return currency;
}