import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import { food } from 'images';

function Categories() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}>
        <CategoryCard
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
        />
      </ScrollView>
    );
}

export default Categories;