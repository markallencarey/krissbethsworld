const stripe = require('stripe')('sk_test_51I9YaaDrQip7yfNSrJeG7Tv1WfABgJRflh5OcvgdVzvfP96fpIB3C6YZRLvztim0QUKxhBzVVe6KU2LPat6Racgi00dgrcSwZ6')

const YOUR_DOMAIN = 'http://localhost:3919/checkout'

module.exports = {
  createCheckoutSession: await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`
  })

  res.json({ id: session.id })
}