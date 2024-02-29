import React from "react";

import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { DescPageHeader } from "@components/DescPageHeader";
import { PageHeader } from "@components/PageHeader";


import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';

export function TimeCard() {
  return (

    <View className="m-4">
      <View className="bg-[#009688] rounded-3xl shadow-md relative flex-row justify-between">
        {/* Horário */}
        <View className="rounded-3xl flex-col justify-between">
          <Text className="text-gray-400 font-bold text-xl mb-10 mt-4 ml-3">17:00</Text>

          {/* Imagem no canto inferior esquerdo */}
          <View className="mb-2 mx-2">
            <Image
              className="w-16 h-16 rounded-full"
              source={{
                uri:
                  "https://img.freepik.com/vetores-premium/ilustracao-de-pilula-de-capsula-desenhada-a-mao_1375-8434.jpg?w=740",
              }}
              accessibilityLabel={"Remedio"}
            />
          </View>
        </View>

        {/* Informações do Card */}
        <View className="ml-2 flex-1 p-2">
          <Text className="text-lg font-bold mb-2 text-[#FFFFFF] mb-10 ">Higiene Intima / Troca de Fraudas(troca de fraudas)</Text>
          {/* <Text className="text-lg font-bold mb-2 text-[#FFFFFF]">[Higiene]</Text> */}
          {/* <View className="flex flex-row gap-1">
                <Text className="text-[#BDBDBD] mb-2 font-bold">1</Text>
                <Text className="text-[#BDBDBD] mb-2 font-bold">Comprimido</Text>
              </View> */}
          {/* <Text className="text-[#BDBDBD] mb-4 font-bold">Via: Oral</Text> */}
          {/* <Button title="Aceitar" /> */}
          <View className="flex-row justify-around ml-24 w-40">
            <TouchableOpacity className=" rounded-full w-8 h-8 items-center justify-center">
              <Feather name="message-circle" size={28} color="white" />
            </TouchableOpacity>

            <TouchableOpacity className=" rounded-full w-8 h-8 items-center justify-center">
              <Ionicons name="time-outline" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity className="bg-green-500 rounded-full w-8 h-8 items-center justify-center">
              <MaterialIcons name="done" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity className="bg-red-500 rounded-full w-8 h-8 items-center justify-center">
              <Feather name="x" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

  );
}
