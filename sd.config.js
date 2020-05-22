module.exports = {
  transform: {
    'attribute/typescript': require('./transforms/attributeTypescript'),
    'attribute/scss': require('./transforms/attributeSCSS'),
    'attribute/less': require('./transforms/attributeLess'),
  },
  
  format: {
    'json/docs': require('./formats/jsonDocs')
  },
  
  source: [`tokens/**/*.json`],
  
  platforms: {
    documentation: {
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'size/px',
        'color/css',
        'attribute/typescript',
        'attribute/scss',
        'attribute/less',
      ],
      buildPath: 'build/docs/',
      files: [{
        destination: `tokens.json`,
        format: `json/docs`
      }]
    }
  }
}