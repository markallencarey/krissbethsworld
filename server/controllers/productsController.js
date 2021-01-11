module.exports = {
  getAllProducts: async (req, res) => {
    const db = req.app.get('db')

    const products = await db.products.get_all_products()

    res.status(200).send(products)
  },

  getSingleProduct: async (req, res) => {
    const db = req.app.get('db')
    const { product_id } = req.params

    const [product] = await db.products.get_single_product([product_id])

    res.status(200).send(product)
  }
}