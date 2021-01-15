module.exports = {
  getCart: async (req, res) => {
    const db = req.app.get('db')

    if (req.session.user) {
      const { id } = req.session.user
      const user_id = id
      const cart = await db.cart.get_cart([user_id])
      res.status(200).send(cart)
    }
  },

  addToCart: async (req, res) => {
    const db = req.app.get('db')

    if (req.session.user) {
      let { product_id, quantity } = req.body
      const { id } = req.session.user
      const user_id = id
  
      const [product] = await db.cart.get_product_in_cart([user_id, product_id])
      if (product) {
        quantity += product.quantity
        await db.cart.change_quantity([quantity, user_id, product_id])
      } else {
        await db.cart.add_to_cart([user_id, product_id, quantity])
      }
  
      const cart = await db.cart.get_cart([user_id])
  
      res.status(200).send(cart)
    }
  },

  changeQuantity: async (req, res) => {
    const db = req.app.get('db')

    const { product_id, quantity } = req.body
    const { id } = req.session.user
    const user_id = id

    await db.cart.change_quantity([quantity, user_id, product_id])

    const cart = await db.cart.get_cart([user_id])

    res.status(200).send(cart)
  },

  removeFromCart: async (req, res) => {
    const db = req.app.get('db')

    const { product_id } = req.body
    const { id } = req.session.user
    const user_id = id

    await db.cart.remove_from_cart([user_id, product_id])

    const cart = await db.cart.get_cart([user_id])

    res.status(200).send(cart)
  },

  clearCart: async (req, res) => {
    const db = req.app.get('db')

    const { id } = req.session.user
    const user_id = id

    await db.cart.clear_cart([user_id])

    const cart = await db.cart.get_cart([user_id])

    res.status(200).send(cart)
  }
}