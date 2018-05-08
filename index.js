const { Just } = require('./src/Just')

module.exports = 
   (value = null) =>
      { return Just(value) }