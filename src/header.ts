export function headerCreate() {
  const headerContent = `
    <header>
      <div id="homepage_ad_wrapper">
        <div></div>
        <p>Sign up and get 20% off to your first order. <a href="">Sign Up Now</a></p>
        <button class="button_icon" id="button-icon"><img src="../src/assets/images/close.png" alt="close button"></button>
      </div>

      <div class="homepage_header_wrapper">
        <a href="">SHOP.CO</a>
        <div class="homepage_header_button">
          <button class="button_icon"><img src="../src/assets/images/cart.png" alt="cart button"></button>
          <button class="button_icon"><img src="../src/assets/images/person.png" alt="login button"></button>
        </div>
      </div>
    </header>
    `;

  const body = document.getElementsByTagName('body')[0];
  const header = document.createElement('div');
  header.innerHTML = headerContent;
  body.insertBefore(header, body.firstChild);
}
