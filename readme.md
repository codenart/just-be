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

When a new `just` is created, its `value` is the value passed in.  

```
let just = Just('word')
console.log(just.value)
// 'word'
```

The `value` of `just` cannot be changed directly;  
And actually it can never changed.  

```
just.value = 'something_new'
console.log(just.value)
// 'word'
```

Only when the method `.be(value)` is used\_  
\_it creates a new `just` with the new `value`.

```
just = just.be(true)
console.log(just.value)
// true
```

The new `just` itself contains the old instance as its `past`\_  
\_and ever stored values in `memory`.

```
console.log(just.past)
// the previous `just`

console.log(just.memory)
// ['word', true]
```

But, a `just` is always ordinary and creative.  
It only replicates itself if the given `value` is\_  
\_ `primitive` and `new`.

```
just = just.be(false)
console.log(just.value)
// false
console.log(just.memory)
// ['word', true, false]
```

```
just = just.be(true)
console.log(just.value)
// false
console.log(just.memory)
// ['word', true, false]
```

```
just = just.be(new Date())
console.log(just.value)
// false
console.log(just.memory)
// ['word', true, false]
```

## Extra

Sometimes, you don't want `just` to be creative\_  
\_it's ok to deny a stored value so it can `be` again.

```
just = just.not('word')
console.log(just.value)
// false
console.log(just.memory)
// [true, false]
```

```
just = just.be('word')
console.log(just.value)
// 'word'
console.log(just.memory)
// [true, false, 'word']
```
