// backend/routes/auth.js
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const router = express.Router()

// Register
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = new User({ name, email, password: hashedPassword, role })
  await user.save()
  res.status(201).json({ message: 'User registered' })
})

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ message: 'Invalid credentials' })

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' })

  const token = jwt.sign(
    { userId: user._id, role: user.role },
    'SECRET_KEY',
    { expiresIn: '1d' }
  )
  res.json({ token, role: user.role })
})

module.exports = router
