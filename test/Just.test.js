const { Just, not } = require('../src/Just')

describe('Just', () => {
   test('createInstance', () => {
      const instance = Just()
      const mockInstance = { value: 0, past: not }
      expect(instance).toEqual(mockInstance)
   })

   test('history', () => {
      const instance0 = Just()
      const instance1 = instance0.be('')
      const instance2 = instance1.be(true)
      const instance3 = instance2.be(false)
      expect(instance3.history).toEqual([null, 0, '', true])
   })

   test('be', () => {
      const instance0 = Just()
      const instance1 = instance0.be('')
      const instance2 = instance1.be(0)
      expect(instance2).toEqual(instance1)
   })
})