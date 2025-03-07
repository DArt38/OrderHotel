import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import OrdersScreen from "./src/screens/OrdersScreen";
import NewOrderScreen from "./src/screens/NewOrderScreen";
import KitchenScreen from "./src/screens/KitchenScreen";
import BarScreen from "./src/screens/BarScreen";
import ReceptionScreen from "./src/screens/ReceptionScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Orders" component={OrdersScreen} />
          <Stack.Screen name="NewOrder" component={NewOrderScreen} />
          <Stack.Screen name="Kitchen" component={KitchenScreen} />
          <Stack.Screen name="Bar" component={BarScreen} />
          <Stack.Screen name="Reception" component={ReceptionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  
  );
}
