export default async function fetchStoreItems() {
  const URL = 'https://fakestoreapi.com/products';
  const response = await fetch(URL);
  const storeItems = await response.json();

  return storeItems;
}
