export default function customFieldTypesParser(key, obj) {
  switch (obj.field_type) {
    case 'meta-fields':
      return {
        [key]: {
          type: 'object',
          properties: {
            _uid: {
              type: 'string',
            },
            title: {
              type: 'string',
            },
            plugin: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
          },
        },
      }
    default:
      return {}
  }
}
