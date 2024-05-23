import { CardMissingItemsList } from "@components/CardMissingItemsList";
import { DescPageHeader } from "@components/DescPageHeader";
import { PageHeader } from "@components/PageHeader";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

const ShoppingList: React.FC = () => {
  const [item, setItem] = useState<string>("");
  const [quantidade, setQuantidade] = useState<string>("");
  const [shoppingList, setShoppingList] = useState<{ item: string, date: string, quantidade: string }[]>([]);
  const [purchasedList, setPurchasedList] = useState<{ item: string, date: string }[]>([]);

  const handleAddItem = () => {
    if (item.trim() !== "") {
      const newItem = { item, quantidade, date: new Date().toLocaleDateString() };
      setShoppingList([...shoppingList, newItem]);
      setItem("");
    }
  };

  const handleRemoveItem = (index: number) => {
    const newList = [...shoppingList];
    newList.splice(index, 1);
    setShoppingList(newList);
  };

  const handlePurchaseItem = (index: number) => {
    const purchasedItem = shoppingList[index];
    setPurchasedList([...purchasedList, purchasedItem]);
    handleRemoveItem(index);
  };

  return (
    <View className="flex-1">
      <PageHeader title="Lista de Compras" />
      <View className="mt-10 p-4">
        <TextInput
          value={item}
          onChangeText={setItem}
          placeholder="Digite o item da lista"
          className="border border-gray-300 p-2 rounded mb-4"
        />
        <TextInput
          value={quantidade}
          onChangeText={setQuantidade}
          placeholder="Digite a quantidade do item"
          className="border border-gray-300 p-2 rounded mb-4"
        />
        <TouchableOpacity onPress={handleAddItem} className="bg-blue-500 rounded p-2 mb-4">
          <Text className="text-white text-center">Adicionar Item</Text>
        </TouchableOpacity>
        <ScrollView>
          {shoppingList.map((shoppingItem, index) => (
            <View key={index} className="flex-row items-center justify-between p-2">
              <CardMissingItemsList nomeAlimento={shoppingItem.item} quantidade={shoppingItem.quantidade} date={shoppingItem.date} />
            </View>
          ))}
        </ScrollView>
        {/* <Text className="mt-4 mb-2 text-lg">Itens Comprados:</Text>
        <ScrollView>
          {purchasedList.map((purchasedItem, index) => (
            <View key={index} className="flex-row items-center justify-between border-b border-gray-300 p-2">
              <View>
                <Text>{purchasedItem.item}</Text>
                <Text className="text-gray-500 text-sm">{purchasedItem.date}</Text>
              </View>
            </View>
          ))}
        </ScrollView> */}
      </View>
    </View>
  );
};

export default ShoppingList;
