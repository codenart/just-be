function isNotPrimitive(value) {
   return value === Object(value)
}

function isNotCreative(value) {
   return function(just) {
      return just.memory.includes(value)
   }
}

function notInMemory(value) {
   return function(just) {
      return ! just.memory.includes(value)
   }
}

function denyValue(value) {
   return function(just) { 
      const laterValues = getLaterValues(value)(just)
      const justBeforeThis = rollbackBeforeValue(value)(just)
      const valueReducer = (just, value) => just.be(value)
      return laterValues.reduce(valueReducer, justBeforeThis)
   }
}

function rollbackBeforeValue(value) {
   return function(just) {
      if (just.value === value)
         return just.past
      if ('any_other_case')
         return rollbackBeforeValue(value)(just.past)
   }
}

function getLaterValues(value) {
   return function(just) {
      const indexOfTheValue = just.memory.indexOf(value)
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