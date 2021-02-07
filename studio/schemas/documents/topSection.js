export default {
  name: 'topSection',
  title: 'Top Section',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'string'
    },
    {
      name: 'topImage',
      title: 'Top image',
      type: 'figure'
    },
  /*  {
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [{type: 'reference', to: {type: 'menuItems'}}]
    }*/
  ]
}
