import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ListScreen from '../screens/ListScreen';
import ComponentDemo from '../screens/ComponentDemo';
import ImageScreen from '../screens/ImageScreen';
import CounterScreen from '../screens/CounterScreen';
import ColorScreen from '../screens/ColorScreen';
import SquareScreen from '../screens/SquareScreen';
import SquareWithReduce from '../screens/SquareWithReduce';
import CounterWithReduce from '../screens/CounterWithReduce';
import TextScreen from '../screens/TextScreen';
import BoxScreen from '../screens/BoxScreen';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="ComponentDemo" component={ComponentDemo} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="SquareScreen" component={SquareScreen} />
        <Stack.Screen name="SquareReduce" component={SquareWithReduce} />
        <Stack.Screen name="CounterReduce" component={CounterWithReduce} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="BoxScreen" component={BoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation