## Installation

``` bash
npm install --save tread
```

## Usage

```javascript
// user from your database
var user = {
  details: {
    name: {
      first: 'Jane',
      last: 'Smith'
    },
    address: {
      street: {
        number: '5',
        name: 'Oak Lane'
      },
      coordinates: {
        lat: 50,
        lng: 50
      }
    }
  },
  gender: 'm'
}

// userUpdates from your PUT request
var userUpdates = {
  details: {
    name: {
      first: 'John'
    },
    address: {
      coordinates: {
        lat: 100
      }
    }
  }
}

// perform the update
user = tread(user, userUpdates, strict)

// save the updated user in the database
user.save(...)
```

#### Strict mode

strict (Boolean, default = false): only updates object if the key already existed.
For example:
```javascript
tread({ name: 'Jane' }, { name: 'John', age: 20 }, true)
// outputs
{ name: 'John' }

tread({ name: 'Jane' }, { name: 'John', age: 20 }, false)
// OR
tread({ name: 'Jane' }, { name: 'John', age: 20 })
// outputs
{ name: 'John', age: 20 }
```
