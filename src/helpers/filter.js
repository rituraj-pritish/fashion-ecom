export default (products, criteria) => {

  const getVariant = variants => {
    return variants[Object.keys(variants)[0]]
  }

  const { sort, price, brand } = criteria

  let filteredProducts
  switch (price) {
    case '5to50':
      filteredProducts = products.filter(
        ({ variants }) => getVariant(variants).price > 0 && getVariant(variants).price <= 50
      )
      break
    case '51to100':
      filteredProducts = products.filter(
        ({ variants }) => getVariant(variants).price >= 51 && getVariant(variants).price <= 100
      )
      break
    case '101to150':
      filteredProducts = products.filter(
        ({ variants }) => getVariant(variants).price >= 101 && getVariant(variants).price <= 150
      )
      break
    case '151to200':
      filteredProducts = products.filter(
        ({ variants }) => getVariant(variants).price >= 151 && getVariant(variants).price <= 200
      )
      break
    case '201to300':
      filteredProducts = products.filter(
        ({ variants }) => getVariant(variants).price >= 201 && getVariant(variants).price <= 300
      )
      break
    case 'all':
      filteredProducts = products
      break
    default:
      filteredProducts = products
  }

  if (brand !== 'brand-all') {
    filteredProducts = filteredProducts.filter(
      item => item.brand.toLowerCase() === brand.toLowerCase()
    )
  }

  switch (sort) {
    case 'rating':
      filteredProducts = filteredProducts.slice().sort((a, b) => b.rating - a.rating)
      break
    case 'priceLtoH':
      filteredProducts = filteredProducts.slice().sort(
        (a, b) => getVariant(a.variants).price - getVariant(b.variants).price
      )
      break
    case 'priceHtoL':
      filteredProducts = filteredProducts.slice().sort(
        (a, b) => getVariant(b.variants).price - getVariant(a.variants).price
      )
      break
    default:
      filteredProducts = filteredProducts.slice().sort((a, b) => b.rating - a.rating)
  }

  return filteredProducts
}
