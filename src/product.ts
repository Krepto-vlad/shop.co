import { createProductTemplate, Product } from './productCard';

export async function fetchProduct(productId: number): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await res.json();
  return product;
}

export async function createProductContent(productId: number) {
  const product = await fetchProduct(productId);
  const productDetails = createProductTemplate(product);
  const productMain = document.getElementById('product_main_content');

  if (productMain) {
    productMain.innerHTML = '';
    productMain.appendChild(productDetails);
  }
}
export function renderProductPage(productId: number) {
  const main = document.createElement('main');
  main.id = 'product_main_content';
  document.body.appendChild(main);
  createProductContent(productId);
}
