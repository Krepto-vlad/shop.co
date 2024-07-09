import { createStarRating } from './starsCreate';

export interface Product {
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
}

export function createProductTemplate(product: Product): HTMLElement {
  const productContainer = document.createElement('div');
  productContainer.className = 'product-details';

  const discountPrice =
    product.price - (product.price * product.discountPercentage) / 100;
  const starsHTML = createStarRating(product.rating);

  console.log(product);

  productContainer.innerHTML = `
<div class="product_page">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/" data-navigo>Home> </a></li>
      <li class="breadcrumb-item"><a href="/${product.category}" data-navigo>${
        product.category
      } > </a></li>
      <li class="breadcrumb-item">${product.title}</li>
    </ol>
  </nav>

    <div class="product_page_wrapper">
            <div class="imgColumn">
                ${product.images
                  .slice(0, 3)
                  .map((img) => `<img src="${img}" alt="${product.title}" >`)
                  .join('')}
            </div>
            <div class="container">
              <img id="expandedImg" src="${product.images[0]}">
            </div>
          
          <div class="product_text_container">
            <p class="product_title">${product.title}</p>
            <div class="product_rating">
                    ${starsHTML}
            <span class="rating">${product.rating} / 5</span>
            </div>
            <div class="price_container"> 
              <p class="product-price">$${discountPrice.toFixed(2)}</p>
              <p class="product-discount">$${product.price}</p>
              <p class="discount">-${product.discountPercentage}%</p>
            </div>
            <p class="description">${product.description}</p>
            <p class="product_brand">Brand</p>
            <p class="brand_name">${product.brand}</p>
            <p class="product_stock">in Stock</p>
            <p class="count_of_product">${product.stock}</p>
            <div class="product_button_container">
              <div class="quantity-control">
                <button class="decrease-btn"><img src= "../src/assets/images/Vectorminus.png"></button>
                <span class="quantity">0</span>
                <button class="increase-btn"><img src= "../src/assets/images/Vectorplus.png"></button>
              </div>
              <button class="add_to_card">add to card</button>
            </div>
          </div>
    </div>  
</div>
  `;

  productContainer.querySelectorAll('.imgColumn img').forEach((img) => {
    img.addEventListener('click', () => imageOpen(img as HTMLImageElement));
  });

  const decreaseBtn = productContainer.querySelector(
    '.decrease-btn',
  ) as HTMLButtonElement;
  const increaseBtn = productContainer.querySelector(
    '.increase-btn',
  ) as HTMLButtonElement;
  const quantitySpan = productContainer.querySelector(
    '.quantity',
  ) as HTMLSpanElement;

  const decreaseAmountOfGoods = () => {
    const currentQuantity = parseInt(quantitySpan.textContent || '0', 10);
    if (currentQuantity > 0) {
      quantitySpan.textContent = (currentQuantity - 1).toString();
    }
  };

  const increaseAmountOfGoods = () => {
    const currentQuantity = parseInt(quantitySpan.textContent || '0', 10);
    quantitySpan.textContent = (currentQuantity + 1).toString();
  };

  decreaseBtn.addEventListener('click', decreaseAmountOfGoods);

  increaseBtn.addEventListener('click', increaseAmountOfGoods);

  return productContainer;
}

function imageOpen(imgs: HTMLImageElement) {
  const expandImg = document.getElementById('expandedImg') as HTMLImageElement;
  if (expandImg) {
    document.querySelectorAll('.imgColumn img').forEach((img) => {
      img.classList.remove('selected-image');
    });

    imgs.classList.add('selected-image');

    expandImg.src = imgs.src;
    expandImg.parentElement!.style.display = 'block';
  }
}
