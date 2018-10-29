// Code your solution in this file
function findMatching(drivers, name) {
  var NewArray = drivers.filter(driver => (driver.toLowerCase() === name.toLowerCase()))
  return NewArray
}

function fuzzyMatch(drivers, string) {
  console.log(drivers)
  var matched = drivers.filter(driver => (driver.substring(0, 2) === string))
  return matched
}

function matchName(drivers, name) {
  var NewArray = drivers.filter(driver => (driver.name === name))
  return NewArray
}
