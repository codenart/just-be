const {
   isNotPrimitive,
   isNotCreative
} = require('./library')

const not = Object.freeze({
   value : null,
   past  : null,

   get history () {
      return []
   }
})

const prototype = {
   value : 0,
   past  : not,

   get history () {
      if (this.past !== null)
         return [...this.past.history, this.past.value]
      else
         return []
   },

   be(value = 0) {
      if (isNotPrimitive(value))
         return this
      if (isNotCreative(value)(this))
         return this
      if ('any_other_case')
         return Just(value, this)
   }
}

function Just(
   value = 0,
   past  = not
) {
   const instance = Object.create(prototype)
   instance.value = value
   instance.past  = past
   return Object.freeze(instance)
}

module.exports = Object.freeze({
   Just,
   not
})