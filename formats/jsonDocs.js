module.exports = function(dictionary, config) {
  const obj = dictionary.allProperties.reduce((obj, token) => {
    const { comment, name } = token;
    const { scss, less, typescript, category } = token.attributes;
    obj[name] = {
      formats: {
        scss,
        less,
        typescript
      },
      comment,
      category,
    }
    return obj;
  }, {});
  
  return JSON.stringify(obj, null, 2);
}