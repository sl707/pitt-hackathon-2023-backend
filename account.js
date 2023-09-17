const { Schema, model } = require('mongoose')

const accountSchema = new Schema({
  userId: String,
  username: String,
  password: String,
  type: String,
  DOB: String,
  address: String,
  aiad: String,
  aidd: String,
  city: String,
  dd: String,
  eci: String,
  ecn: String,
  name: String,
  sex: String,
  state: String,
  zipcode: String,
  status: String,
  phone: String,
  pfpUrl: String,
  pfp: Buffer
})

module.exports = model('Account', accountSchema)