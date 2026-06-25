import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditScreenInfo } from 'components/EditScreenInfo';
import HomeScreen from 'screens/HomeScreen';
import RestaurantScreen from 'screens/RestaurantScreen';
import { StackNavigationParams } from 'screens/types';
import { Provider } from 'react-redux';
import { store } from 'store';

const Stack = createNativeStackNavigator<StackNavigationParams>()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          {/* Screens */}
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Restaurant' component={RestaurantScreen}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
