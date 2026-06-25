import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanityClient, { urlFor } from 'sanity';
import { useEffect, useState } from 'react';

function FeaturedRow({data, title, description, id}: {data?:any[], title: string, description: string, id:string}) {

  // Alternative approach to fetch and handle the data using graph QL without using the `data` prop which is coming from the parent component
  const [restaurantData, setRestaurantData] = useState<any[]>([]);

  useEffect(()=>{
    sanityClient.fetch(`
      *[_type == 'featured' && _id == $id] {
        ...,
        restaurants[]-> {
          ...,
          dishes[]->,
        }
      }[0]
      `, { id }).then((data) => {setRestaurantData(data?.restaurants || [])})?.catch((error) => {console.log("Error fetching restaurant data:", error)})
  }, [])
  

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
          {restaurantData?.length! > 0 && restaurantData?.map((restaurant) => {
            const imageUrl = urlFor(restaurant.image).url();
            return (
              <RestaurantCard
                key={restaurant._id}
                id={restaurant._id}
                imgUrl={imageUrl}
                address={restaurant.address}
                dishes={restaurant.dishes}
                genre={restaurant.genre}
                lat={restaurant.lat}
                long={restaurant.long}
                rating={restaurant.rating}
                short_desc={restaurant.short_description}
                title={restaurant.name}
            />
            )
          })}
          
          {/* <RestaurantCard
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
          /> */}
        </ScrollView>
      </View>
    );
}

export default FeaturedRow;