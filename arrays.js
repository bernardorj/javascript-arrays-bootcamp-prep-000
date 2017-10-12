var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]

  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = array.unshift(element)

  return newArray
}

function addElementToEndOfArray(array, element){
  var newArray = [...array, element]

  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  var newArray = chocolateBars.push(element)

  return newArray
}
