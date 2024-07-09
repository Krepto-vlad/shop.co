import { createProductCard, Product } from './categoryCardCreate';

export async function fetchProducts(category: string): Promise<Product[]> {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,
  );
  const response = await res.json();
  return response.products;
}

export function filterProducts(
  products: Product[],
  sort: string,
  minPrice: number,
  maxPrice: number,
): Product[] {
  let filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice,
  );

  if (sort === 'ascending') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  return filteredProducts;
}

export async function renderCategoryPage(
  category: string,
  sort: string,
  minPrice: number,
  maxPrice: number,
) {
  const products = await fetchProducts(category);
  const filteredProducts = filterProducts(products, sort, minPrice, maxPrice);
  const productsList = document.getElementById('product-list');

  if (productsList) {
    productsList.innerHTML = '';
    const productsListTitle = document.createElement('p');
    productsList.appendChild(productsListTitle);
    productsListTitle.className = 'products_list_title';
    productsListTitle.textContent = category;
    filteredProducts.forEach((product) => {
      const card = createProductCard(product);
      productsList.appendChild(card);
    });
  }
}

export function createCategoryDetailsMainContent(categoryName: string) {
  const category = categoryName;
  const filtersHTML = `
      <aside id="filters">
        <div class="filter_title">
        <p>Filters</p>
        <img src="src/assets/images/Vectoroptions.png" alt="options">
        </div>
        
        <div class="sort_section">
            <p>Sort</p>
            <label class="label_first">
                <input type="radio" name="sort" value="ascending" checked> Ascending
            </label>
            <label class="label_second">
                <input type="radio" name="sort" value="descending"> Descending
            </label>
        </div>
        <div class="filter-section">
            <p>Price</p>
            <div class="range_container">
                <div class="sliders_control">
                    <input type="range" id="min-price" min="0" max="1000" value="0">
                    <span id="min-price-value">0</span>
                    <input type="range" id="max-price" min="0" max="1000" value="1000">
                    <span id="max-price-value">1000</span>
                </div>
            </div> 
        </div>
        <button id="apply-filter" class="filter-section-button">Apply Filter</button>
        <button id="reset-filter" class="filter-section-button">Reset Filter</button>
      </aside>
    `;

  const breadcrumbs = `
    <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/">Home > </a></li>
      <li class="breadcrumb-item">${categoryName}</li>
    </ol>
  </nav>
  `;

  const main = document.createElement('main');
  main.className = 'categories_content_wrapper';

  const contentBox = document.createElement('div');
  contentBox.className = 'categories_content_box';

  const productsList = document.createElement('div');
  productsList.id = 'product-list';

  contentBox.insertAdjacentHTML('afterbegin', filtersHTML);
  contentBox.appendChild(productsList);

  main.insertAdjacentHTML('afterbegin', breadcrumbs);
  main.appendChild(contentBox);

  document.body.appendChild(main);

  let sort = 'ascending';
  let minPrice = 0;
  let maxPrice = 1000;

  renderCategoryPage(category, sort, minPrice, maxPrice);

  const minPriceInput = document.getElementById(
    'min-price',
  ) as HTMLInputElement;
  const maxPriceInput = document.getElementById(
    'max-price',
  ) as HTMLInputElement;
  const applyFilterButton = document.getElementById('apply-filter');
  const resetFilterButton = document.getElementById('reset-filter');

  minPriceInput.addEventListener('input', () => {
    const minPriceValue = document.getElementById('min-price-value');
    if (minPriceValue) {
      minPriceValue.textContent = minPriceInput.value;
    }
  });

  maxPriceInput.addEventListener('input', () => {
    const maxPriceValue = document.getElementById('max-price-value');
    if (maxPriceValue) {
      maxPriceValue.textContent = maxPriceInput.value;
    }
  });

  applyFilterButton?.addEventListener('click', () => {
    sort = (
      document.querySelector('input[name="sort"]:checked') as HTMLInputElement
    ).value;
    minPrice = parseInt(minPriceInput.value);
    maxPrice = parseInt(maxPriceInput.value);
    renderCategoryPage(category, sort, minPrice, maxPrice);
  });

  resetFilterButton?.addEventListener('click', () => {
    sort = 'ascending';
    minPrice = 0;
    maxPrice = 1000;
    minPriceInput.value = minPrice.toString();
    maxPriceInput.value = maxPrice.toString();
    document.getElementById('min-price-value')!.textContent =
      minPrice.toString();
    document.getElementById('max-price-value')!.textContent =
      maxPrice.toString();
    renderCategoryPage(category, sort, minPrice, maxPrice);
  });

  const sortInputs = document.querySelectorAll('input[name="sort"]');
  sortInputs.forEach((input) => {
    input.addEventListener('change', () => {
      document
        .querySelectorAll('.label_first, .label_second')
        .forEach((label) => {
          label.classList.remove('selected');
        });
      const checkedInput = document.querySelector('input[name="sort"]:checked');
      if (checkedInput) {
        checkedInput.parentElement!.classList.add('selected');
      }
    });
  });

  const initialCheckedInput = document.querySelector(
    'input[name="sort"]:checked',
  );
  if (initialCheckedInput) {
    initialCheckedInput.parentElement!.classList.add('selected');
  }
}
