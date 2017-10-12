var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...chocolateBars]

  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){

}
