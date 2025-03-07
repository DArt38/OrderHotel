import { useState } from "react";
import { View, Text, TextInput, FlatList, Button, TouchableOpacity, StyleSheet } from "react-native";
import useOrderStore from "../store/OrderStore";

const menuItems = [
  { id: "1", name: "Hamburguesa", category: "cocina" },
  { id: "2", name: "Pizza", category: "cocina" },
  { id: "3", name: "Cerveza", category: "bar" },
  { id: "4", name: "Cóctel", category: "bar" },
];

export default function NewOrderScreen({ navigation }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [roomNumber, setRoomNumber] = useState("");
  const addOrder = useOrderStore((state) => state.addOrder);

  const addItem = (item, quantity) => {
    if (!quantity || isNaN(quantity) || quantity <= 0) return;

    const existing = selectedItems.find((i) => i.id === item.id);
    if (existing) {
      setSelectedItems(selectedItems.map((i) => 
        i.id === item.id ? { ...i, quantity: parseInt(quantity) } : i
      ));
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: parseInt(quantity) }]);
    }
  };

  const submitOrder = () => {
    if (selectedItems.length === 0 || !roomNumber) {
      alert("Debe seleccionar productos y asignar una habitación o cliente.");
      return;
    }
    
    addOrder({ roomNumber, items: selectedItems });
    setSelectedItems([]);
    setRoomNumber("");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nuevo Pedido</Text>
      <TextInput
        placeholder="Número de habitación o cliente"
        value={roomNumber}
        onChangeText={setRoomNumber}
        style={styles.input}
      />
      
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <TextInput
              placeholder="Cantidad"
              keyboardType="numeric"
              style={styles.quantityInput}
              onChangeText={(quantity) => addItem(item, quantity)}
            />
          </View>
        )}
      />

      {/* Resumen del pedido */}
      {selectedItems.length > 0 && (
        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Resumen del Pedido</Text>
          {selectedItems.map((item) => (
            <Text key={item.id}>{item.name} x {item.quantity}</Text>
          ))}
        </View>
      )}

      <Button title="Enviar Pedido" onPress={submitOrder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  itemContainer: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  itemText: { flex: 1 },
  quantityInput: { borderWidth: 1, width: 60, textAlign: "center", marginLeft: 10, padding: 5 },
  summary: { marginTop: 20, padding: 10, backgroundColor: "#f3f3f3", borderRadius: 5 },
  summaryTitle: { fontSize: 18, fontWeight: "bold" },
});
