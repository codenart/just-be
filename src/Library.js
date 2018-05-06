'use strict'

const isNotPrimitive = 
   (value) =>
      { return value === Object(value) }

const isNotCreative = 
   (value) =>
   (just) =>
      { return just.memory.includes(value) }

const notInMemory = 
   (value) =>
   (just) =>
      { return ! just.memory.includes(value) }

const denyValue = 
   (value) =>
   (just) =>
      { let laterValues = getLaterValues(value)(just)
        let justBeforeThis = rollbackBeforeValue(value)(just)
        let valueReducer = (just, value) => just.be(value)
        return laterValues.reduce(valueReducer, justBeforeThis)
      }

const rollbackBeforeValue = 
   (value) =>
   (just) =>
      { if (just.value === value)
           return just.past
        if ('any_other_case')
           return rollbackBeforeValue(value)(just.past)
      }

const getLaterValues = 
   (value) =>
   (just) =>
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