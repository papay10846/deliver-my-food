import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from 'slices/basketSlice';

function BasketIcon() {

    const navigation = useNavigation();
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)

    return (
        <View>
            
        </View>
    );
}

export default BasketIcon;