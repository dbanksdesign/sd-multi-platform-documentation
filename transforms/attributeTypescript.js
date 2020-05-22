const transforms = require('style-dictionary/lib/common/transforms');

module.exports = {
  type: 'attribute',
  transformer: (token, options) => {
    return {
      typescript: {
        // these transforms will need to match the ones you use for typescript
        // or you can "chain" the transforms and use token.name and token.value
        // like scss and less transforms do.
        name: transforms['name/cti/camel'].transformer(token, options),
        value: transforms['color/hex'].transformer(token, options)
      }
    }
  }
}