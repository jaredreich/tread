import test from 'ava'

import tread from './'

test('tread', t => {
  t.deepEqual(tread({
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
  }),
  {
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

  t.deepEqual(tread({
    name: 'Jane'
  }, {
    name: 'John'
  }),
  {
    name: 'John'
  })

  t.deepEqual(tread({
    name: 'Jane'
  }, {
    name: 'John',
    age: 20
  }, false), {
    name: 'John',
    age: 20
  })

  t.deepEqual(tread({
    name: 'Jane'
  }, {
    name: 'John',
    age: 20
  }, true), {
    name: 'John'
  })
})
