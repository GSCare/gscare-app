import React from "react";

import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { DescPageHeader } from "@components/DescPageHeader";
import { PageHeader } from "@components/PageHeader";


import { MaterialIcons, Feather, Ionicons  } from '@expo/vector-icons';

export function CardDanger() {
  return (

        <View className="p-4">
          <View className="bg-red-500 p-4 rounded-3xl shadow-md relative">
            {/* Horário */}
            <Text className="text-white font-bold text-xl mb-2 mt-4 ml-3 absolute top-0 left-0">10:31</Text>

            {/* Imagem no canto inferior esquerdo */}
            <View className="absolute bottom-0 left-0 mb-2 ml-3">
              <Image
                className="w-16 h-16 rounded-full"
                source={{
                  uri:
                    "https://img.freepik.com/vetores-premium/ilustracao-de-pilula-de-capsula-desenhada-a-mao_1375-8434.jpg?w=740",
                }}
                accessibilityLabel={"Remedio"}
              />
            </View>

            {/* Informações do Card */}
            <View className="ml-20">
              <Text className="text-lg font-bold mb-2 text-[#FFFFFF]">Agitação</Text>
              <View className="flex flex-row gap-1 w-60 flex-wrap">
                <Text className="text-gray-300 mb-2 font-bold">Paciente ficou agitado e agressivo aós o café da manhã </Text>
              </View>
              {/* <Button title="Aceitar" /> */}
              <View className="flex-row justify-around ml-24 w-40 mt-4">
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
