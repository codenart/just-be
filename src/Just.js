/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Import
 */
const { isNotPrimitive,
        isNotCreative,
        isCreative,
        denyValue
      } = require('./Library')

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Prototype
 */
const prototype = {
   value : null,
   past  : null,

   get memory() {
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
} // prototype

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Constructor
 */
function NullJust() {
   let just = Object.create(prototype)
   just.value = null
   just.past  = null
   return Object.freeze(just)
}

function FirstJust(value = null) {
   let just = Object.create(prototype)
   just.value = value
   just.past  = NullJust()
   return Object.freeze(just)
}

function NextJust(
   value = null,
   past = null
) {
   let just = Object.create(prototype)
   just.value = value
   just.past  = past
   return Object.freeze(just)
}

function Just(
   value = null,
   past = null
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

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Export
 */
module.exports = { NullJust,
                   FirstJust,
                   NextJust,
                   Just
                 }
