module.exports = {
  type: 'attribute',
  transformer: (token) => {
    return {
      less: {
        name: `@${token.name}`,
        value: token.value
      }
    }
  }
}