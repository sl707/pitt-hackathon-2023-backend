const express = require('express')

const router = express.Router()

const Account = require('./account')


router.post('/mi', async (req, res, next) => {
  const { userId, DOB, address, aiad, aidd, city, dd, eci, ecn, name, state, zipcode, sex, phone, pfpUrl } = req.body
  try {
    const updatedUser = await Account.findOneAndUpdate({ userId: userId }, { DOB, address, aiad: aiad, aidd, city, dd, eci, ecn, name, state, zipcode, sex, phone, pfpUrl })
    if (!updatedUser) {
      next(new Error('Error: Failed to change account info.'))
    } else {
      res.send('Account info successfully changed.')
    }
  } catch (err) {
    console.log(err)
    next(err)
  }
})

router.post('/mistatus', async (req, res, next) => {
  const { userId, status } = req.body
  try {
    const updatedUser = await Account.findOneAndUpdate({ userId: userId }, { status: status })
    if (!updatedUser) {
      next(new Error('Error: Failed to change account info.'))
    } else {
      res.send('Account info successfully changed.')
    }
  } catch (err) {
    console.log(err)
    next(err)
  }
})

router.get('/acc', async (req, res, next) => {
  const { userId } = req.query
  try {
    const user = await Account.findOne({ userId: userId })
    if (!user) {
      next(new Error('Error: Failed to get accounts.'))
    } else {
      res.json(user)
    }
  } catch (err) {
    next(err)
  }
})

router.get('/accall', async (req, res, next) => {
  try {
    const users = await Account.find()
    if (!users) {
      next(new Error('Error: Failed to get accounts.'))
    } else {
      res.json(users)
    }
  } catch (err) {
    next(err)
  }
})

router.post('/trigger', async (req, res, next) => {
  try {
    const updatedUser = await Account.findOneAndUpdate({ userId: "1" }, { status: "0" })
    if (!updatedUser) {
      next(new Error('Error: Failed to change account info.'))
    } else {
      res.send('Account info successfully changed.')
    }
  } catch (err) {
    console.log(err)
    next(err)
  }
})

router.post('/pfp', async (req, res, next) => {
  const { userId, pfp } = req.body
  try {
    const updatedUser = await Account.findOneAndUpdate({ userId: userId }, { pfp: pfp })
    if (!updatedUser) {
      next(new Error('Error: Failed to change account info.'))
    } else {
      console.log("WOW")
      console.log(updatedUser)
      res.send('Account info successfully changed.')
    }
  } catch (err) {
    console.log(err)
    next(err)
  }
})

// router.get('/i', async (req, res, next) => {
//   const { userId,  } = req.params
//   try {
//     const updatedUser = await User.findOneAndUpdate({ id: userId }, { DOB, address, aiad, aidd, city, dd, eci, ecn, name, sex, state, zipcode })
//     if (!updatedUser) {
//       next(new Error('Error: Failed to change account info.'))
//     } else {
//       res.send('Account info successfully changed.')
//     }
//   } catch (err) {
//     next(err)
//   }
// })

module.exports = router