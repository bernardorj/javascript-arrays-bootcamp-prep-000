var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]


function addElementToBeginningOfArray(array, element){
  [element, ...array]

  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var array = array.unshift(element)

  return array
}

function addElementToEndOfArray(array, element){
  [...array, element]

  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  var array = array.push(element)

  return array
}
