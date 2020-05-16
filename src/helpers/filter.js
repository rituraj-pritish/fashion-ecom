export default (products, criteria) => {
  const { sort, price, brand } = criteria

  let filteredProducts

  switch (price) {
    case '5to50':
      filteredProducts = products.filter(
        ({ variants }) => variants[0].price > 0 && variants[0].price <= 50
      )
      break
    case '51to100':
      filteredProducts = products.filter(
        ({ variants }) => variants[0].price >= 51 && variants[0].price <= 100
      )
      break
    case '101to150':
      filteredProducts = products.filter(
        ({ variants }) => variants[0].price >= 101 && variants[0].price <= 150
      )
      break
    case '151to200':
      filteredProducts = products.filter(
        ({ variants }) => variants[0].price >= 151 && variants[0].price <= 200
      )
      break
    case '201to300':
      filteredProducts = products.filter(
        ({ variants }) => variants[0].price >= 201 && variants[0].price <= 300
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
        (a, b) => a.variants[0].price - b.variants[0].price
      )
      break
    case 'priceHtoL':
      filteredProducts = filteredProducts.slice().sort(
        (a, b) => b.variants[0].price - a.variants[0].price
      )
      break
    default:
      filteredProducts = filteredProducts.slice().sort((a, b) => b.rating - a.rating)
  }

  return filteredProducts
}
