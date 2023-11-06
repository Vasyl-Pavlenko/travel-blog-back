import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Registration user
export const registration = async (req, res) => {
  try {
    const { username, password } = req.body

    const isBusy= await User.findOne({ username })

    if (isBusy) {
      return res.json({
        message: 'This username is already taken.',
      })
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const newUser = new User({
      username,
      password: hash,
    })

    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '30d' },
    )

      await newUser.save()

      res.json({
        newUser,
        token,
        message: 'Registration was successful.',
      })
    } catch (error) {
      res.json({ message: `Error while creating a user.` })
    }
}

// Login user
export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user) {
      return res.json({
        message: 'There is no such user.',
      })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) {
      return res.json({
        message: 'Wrong password or username.',
      })
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '30d' },
    )

    res.json({
      token,
      user,
      message: 'You are logged in.',
    })
  } catch (error) {
    res.json({ message: 'Authorisation Error.' })
  }
}

// Get Me
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId)

    if (!user) {
      return res.json({
        message: 'There is no such user.',
      })
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '30d' },
    )

    res.json({
      user,
      token,
    })
  } catch (error) {
    res.json({ message: 'No access.' })
  }
}
