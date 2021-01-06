const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const { email, password, first_name, last_name, address, apt_no, city, state, country, zip_code, phone_no} = req.body

    const [existingUser] = await db.auth.get_user_by_email([email])
    if (existingUser) {
      return res.status(409).send('User already exists')
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const [newUser] = await db.auth.register_user([email, hash, first_name, last_name, address, apt_no, city, state, country, zip_code, phone_no])
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