// import sanityClient from '@sanity/client'
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const sanityClient = createClient({
  projectId: 'vvd4ogr0',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21'
});

const builder = imageUrlBuilder(sanityClient)

//helper function
export const urlFor = (source) => builder.image(source)

// sanity cors add http://localhost:3000

export default sanityClient;