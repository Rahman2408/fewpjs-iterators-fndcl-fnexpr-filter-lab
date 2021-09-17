// Code your solution here
function findMatching(dArry, driver) {
  return  dArry.filter(d => {
    return d.toLowerCase() === driver.toLowerCase();
  })
}

function fuzzyMatch(dArry, letters) {
  return dArry.filter(d => {
    return d[0] === letters[0] || d[0,1] == letters[0,1]
  })
}

function matchName(dArry, name) {
  return dArry.filter(d => {
    return d.name === name
  })
}