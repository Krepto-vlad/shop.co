import { createStarRating } from './starsCreate';

export type Product = {
  id: string | number;
  category: string;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
};

export function createProductCard(product: Product): HTMLElement {
  const card = document.createElement('a');
  card.className = 'product_card';
  card.href = `${product.category}/${product.id}`;

  const discountPrice =
    product.price - (product.price * product.discountPercentage) / 100;
  const starsHTML = createStarRating(product.rating);

  card.innerHTML = `
      <img class="img_thumb" src="${product.thumbnail}" alt="${product.title}">
      <p class="product_title">${product.title}</p>
      <div class="product_rating">
                  ${starsHTML}
            <span>${product.rating} / 5</span>
      </div>
      <div class="product_prices">
        <p class="product_price">$${discountPrice.toFixed(2)}</p>
        <p class="original_price">$${product.price}</p>
        <p class="discount">-${product.discountPercentage}%</p>
      </div>
    `;

  return card;
}
