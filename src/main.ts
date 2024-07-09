import Navigo from 'navigo';
import './style.css';
import './styles.scss';
import { removeBlock } from './ad';
import { createCategoriesMainContent } from './categories';
import { headerCreate } from './header';
import { createFooter } from './footer';
import { createCategoryDetailsMainContent } from './categoriesPage';
import { renderProductPage } from './product';

headerCreate();

const router = new Navigo('/');

router
  .on('/', () => {
    createCategoriesMainContent();
  })
  .resolve();

router
  .on('/:categoryName', async ({ data }) => {
    createCategoryDetailsMainContent(data.categoryName);
  })
  .resolve();

router
  .on('/:categoryName/:productId', ({ data }) => {
    renderProductPage(data.productId);
    console.log(data);
  })
  .resolve();

createFooter();

document.addEventListener('DOMContentLoaded', () => {
  removeBlock();
});
