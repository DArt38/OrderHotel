import { View, Text, FlatList, StyleSheet } from "react-native";
import useOrderStore from "../store/OrderStore";

export default function BarScreen() {
  const orders = useOrderStore((state) => state.orders);

  const barOrders = orders.flatMap(order => 
    order.items.filter(item => item.category === "bar").map(item => ({
      ...item,
      roomNumber: order.roomNumber,
    }))
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedidos en el Bar</Text>
      <FlatList
        data={barOrders}
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
