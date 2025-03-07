import { View, Text, Button } from "react-native";

export default function OrdersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Lista de Pedidos</Text>
      <Button title="Nuevo Pedido" onPress={() => navigation.navigate("NewOrder")} />
      <Button title="Cocina" onPress={() => navigation.navigate("Kitchen")} />
      <Button title="Bar" onPress={() => navigation.navigate("Bar")} />
      <Button title="Recepción" onPress={() => navigation.navigate("Reception")} />
    </View>
  );
}
