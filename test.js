const Just = require('./index')

const testIndex =
   () =>
      { let just = null
        //-
        just = Just()
        expect(just.value).toBe(null)
        expect(just.memory).toEqual([])
        //-
        just = just.be('word')
        expect(just.value).toBe('word')
        expect(just.memory).toEqual([ 'word' ])
      }

test('just', testIndex)