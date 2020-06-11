// Code your solution here
function findMatching(array, string){
  return array.filter(driver => {
    return driver.toUpperCase() == string.toUpperCase();
  })
}

function fuzzyMatch(array, string){
  
}