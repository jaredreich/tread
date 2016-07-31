var tread = require('./')
var test = require('tape')

test('tread', function (assert) {
  assert.plan(2)
  assert.deepEqual(tread({
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
  }, {
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
  }), {
    details: {
      name: {
        first: 'John',
        last: 'Smith'
      },
      address: {
        street: {
          number: '5',
          name: 'Oak Lane'
        },
        coordinates: {
          lat: 100,
          lng: 50
        }
      }
    },
    gender: 'm'
  })
  assert.deepEqual(tread({
    name: 'Jane'
  }, {
    name: 'John'
  }), {
    name: 'John'
  })
})
