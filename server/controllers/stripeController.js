const stripe = require('stripe')('sk_test_51I9YaaDrQip7yfNSrJeG7Tv1WfABgJRflh5OcvgdVzvfP96fpIB3C6YZRLvztim0QUKxhBzVVe6KU2LPat6Racgi00dgrcSwZ6')

const YOUR_DOMAIN = 'http://localhost:3919/checkout'

module.exports = {
  createCheckoutSession: async (req, res) => {

    const db = req.app.get('db')

    if (req.session.user) {
      const { id } = req.session.user
      const user_id = id
      const cart = await db.cart.get_cart([user_id])

      const cartMapped = cart.map(element => {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: element.name,
              images: [element.img],
            },
            unit_amount: (element.price * 100),
          },
          quantity: element.quantity
        }
      })


      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: cartMapped,
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      })
      res.json({ id: session.id })
    }
  }
}