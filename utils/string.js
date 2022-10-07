//Slugify a string
const slugify = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof str} provided`)
    return str
  }
  return text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}
