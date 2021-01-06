const mongoose = require('mongoose')

const url =
  'mongodb+srv://solita:solita12345@cluster0.gnulr.mongodb.net/name-app?retryWrites=true&w=majority'

console.log('connecting to', url)
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const nameSchema = new mongoose.Schema({
  name: String,
  amount: Number,
})

module.exports = mongoose.model('Name', nameSchema)
