export type ColumnData = {
  title: string;
  items: string[];
};

export const data: ColumnData[] = [
  {
    title: 'COMPANY',
    items: ['About', 'Features', 'Works', 'Career'],
  },
  {
    title: 'HELP',
    items: [
      'Customer Support',
      'Delivery Details',
      'Terms & Conditions',
      'Privacy Policy',
    ],
  },
  {
    title: 'FAQ',
    items: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
  },
  {
    title: 'RESOURCES',
    items: [
      'Free eBooks',
      'Development Tutorial',
      'How to - Blog',
      'Youtube Playlist',
    ],
  },
];

export function createFooterColumns(data: ColumnData[]) {
  const footerAbout = document.getElementById('footer_about_section');

  data.forEach((columnData) => {
    const column = document.createElement('div');
    column.className = 'column';

    const title = document.createElement('p');
    title.className = 'column-title';
    title.textContent = columnData.title;
    column.appendChild(title);

    columnData.items.forEach((item) => {
      const content = document.createElement('p');
      content.className = 'footer_about_section_content';
      content.textContent = item;
      column.appendChild(content);
    });

    footerAbout?.appendChild(column);
  });
}

export function createFooter() {
  const footerContent = `
    <footer>
      <div class="stay_upto_date">
        <p>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
        <div>
          <div class="input_icon">
            <input type="text" placeholder="Enter your email address">
          </div>
          <button>Subscribe to Newsletter</button>
        </div>
      </div>

      <div id="footer_about_section">
        <div class="column">
          <p class="column-title_first">SHOP.CO</p>
          <p class="footer_about_section_content_first">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <div class="footer_about_section_icons">
            <img src="../src/assets/images/footer icons/1twiter.png" alt="twitter">
            <img src="../src/assets/images/footer icons/2facebook.png" alt="facebook">
            <img src="../src/assets/images/footer icons/3inst.png" alt="instagram">
            <img src="../src/assets/images/footer icons/4gitHub.png" alt="GitHub">
          </div>
        </div>
      </div>
      <div class="footer_payment_section">
        <p>Shop.co © 2000-2024, All Rights Reserved</p>
        <div>
          <img src="../src/assets/images/payments img/Badgevisa.png" alt="visa">
          <img src="../src/assets/images/payments img/Badgemaster.png" alt="master card">
          <img src="../src/assets/images/payments img/BadgepayPal.png" alt="PayPal">
          <img src="../src/assets/images/payments img/BadgeapplePay.png" alt="apple pay">
          <img src="../src/assets/images/payments img/BadgeGPay.png" alt="google pay">
        </div>
      </div>
    </footer>
    `;

  const body = document.getElementsByTagName('body')[0];
  const footer = document.createElement('div');
  footer.innerHTML = footerContent;
  body.appendChild(footer);
  createFooterColumns(data);
}
