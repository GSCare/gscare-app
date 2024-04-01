import { DescPageHeader } from "@components/DescPageHeader";
import { MaterialIcons } from '@expo/vector-icons';
import { PageHeader } from "@components/PageHeader";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function ClientsPathologies() {
  const [textAreaValue, setTextAreaValue] = useState("");

  return (
    <View className="flex-1 flex-col">
      <PageHeader title='Patologias do cliente' />

      <View className="justify-around flex-1 py-6 ">
        <View className="flex-1 flex-col px-10 justify-between ">
          <View className="flex-col space-x-0 space-y-0 w-50 h-20 py-3">
            <Input value="" placeholder="Nome" />
          </View>
          <View className="flex-col space-x-0 space-y-0 w-50 h-20 py-3">
            <Input value="" placeholder="Idade" />
          </View>
          <View className="flex-col space-x-0 space-y-0 w-50 h-20 py-3">
            <Input value="" placeholder="Patologias" />
          </View>
          <View className="space-x-0 space-y-0 w-50 h-40">
            <Input value="" placeholder="Digite aqui" />
          </View>
          <Button title="Atualizar" />
        </View>
      </View>
      <View className="absolute bottom-20 right-4">
        <TouchableOpacity onPress={() => {
          // TODO: abrir o formulário
        }}>
          <View className="bg-orange-300 rounded-full p-2">
            <MaterialIcons name='add' size={40} m={2} color={'white'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}