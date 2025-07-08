import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: 'string',
      title: 'Restaurant Name',
      validation: (Rule) => Rule.required()
    },
    {
      name: "short_description",
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: "address",
      type: 'string',
      title: 'Address',
      validation: (Rule) => Rule.max(200).required()
    },
    {
      name: "type",
      type: 'reference',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}]
    },
    {
      name: "dishes",
      type: 'array',
      title: 'Dishes',
      validation: (Rule) => Rule.required(),
      of: [{type: 'reference' , to: [{type: 'dish'}]}]
    },
    {
      name: "image",
      type: 'image',
      title: 'Image of the restaurant',
    },
    {
      name: "lat",
      type: 'number',
      title: 'Latitude',
    },
    {
      name: "long",
      type: 'number',
      title: 'Longitude',
    },
    {
      name: "rating",
      type: 'number',
      title: 'Enter a Rating from 1-5 stars',
      validation: (Rule)=> Rule.required().min(1).max(5).error("Please enter a value between 1 an d5")
    },
  ],
})
