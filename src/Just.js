const {
   isNotPrimitive,
   isNotCreative,
   isCreative,
   denyValue
} = require('./Library')

const prototype = {
   value : null,
   past  : null,

   get memory () {
      if (this.past === null)
         return []
      if ('any_other_case')
         return [ ...this.past.memory, this.value ]
   },

   be(value = null) {
      if (value === null)
         return this
      if (isNotPrimitive(value))
         return this
      if (isNotCreative(value)(this))
         return this
      if ('any_other_case')
         return Just(value, this)
   },

   not(value = null) {
      if (value === null)
         return this
      if (notInMemory(value)(this))
         return this
      if ('any_other_case')
         return denyValue(value)(this)
   }
}

const NullJust = 
   function() {
      let just = Object.create(prototype)
      just.value = null
      just.past  = null
      return Object.freeze(just)
   }

const FirstJust = 
   function(value) {
      let just = Object.create(prototype)
      just.value = value
      just.past  = NullJust()
      return Object.freeze(just)
   }

const NextJust = 
   function(value, past) {
      let just = Object.create(prototype)
      just.value = value
      just.past  = past
      return Object.freeze(just)
   }

const Just = 
   function(
      value = null,
      past  = null
   ) {
      if (value === null)
         return NullJust()
      if (isNotPrimitive(value))
         return NullJust()
      if (past === null)
         return FirstJust(value)
      if ('any_other_case')
         return NextJust(value, past)
   }

module.exports = {
   NullJust,
   FirstJust,
   NextJust,
   Just
}
