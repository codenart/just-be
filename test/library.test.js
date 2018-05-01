const { Just, not } = require('../src/Just')
const {
   isNotPrimitive,
   isNotCreative
} = require('../src/library')

describe('library', () => {
   test('isNotPrimitive', () => {
      expect(isNotPrimitive(null)).toBe(false)
      expect(isNotPrimitive(0)).toBe(false)
      expect(isNotPrimitive('')).toBe(false)
      expect(isNotPrimitive(true)).toBe(false)
      expect(isNotPrimitive([])).toBe(true)
      expect(isNotPrimitive({})).toBe(true)
   })

   test('isNotCreative', () => {
      const just1 = Just()
      const just2 = Just(false, just1)
      const just3 = Just('', just2)
      expect(isNotCreative(null)(just3)).toBe(true)
      expect(isNotCreative(0)(just3)).toBe(true)
      expect(isNotCreative('')(just3)).toBe(true)
      expect(isNotCreative(true)(just3)).toBe(false)
   })
})