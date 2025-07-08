import { useNavigation } from '@react-navigation/native';
import Categories from 'components/Categories';
import FeaturedRow from 'components/FeaturedRow';
import { food } from 'images';
import { useLayoutEffect } from 'react';
import { Text, View, SafeAreaView, StatusBar, Platform, Image, TextInput, ScrollView } from 'react-native';
import {AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon} from "react-native-heroicons/outline"

function HomeScreen() {

  const navigation = useNavigation()

  useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown: false
      })
  }, [])

  return (
    <SafeAreaView className="bg-white pb-7">
      {/* header */}
      <View
        style={{ marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
        className="mx-2 flex-row items-center gap-2 pb-3">
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
          }}
          className="h-10 w-10 rounded-full bg-gray-300 object-contain p-4"
        />
        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">Deliver Now!</Text>
          <View className="flex-row items-center">
            <Text className="text-xl font-bold">Current Location</Text>
            <ChevronDownIcon size={18} color={'#00CCBB'} />
          </View>
        </View>
        <UserIcon size={35} className="justify-self-end" color={'#00CCBB'} />
      </View>

      {/* Search */}
      <View className="mx-2 flex-row items-center gap-2 pb-2">
        <View className="flex-1 flex-row items-center  bg-gray-200 px-2">
          <MagnifyingGlassIcon size={20} color={'gray'} />
          <TextInput placeholder="Resaurant and dishes" keyboardType="default" />
        </View>
        <AdjustmentsVerticalIcon color={'#00CCBB'} />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Categories */}
        <Categories />
        {/* Featured */}
        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          id='1'
        />
        {/* Tasty Discounts */}
        <FeaturedRow
          title="Tasty Discounts"
          description="Paid placements from our partners"
          id='2'
        />
        {/* Offers near you */}
        <FeaturedRow
          title="Offers near you!"
          description="Paid placements from our partners"
          id='3'
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;