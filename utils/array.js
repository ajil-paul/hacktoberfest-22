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

