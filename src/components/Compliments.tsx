import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

export const Compliments = () => {
  return (
    <ScrollView horizontal className="flex-row p-2" showsHorizontalScrollIndicator={false}>
      <View className="items-center m-2">
        <View className="w-16 h-16 rounded-full overflow-hidden mb-2">
          <Image source={require('@assets/gostei-icon.png')} className="w-full h-full" />
        </View>
        <Text className="text-gray-500 text-center w-20">Excelente Serviço</Text>
      </View>
      <View className="items-center m-2">
        <View className="w-16 h-16 rounded-full overflow-hidden mb-2">
          <Image source={require('@assets/cara-feliz.png')} className="w-full h-full" />
        </View>
        <Text className="text-gray-500 text-center w-20">Amigável</Text>
      </View>
      <View className="items-center m-2">
        <View className="w-16 h-16 rounded-full overflow-hidden mb-2">
          <Image source={require('@assets/falando.png')} className="w-full h-full" />
        </View>
        <Text className="text-gray-500 text-center w-20">Ótima Conversa</Text>
      </View>
      <View className="items-center m-2">
        <View className="w-16 h-16 rounded-full overflow-hidden mb-2">
          <Image source={require('@assets/aperto-de-mao.png')} className="w-full h-full" />
        </View>
        <Text className="text-gray-500 text-center w-20">Respeitoso</Text>
      </View>
    </ScrollView>
  );
};
