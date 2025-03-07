import { View, Text, FlatList, StyleSheet } from "react-native";
import useOrderStore from "../store/OrderStore";

export default function ReceptionScreen() {
  const orders = useOrderStore((state) => state.orders);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Pagos</Text>
      <FlatList
        data={orders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.order}>
            <Text>Habitación: {item.roomNumber}</Text>
            {item.items.map((product, index) => (
              <Text key={index}>{product.name} x{product.quantity}</Text>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  order: { padding: 10, backgroundColor: "#ddd", marginBottom: 5 },
});
