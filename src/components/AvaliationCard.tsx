import React from 'react';
import { View, Text } from 'react-native';

export const AvaliationCard = () => {
  return (
    <View className="bg-white p-4 rounded-lg shadow-md shadow-black h-full">
      <Text className="text-black text-lg my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <View className="flex-row items-center mt-2">
        <View className="bg-gray-700 p-1 rounded-full mr-2">
          <Text className="text-white text-xs">✏️</Text>
        </View>
        <Text className="text-gray-400 text-xs">2 anos atrás</Text>
      </View>
    </View>
  );
};
