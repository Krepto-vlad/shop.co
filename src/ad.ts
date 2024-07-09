export function removeBlock() {
  const buttonIcon = document.getElementById('button-icon');
  const homepageAdWrapper = document.getElementById('homepage_ad_wrapper');

  if (buttonIcon && homepageAdWrapper) {
    const removeHomepageAdWrapper = () => {
      homepageAdWrapper.remove();
      buttonIcon.removeEventListener('click', removeHomepageAdWrapper);
    };

    buttonIcon.addEventListener('click', removeHomepageAdWrapper);
  }
}
