export function createStarRating(rating: number): string {
  const fullStar = `<img src="../src/assets/images/stars/Star 3star.png" alt="full Star">`;
  const halfStar = `<img src="../src/assets/images/stars/Star 5ministar.png" alt="Half Star" class="star">`;

  let starsHTML = '';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    starsHTML += fullStar;
  }

  if (hasHalfStar) {
    starsHTML += halfStar;
  }

  return starsHTML;
}
