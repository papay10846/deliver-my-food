import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MinusCircleIcon, PlayCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { urlFor } from 'sanity';
import { dish } from 'screens/types';
import { addToBasket, CounterState, removeFromBasket, selectBasketItems, selectBasketItemsById } from 'slices/basketSlice';

function Dishrow({_id,image,name,price,short_description}: dish) {
    const dispatch  = useDispatch()
    
    // const [isPressed, setIsPressed] = React.useState(false);
    const items = useSelector((state: { basket: CounterState }) =>
      selectBasketItemsById(state, _id)
    );
    // console.log('items: ',items)
    return (
      <>
        <TouchableOpacity
        //  onPress={() => setIsPressed(!isPressed)}
        >
          <View key={_id} className={'border border-b-0 border-gray-200 p-4'}>
            <View className="flex-row items-start justify-between">
              <View>
                <Text className="text-lg font-bold">{name}</Text>
                <Text className="text-gray-500">{short_description}</Text>
              </View>
              <Image
                source={{ uri: urlFor(image)?.url() }}
                style={{ borderWidth: 1, borderColor: '#F3F3F4' }}
                className="h-20 w-20"
              />
            </View>
            <Text className="font-bold text-gray-900">${price}</Text>
          </View>
        </TouchableOpacity>
        {/* {isPressed && ( */}
        <View className="bg-white px-4">
          <View className="flex-row items-center gap-2 pb-3">
            <TouchableOpacity
              onPress={() => {
                dispatch(removeFromBasket({ _id, image, name, price, short_description }));
              }}
              disabled={items?.length === 0}
            >
              <MinusCircleIcon size={30} color={items?.length > 0 ? '#00CCBB' : 'gray'} />
            </TouchableOpacity>
            <Text>{items?.length}</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(addToBasket({ _id, image, name, price, short_description }));
              }}>
              <PlusCircleIcon size={30} color={'#00CCBB'} />
            </TouchableOpacity>
          </View>
        </View>
        {/* )} */}
      </>
    );
}

export default Dishrow;