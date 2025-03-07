import { View, Text, FlatList, StyleSheet } from "react-native";
import useOrderStore from "../store/OrderStore";

export default function KitchenScreen() {
  const orders = useOrderStore((state) => state.orders);

  const kitchenOrders = orders.flatMap(order => 
    order.items.filter(item => item.category === "cocina").map(item => ({
      ...item,
      roomNumber: order.roomNumber,
    }))
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedidos en la Cocina</Text>
      <FlatList
        data={kitchenOrders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.name} x{item.quantity} - Habitación {item.roomNumber}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
});
