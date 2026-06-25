import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigationParams } from './types';
import { ArrowLeftCircleIcon, ChevronRightIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { urlFor } from 'sanity';
import Dishrow from 'components/Dishrow';
type RestaurantRouteProp = RouteProp<StackNavigationParams, 'Restaurant'>;


function RestaurantScreen() {

    const navigation = useNavigation();
    const route = useRoute<RestaurantRouteProp>();
    // Destructure the parameters from the route
    const {address,dishes,genre,id,imgUrl,lat,long,rating,short_desc,title} = route.params;

    //hide navigation header
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
      <ScrollView>
        <View className="relative">
          <Image source={{ uri: imgUrl }} className="h-56 w-full bg-gray-300 p-4" />
          <TouchableOpacity
            className="absolute left-5 top-14 rounded-full bg-gray-100"
            onPress={navigation.goBack}>
            <ArrowLeftCircleIcon size={30} color={'#00CCBB'} />
          </TouchableOpacity>
        </View>
        <View>
            <View className="bg-white px-4 pt-4 pb-2 border-b border-gray-300">
                <Text className="text-3xl font-bold">{title}</Text>
                <View className="my-1 flex-row items-center space-x-2">
                    <Text className="text-xs text-gray-500">{genre}</Text>
                    <Text className="text-xs text-gray-500">⭐ {rating}</Text>
                    <Text className="text-xs text-gray-500"> •</Text>
                    <Text className="text-xs text-gray-500"> Offers </Text>
                    <View className="flex-row items-center gap-1 ml-4">
                        <MapPinIcon color={'gray'} size={22} />
                        <Text className="text-xs text-gray-500">Nearby • {address}</Text>
                    </View>
                </View>
                <Text className=" text-gray-500 text-sm">{short_desc}</Text>
            </View>
            <TouchableOpacity className='flex-row items-center justify-between bg-white p-4 border-b border-gray-300'>
                <QuestionMarkCircleIcon size={22} color={'gray'} opacity={0.6}/>
                <Text className='font-bold flex-1 pl-2'>Have a food allergy?</Text>
                <ChevronRightIcon size={22} color={'#00CCBB'} />
            </TouchableOpacity>
            <View className='p-4'>
                <Text className="text-lg font-bold">Menu</Text>
            </View>
            <View className='bg-white'>
                {dishes?.length! > 0 && dishes?.map((dish) => (
                    <Dishrow 
                        key={dish._id}
                        _id={dish._id}
                        name={dish.name}
                        short_description={dish.short_description}
                        image={dish.image}
                        price={dish.price}
                    />
                ))}
            </View>
        </View>
      </ScrollView>
    );
}

export default RestaurantScreen;