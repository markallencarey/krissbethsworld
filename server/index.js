require('dotenv').config()
const path = require('path')
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controllers/authController')
const productsCtrl = require('./controllers/productsController')
const cartCtrl = require('./controllers/cartController')
const stripeCtrl = require('./controllers/stripeController')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = express()

app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))


//authController
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/user', authCtrl.getUserSession)
app.delete('/auth/logout', authCtrl.logout)

//productsController
app.get('/api/products', productsCtrl.getAllProducts)
app.get('/api/products/:product_id', productsCtrl.getSingleProduct)

//cartController
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart', cartCtrl.addToCart)
app.put('/api/cart', cartCtrl.changeQuantity)
app.delete('/api/cart', cartCtrl.removeFromCart)
app.delete('/api/cart/clear', cartCtrl.clearCart)

//stripeController
app.post('/create-checkout-session', stripeCtrl.createCheckoutSession)

app.use(express.static(`${__dirname}/../build`))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(dbInstance => {
  app.set('db', dbInstance)
  console.log('db ready')
  app.listen(SERVER_PORT, () => {
    console.log(`Server ready on port ${SERVER_PORT}`)
  })
})