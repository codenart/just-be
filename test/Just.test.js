const {
   NullJust,
   FirstJust,
   NextJust,
   Just
} = require('../src/Just')

describe('Just', () => {
   test('constructors', () => {
      const just0 = NullJust()
      expect(just0).toEqual({ value:null, past:null })

      const just1 = FirstJust('word')
      expect(just1).toEqual({ value:'word', past:just0 })

      const just2 = NextJust(true, just1)
      expect(just2).toEqual({ value:true, past:just1 })

      const just4 = Just()
      expect(just4).toEqual(just0)

      const just5 = Just('word')
      expect(just5).toEqual(just1)

      const just6 = Just(true, just5)
      expect(just6).toEqual(just2)
   })

   test('memory', () => {
      const just0 = Just('word')
      const just1 = Just(true, just0)
      const just2 = Just(false, just1)
      expect(just2.memory).toEqual(['word', true, false])
   })

   test('be', () => {
      const just0 = Just('word')
      const just1 = just0.be(true)
      expect(just1.value).toBe(true)
      expect(just1.past).toEqual(just0)

      const just2 = just1.be(true)
      expect(just2).toEqual(just1)

      const just3 = just2.be({})
      expect(just3).toEqual(just2)
   })
})