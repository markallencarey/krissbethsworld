require('dotenv').config()
const { STRIPE_KEY } = process.env

const stripe = require('stripe')(STRIPE_KEY)

// const YOUR_DOMAIN = 'http://localhost:3000/#'
const YOUR_DOMAIN = 'http://krissbethsworld.com'

module.exports = {
  createCheckoutSession: async (req, res) => {

    const db = req.app.get('db')

    if (req.session.user) {
      const { id, email } = req.session.user
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
            unit_amount: (element.price * 100).toFixed(0),
          },
          quantity: element.quantity
        }
      })

      const session = await stripe.checkout.sessions.create({
        billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['US', 'CA', 'GB', 'DE', 'FR', 'MX', 'GT'
          ],
        },
        customer_email: email,
        payment_method_types: ['card'],
        line_items: cartMapped,
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/checkout/success`,
        cancel_url: `${YOUR_DOMAIN}/checkout/canceled`,
      })
      res.json({ id: session.id })
    }
  }
}