function getGreeting(name = "World") {
  return `Hello, ${name}! Welcome to GitHub Actions.`;
}

if (require.main === module) {
  console.log(getGreeting());
}

module.exports = { getGreeting };
