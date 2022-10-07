//simple utility function 
const times = (times, func) => {
  if (isNaN(times)) {
    console.error("times to run must be specified")
    return
  }
  if (typeof func !== "function") {
    console.error(`func must be a valid function, ${typeof func} provided`)
    return
  }
  Array.from(Array(times)).forEach(() => {
    func()
  })
}

//Generate a random number within a specified range
const getRandomNumberInRange = (lower = 0, upper = 10) => {
  if (isNaN(lower) || isNaN(upper)) {
    console.error("lower and upper must be valid numbers")
    return
  }
  lower = Math.ceil(lower)
  upper = Math.floor(upper)
  return Math.floor(Math.random() * (upper - lower + 1)) + lower
}
