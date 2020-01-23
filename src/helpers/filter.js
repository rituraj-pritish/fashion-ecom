export default (products, category, subcategory) => {
  if (category === 'sort') {
    switch (subcategory) {
      case 'rating':
        return products.sort((a, b) => b.rating - a.rating);
      case 'priceLtoH':
        return products.sort(
          (a, b) => a.variants[0].price - b.variants[0].price
        );
      case 'priceHtoL':
        return products.sort(
          (a, b) => b.variants[0].price - a.variants[0].price
        );
      default:
        return products;
    }
  }

  if (category === 'priceRange') {
    switch (subcategory) {
      case '5to50':
        return products.filter(
          ({ variants }) => variants[0].price > 0 && variants[0].price <= 50
        );
      case '51to100':
        return products.filter(
          ({ variants }) => variants[0].price >= 51 && variants[0].price <= 100
        );
      case '101to150':
        return products.filter(
          ({ variants }) => variants[0].price >= 101 && variants[0].price <= 150
        );
      case '151to200':
        return products.filter(
          ({ variants }) => variants[0].price >= 151 && variants[0].price <= 200
        );
      case '201to300':
        return products.filter(
          ({ variants }) => variants[0].price >= 201 && variants[0].price <= 300
        );
      default:
        return products;
    }
  }

  if (category === 'brand') {
    return products.filter(
      ({ brand }) => brand.toLowerCase() === subcategory.toLowerCase()
    );
  }
};
