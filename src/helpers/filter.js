export default (products, criteria) => {
  const getVariant = variants => {
    return variants[Object.keys(variants)[0]]
  }

  const {
    sort,
    price: { min, max },
    brand
  } = criteria

  let filteredProducts

  if (!min || !max) {
    filteredProducts = products
  } else {
    filteredProducts = products.filter(
      ({ variants }) =>
        getVariant(variants).price >= min && getVariant(variants).price <= max
    )
  }

  if (brand !== 'brand-all') {
    filteredProducts = filteredProducts.filter(
      item => item.brand.toLowerCase() === brand.toLowerCase()
    )
  }

  switch (sort) {
    case 'rating':
      filteredProducts = filteredProducts
        .slice()
        .sort((a, b) => b.rating - a.rating)
      break
    case 'priceLtoH':
      filteredProducts = filteredProducts
        .slice()
        .sort(
          (a, b) => getVariant(a.variants).price - getVariant(b.variants).price
        )
      break
    case 'priceHtoL':
      filteredProducts = filteredProducts
        .slice()
        .sort(
          (a, b) => getVariant(b.variants).price - getVariant(a.variants).price
        )
      break
    default:
      filteredProducts = filteredProducts
        .slice()
        .sort((a, b) => b.rating - a.rating)
  }

  return filteredProducts
}
