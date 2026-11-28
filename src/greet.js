
function greet(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    return 'Hello World!'
  }

  return `Hello ${name}!`
}

module.exports = { greet }