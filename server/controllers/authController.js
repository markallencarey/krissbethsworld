const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    let { email, password, firstName, lastName, address, aptNo, city, state, country, zipCode, phoneNo } = req.body

    const [existingUser] = await db.auth.get_user_by_email([email])
    if (existingUser) {
      return res.status(409).send('User already exists')
    }

    if (aptNo === '') {
      aptNo = null
    }

    if (country === '') {
      country = "ISO 3166-2:US"
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const [newUser] = await db.auth.register_user([firstName, lastName, address, aptNo, city, state, country, zipCode, phoneNo])

    console.log(newUser)

    await db.auth.register_auth([email, hash, newUser.id])

    req.session.user = newUser
    res.status(200).send(newUser)
  },

  login: async (req, res) => {
    const db = req.app.get('db')
    const { email, password } = req.body

    const [existingUser] = await db.auth.get_user_by_email([email])
    if (!existingUser) {
      return res.status(404).send('User does not exist')
    }

    console.log(existingUser)

    const isAuthenticated = bcrypt.compareSync(password, existingUser.hash)
    if (!isAuthenticated) {
      return res.status(401).send('Incorrect password')
    }
    delete existingUser.hash

    req.session.user = existingUser
    res.status(200).send(existingUser)
  },

  getUserSession: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user)
    } else {
      res.status(404).send('No session found')
    }
  },
  
  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  }
}