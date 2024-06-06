import React from "react";

import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { DescPageHeader } from "@components/DescPageHeader";
import { PageHeader } from "@components/PageHeader";
import { Input } from '@components/Input'

import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';

export function RegistrationActivitiesHealth() {
  return (
    <View className="m-4">
      <View className="bg-[#fff] rounded-3xl shadow-md relative flex-row justify-between">
        {/* Horário */}
        <View className="bg-yellow-300 rounded-3xl flex-col justify-between">
          <Text className="text-gray-400 font-bold text-xl mb-2 mt-4 ml-3">17:00</Text>

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
          <Text className="text-lg font-bold mb-2 text-yellow-300">Ingestão Hídrica</Text>
          <Text className="text-gray-400 mb-2 font-bold">Informar se paciente aceitou água ofertada nesse horário</Text>
          <View className="w-50 h-16 py-3">
            <TextInput
              style={{
                backgroundColor: "#ffff",
                width: "100%",
                height: "100%",
                padding: 10,
                borderWidth: 1,
                borderRadius: 8,
                fontSize: 16,
                color: "#718096",
              }}
              placeholder="digite o valor aqui"
            />
          </View>
          {/* <Button title="Aceitar" /> */}
          <View className="flex-row justify-end gap-x-2 w-full">
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