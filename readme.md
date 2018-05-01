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
const { Just, not } = require('just-be')
```

React app:
```
import { Just, not } from 'just-be'
```

## Usage

When a new just is created, its value is `0` by default.  

```
let just = Just()
console.log(just.value)
// 0
```

It also contains its `past` version as `not`.

```
console.log(just.past)
// the `not` object
```

And it also remember `history` as ever stored values in the `past`.

```
console.log(just.history)
// [null]
```

The `value` of `just` cannot be changed directly.  
And actually it will never change.  

```
just.value = 'something_new'
console.log(just.value)
// 0
```

There's an only method `.be(value)`.  
When the method is used, it create a new `just`.  
The new `just` itself contains the old instance as its `past`.  
And so the `history` is updated.

```
just = just.be('word')
console.log(just.value)
// 'word'
console.log(just.history)
// [null, 0]
```

But, a `just` is always ordinary and creative.  
It only replicates itself if the given `value` is `primitive` and `new`.

```
just = just.be(true)
console.log(just.value)
// true
console.log(just.history)
// [null, 0, 'word']
```

```
just = just.be(0)
console.log(just.value)
// true
console.log(just.history)
// [null, 0, 'word']
```