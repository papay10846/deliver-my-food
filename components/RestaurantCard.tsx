import { Image, TouchableOpacity, View, Text } from 'react-native';
// import { MapPinIcon } from 'react-native-heroicons/outline';
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid';

function RestaurantCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat,
}: {
  id: string;
  imgUrl: string
  title: string
  rating: string
  genre: string
  address: string
  short_desc: string
  dishes: string[]
  long: string
  lat: string
}) {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={{ uri: imgUrl }} className="h-44 w-64 rounded-sm" />
      <View className='px-2'>
        <Text className="pt-2 text-lg font-bold">{title}</Text>
        <View className="flex-row items-center gap-1">
            <StarIcon color={'green'} opacity={0.5} size={22} />
            <Text className='text-xs text-gray-500'>
                <Text className='text-green-500'>{rating}</Text>  . {genre}
            </Text>
        </View>
        <View className='flex-row items-center gap-1'>
            <MapPinIcon color={'gray'} opacity={.4} size={22}/>
            <Text className='text-xs font-bold text-gray-500'>Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default RestaurantCard;