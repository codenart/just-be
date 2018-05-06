const isNotPrimitive = 
   function(value) {
      return value === Object(value)
   }

const isNotCreative = 
   function(value) {
      return function(just) {
         return just.memory.includes(value)
      }
   }

const notInMemory = 
   function(value) {
      return function(just) {
         return ! just.memory.includes(value)
      }
   }

const denyValue = 
   function(value) {
      return function(just) { 
         let laterValues = getLaterValues(value)(just)
         let justBeforeThis = rollbackBeforeValue(value)(just)
         let valueReducer = (just, value) => just.be(value)
         return laterValues.reduce(valueReducer, justBeforeThis)
      }
   }

const rollbackBeforeValue = 
   function(value) {
      return function(just) {
         if (just.value === value)
            return just.past
         if ('any_other_case')
            return rollbackBeforeValue(value)(just.past)
      }
   }

const getLaterValues = 
   function(value) {
      return function(just) {
         let indexOfTheValue = just.memory.indexOf(value)
         return just.memory.slice(indexOfTheValue + 1)
      }
   }

module.exports = {
   isNotPrimitive, 
   isNotCreative,
   notInMemory,
   denyValue,
   rollbackBeforeValue,
   getLaterValues
}