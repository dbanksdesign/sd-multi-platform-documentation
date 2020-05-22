module.exports = {
  type: 'attribute',
  transformer: (token) => {
    return {
      scss: {
        name: `$${token.name}`,
        value: token.value
      }
    }
  }
}