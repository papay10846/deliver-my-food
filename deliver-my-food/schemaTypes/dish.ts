import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of Dish',
      type: 'string',
      validation: (Rule)=> Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image of the dish',
      type: 'image',
    }),
    {
      name: "short_description",
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: "price",
      type: 'number',
      title: 'Price of the dish in ₹',
    }
  ]
})
