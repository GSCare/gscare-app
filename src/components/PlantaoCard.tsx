import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const PlantaoCard = () => {
  return (
    <View className='bg-white rounded-lg shadow-md'>
      <View className='flex-row justify-between items-center mb-2'>
        <View className='bg-green-500 w-full py-4 px-2 rounded'>
          <Text className='text-xl font-bold text-white'>
            Concluído
          </Text>
        </View>
      </View>
      <View className='justify-between flex-row p-4'>
        <View>
          <Text className='text-base text-gray-500'>Plantão 24 horas</Text>
          <Text className='text-base text-gray-500'>Data de início: 15/02/2024</Text>
          <Text className='text-base text-gray-500'>Data de fim: 16/02/2024</Text>
          {/* Mais informações aqui */}
        </View>
        <View className='justify-center'>
          <TouchableOpacity className='bg-blue-500 p-2 rounded' onPress={() => console.log('Ver plantão')}>
            <Text className='text-white text-base items-center'>Ver plantão</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlantaoCard;
