import { DescPageHeader } from "@components/DescPageHeader";
import { PageHeader } from "@components/PageHeader";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

const ShoppingList: React.FC = () => {
  const [item, setItem] = useState<string>("");
  const [shoppingList, setShoppingList] = useState<string[]>([]);

  const handleAddItem = () => {
    if (item.trim() !== "") {
      setShoppingList([...shoppingList, item]);
      setItem("");
    }
  };

  const handleRemoveItem = (index: number) => {
    const newList = [...shoppingList];
    newList.splice(index, 1);
    setShoppingList(newList);
  };

  return (

    <View className="flex-1">
      <PageHeader title="Lista de Compras" />
      <DescPageHeader title="Crie a lista de compras do paciente" />
      <View className="mt-10 p-4">
        <TextInput
          value={item}
          onChangeText={setItem}
          placeholder="Digite o item da lista"
          className="border border-gray-300 p-2 rounded mb-4"
        />
        <TouchableOpacity onPress={handleAddItem} className="bg-blue-500 rounded p-2 mb-4">
          <Text className="text-white text-center">Adicionar Item</Text>
        </TouchableOpacity>
        <ScrollView>
          {shoppingList.map((shoppingItem, index) => (
            <View key={index} className="flex-row items-center justify-between border-b border-gray-300 p-2">
              <Text>{shoppingItem}</Text>
              <TouchableOpacity onPress={() => handleRemoveItem(index)} className="text-red-500">
                <Text>Remover</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity className="bg-green-500 rounded p-2 mt-4">
          <Text className="text-white text-center">Já Comprado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShoppingList;
