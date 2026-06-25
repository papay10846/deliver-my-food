import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import { food } from 'images';
import { useEffect, useState } from 'react';
import sanityClient, { urlFor } from 'sanity';

function Categories() {

  const [categories, setCategories] = useState<any[]>([]);

  useEffect(()=>{
    // Fetch categories from Sanity or any other source
    sanityClient.fetch(`
      *[_type == 'category']
    `).then((data) => {
      setCategories(data);
    }).catch((error) => {
      console.error("Error fetching categories:", error);
    });
  }, [])

  // console.log('Categories:', categories);

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}>
        {/* Category Card */}
        {categories?.length! > 0 && categories?.map((category) => {
          const imageUrl = urlFor(category.image)?.width(200)?.url();
    
          return (
            <CategoryCard
              key={category._id}
              imageUrl={imageUrl}
              title={category.name}
            />
          )
        })}
        {/* <CategoryCard
          imageUrl={
            'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
          }
          title="Testing"
        />
        <CategoryCard
          imageUrl={
            'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
          }
          title="Testing1"
        />
        <CategoryCard
          imageUrl={
            'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
          }
          title="Testing2"
        />
        <CategoryCard
          imageUrl={
            'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
          }
          title="Testing2"
        />
        <CategoryCard
          imageUrl={
            'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
          }
          title="Testing2"
        /> */}
      </ScrollView>
    );
}

export default Categories;