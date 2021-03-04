module.exports = {
  getAllProducts: async (req, res) => {
    const db = req.app.get('db')

    const products = await db.products.get_all_products()

    products.map(el => {
      el.price = parseFloat(el.price).toFixed(2)
    })

    console.log(products)

    res.status(200).send(products)
  },

  getSingleProduct: async (req, res) => {
    const db = req.app.get('db')
    const { product_id } = req.params

    const [product] = await db.products.get_single_product([product_id])

    product.price = product.price.toFixed(2)

    // console.log(product.price)

    res.status(200).send(product)
  }
}