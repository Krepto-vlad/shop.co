export async function fetchCategories(): Promise<string[]> {
  const res = await fetch('https://dummyjson.com/products/category-list');
  const data = await res.json();

  return data;
}

export function createCategoriesBlock(category: string): HTMLAnchorElement {
  const categoriesBlock = document.createElement('a');
  categoriesBlock.className = 'categories_block';
  categoriesBlock.textContent = category;
  categoriesBlock.href = category;
  return categoriesBlock;
}

export async function createCategories() {
  try {
    const categories = await fetchCategories();
    const container = document.getElementById('categories_cards');

    if (container) {
      categories.forEach((category) => {
        const block = createCategoriesBlock(category);
        container.appendChild(block);
      });
    }
  } catch (error) {
    console.error('Error during fetching:', error);
  }
}

export function createCategoriesMainContent() {
  const categoryMainContent = ` <div class="hero">
      <div class="hero_wrapper">
        <p class="hero_p_first">FIND <span class="underline_text">ANYTHING</span> THAT MATCHES YOUR STYLE</p>
        <p class="hero_p_second">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button>Shop Now</button>

        <div class="hero_statistic">
          <div class="hero_statistic_block">
            <p class="hero_statistic_p_first">200+</p>
            <p class="hero_statistic_p_second">International Brands</p>
          </div>
          <div class="hero_statistic_block block_border">
            <p class="hero_statistic_p_first">2,000+</p>
            <p class="hero_statistic_p_second">High-Quality Products</p>
          </div>
          <div class="hero_statistic_block">
            <p class="hero_statistic_p_first">30,000+</p>
            <p class="hero_statistic_p_second">Happy Customers</p>
          </div>
        </div>
      </div>
      <div class="img_hero_wrapper">
        <img class="hero_img" src="src/assets/images/ccfd8aa5825862cdb9604a4fb4930464.jfif" alt="banner">
        <img class="star_first" src="src/assets/images/star.png" alt="star">
        <img class="star_second" src="src/assets/images/star.png" alt="star">
      </div>
    </div>

    <div class="brands">
      <img src="src/assets/images/brands img/versache.png" alt="versache">
      <img src="src/assets/images/brands img/zara-logo-1 1Zara.png" alt="zara">
      <img src="src/assets/images/brands img/gucci-logo-1 1gucci.png" alt="gucci">
      <img src="src/assets/images/brands img/prada-logo-1 1prada.png" alt="prada">
      <img src="src/assets/images/brands img/GroupCalvin Klein.png" alt="Calvin Klein">
    </div>

    <div class="categories">
      <p>Categories</p>
      <div id="categories_cards"></div>
    </div>
`;

  const main = document.createElement('main');

  main.innerHTML = categoryMainContent;
  document.body.appendChild(main);
  createCategories();
}
