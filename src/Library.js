const Just = require('./Just')

const isNotPrimitive = 
   (value = null) =>
      { return value === Object(value) }

const isNotCreative = 
   (value = null) =>
   (just = Just()) =>
      { return just.memory.includes(value) }

const notInMemory = 
   (value = null) =>
   (just = Just()) =>
      { return ! just.memory.includes(value) }

const denyValue = 
   (value = null) =>
   (just = Just()) =>
      { let laterValues = getLaterValues(value)(just)
        let justBeforeThis = rollbackBeforeValue(value)(just)
        let beReducer = (just, value) => just.be(value)
        return laterValues.reduce(beReducer, justBeforeThis)
      }

const rollbackBeforeValue = 
   (value = null) =>
   (just = Just()) =>
      { if (just.value === value)
           return just.past
        if ('any_other_case')
           return rollbackBeforeValue(value)(just.past)
      }

const getLaterValues = 
   (value = null) =>
   (just = Just()) =>
      { let indexOfTheValue = just.memory.indexOf(value)
        return just.memory.slice(indexOfTheValue + 1)
      }

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Export
 */
module.exports = { isNotPrimitive, 
                   isNotCreative,
                   notInMemory,
                   denyValue,
                   rollbackBeforeValue,
                   getLaterValues
                 }