# Just Be

It is life itself.  
It is ordinary.  
It is creative.

## Installation

```
$ npm install --save just-be
```

## Import

Node app:
```
const Just = require('just-be')
```

React app:
```
import Just from 'just-be'
```

## Usage

When a new just is created, its value is `null` by default.  

```
let just = Just()
console.log(just.value)
// null
```

The `value` of `just` cannot be changed directly.  
And actually it can never changed.  

```
just.value = 'something_new'
console.log(just.value)
// null
```

Only when the method `.be(value)` is used\_  
\_it create a new `just` with the new `value`.

```
just = just.be(0)
console.log(just.value)
// 0
```

The new `just` itself contains the old instance as its `past`\_  
\_and ever stored values in `history`.

```
console.log(just.past)
// the previous `just`

console.log(just.history)
// [null]
```

But, a `just` is always ordinary and creative.  
It only replicates itself if the given `value` is `primitive` and `new`.

```
just = just.be('word')
console.log(just.value)
// 'word'
console.log(just.history)
// [null, 0]
```

```
just = just.be(0)
console.log(just.value)
// 'word'
console.log(just.history)
// [null, 0]
```

```
just = just.be(new Date())
console.log(just.value)
// 'word'
console.log(just.history)
// [null, 0]
```

## Extra

Sometimes, you don't want just to be creative_  
_it's ok to deny a stored value so it can `be` again.

```
just = just.not(0)
console.log(just.value)
// 'word'
console.log(just.history)
// [null]
```

```
just = just.be(0)
console.log(just.value)
// 0
console.log(just.history)
// [null, 'word']
```