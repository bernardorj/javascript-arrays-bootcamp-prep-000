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
  var newArray2 = array.unshift(element)

  return newArray2
}

function addElementToEndOfArray(array, element){
  var newArray3 = [...array, element]

  return newArray3
}

function destructivelyAddElementToEndOfArray(array, element){
  chocolateBars.push(element)
}
