const { Just } = require('../src/Just')

const {
   isNotPrimitive,
   isNotCreative,
   notInMemory,
   denyValue
} = require('../src/Library')

describe('library', () => {
   test('isNotPrimitive', () => {
      const result0 = isNotPrimitive(0)
      expect(result0).toBe(false)

      const result1 = isNotPrimitive('')
      expect(result1).toBe(false)

      const result2 = isNotPrimitive(true)
      expect(result2).toBe(false)

      const result3 = isNotPrimitive([])
      expect(result3).toBe(true)

      const result4 = isNotPrimitive({})
      expect(result4).toBe(true)
   })

   test('isNotCreative', () => {
      const just0 = Just('word')
      const just1 = Just(true, just0)
      const just2 = Just(false, just1)

      const result0 = isNotCreative('word')(just2)
      expect(result0).toBe(true)

      const result1 = isNotCreative(true)(just2)
      expect(result1).toBe(true)

      const result2 = isNotCreative(false)(just2)
      expect(result2).toBe(true)

      const result3 = isNotCreative(0)(just2)
      expect(result3).toBe(false)
   })

   test('notInMemory', () => {
      const just0 = Just('word')
      const just1 = Just(true, just0)
      const just2 = Just(false, just1)

      const result0 = notInMemory(true)(just2)
      expect(result0).toBe(false)

      const result1 = notInMemory(true)(just0)
      expect(result1).toBe(true)
   })

   test('denyValue', () => {
      const just0 = Just('word')
      const just1 = Just(true, just0)
      const just2 = Just(false, just1)
      const just3 = Just(0, just2)

      const just4 = denyValue(0)(just3)
      expect(just4).toEqual(just2)
   })
})
