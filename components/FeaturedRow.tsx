import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

function FeaturedRow({title, description, id}: {title: string, description: string, id:string}) {
    return (
      <View className="p-2 px-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold">{title}</Text>
          <ArrowRightIcon color={'#00CCBB'} size={20} />
        </View>
        <Text className="text-sm ">{description}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
          }}
          className="pt-4">
          {/* Restaurant Card */}
          <RestaurantCard
            id="1"
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
            address='CK 189'
            dishes={[]}
            genre='Bengali'
            lat='20'
            long='10'
            rating='4.5'
            short_desc='Test Description'
            title='Vat Dal'  
          />
          <RestaurantCard
            id="1"
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
            address='CK 189'
            dishes={[]}
            genre='Bengali'
            lat='20'
            long='10'
            rating='4.5'
            short_desc='Test Description'
            title='Vat Dal'  
          />
          <RestaurantCard
            id="1"
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
            address='CK 189'
            dishes={[]}
            genre='Bengali'
            lat='20'
            long='10'
            rating='4.5'
            short_desc='Test Description'
            title='Vat Dal'  
          />
        </ScrollView>
      </View>
    );
}

export default FeaturedRow;