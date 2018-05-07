const { Just } = require('../src/Just')

const { isNotPrimitive,
        isNotCreative,
        notInMemory,
        denyValue
      } = require('../src/Library')

describe('library', () => {
   test('isNotPrimitive', () => {
      let result0 = isNotPrimitive(0)
      expect(result0).toBe(false)

      let result1 = isNotPrimitive('')
      expect(result1).toBe(false)

      let result2 = isNotPrimitive(true)
      expect(result2).toBe(false)

      let result3 = isNotPrimitive([])
      expect(result3).toBe(true)

      let result4 = isNotPrimitive({})
      expect(result4).toBe(true)
   })

   test('isNotCreative', () => {
      let just0 = Just('word')(null)
      let just1 = Just(true)(just0)
      let just2 = Just(false)(just1)

      let result0 = isNotCreative('word')(just2)
      expect(result0).toBe(true)

      let result1 = isNotCreative(true)(just2)
      expect(result1).toBe(true)

      let result2 = isNotCreative(false)(just2)
      expect(result2).toBe(true)

      let result3 = isNotCreative(0)(just2)
      expect(result3).toBe(false)
   })

   test('notInMemory', () => {
      let just0 = Just('word')(null)
      let just1 = Just(true)(just0)
      let just2 = Just(false)(just1)

      let result0 = notInMemory(true)(just2)
      expect(result0).toBe(false)

      let result1 = notInMemory(true)(just0)
      expect(result1).toBe(true)
   })

   test('denyValue', () => {
      let just0 = Just('word')(null)
      let just1 = Just(true)(just0)
      let just2 = Just(false)(just1)
      let just3 = Just(0)(just2)

      let just4 = denyValue(0)(just3)
      expect(just4).toEqual(just2)
   })
})
