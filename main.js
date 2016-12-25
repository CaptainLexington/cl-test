'use strict'

const resources = [
  {
    type: 'Person',
    order: 1,
    name: 'Brian'
  }, {
    type: 'Place',
    order: 2,
    name: 'Ohio'
  }, {
    type: 'Place',
    order: 12,
    name: 'Ohio'
  }, {
    type: 'Person',
    order: 14,
    name: 'Sarah'
  }, {
    type: 'Person',
    order: 199,
    name: 'Sam'
  }, {
    type: 'Person',
    order: 19,
    name: 'Eric'
  }, {
    type: 'Place',
    order: 20,
    name: 'Home'
  }
]

function reducer (results, resource) {
  let newResults = results
  if (resource.type === 'Person') {
    let lastIndex = results.length - 1

    if (results[lastIndex] && results[lastIndex].type === 'Person') {
      newResults[lastIndex].people.push(resource.name)
      newResults[lastIndex].order = resource.order
    } else {
      resource.people = [resource.name]
      delete resource['name']
      newResults = results.concat(resource)
    }
  } else {
    newResults = results.concat(resource)
  }
  return newResults
}

function sortByOrder (a, b) {
  return a.order - b.order
}

var newResults = resources.sort(sortByOrder).reduce(reducer, [])
console.log(newResults)
var directive = {
  'li': {
    'resource<-': {
      'span.order': 'resource.order',
      'span.data': function (resource) {
        return resource.item.name || resource.item.people.join(', ')
      }
    }
  }
}

$p('ul').render(newResults, directive)
