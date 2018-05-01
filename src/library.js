function isNotPrimitive(value) {
   return value === Object(value)
}

function isNotCreative(value) {
   return function(just) {
      return [...just.history, just.value].includes(value)
   }
}

module.exports = Object.freeze({
   isNotPrimitive, 
   isNotCreative
})