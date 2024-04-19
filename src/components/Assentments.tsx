import React from 'react';
import { View, Text, Image } from 'react-native';
import { UserIcon } from './UserIcon';

export const Assentments = () => {
  return (
    <View className="bg-white p-4 rounded-lg shadow-md m-4">
      <Text className="text-lg font-bold">Diagnóstico +2</Text>
      <View className="mt-2">
        <View className='flex-row items-center gap-2'>
          <View className='w-16 h-16 bg-blue-400 rounded-full items-center justify-center'>
            <Image source={require('@assets/feliz.png')} style={{ width: '90%', height: '90%', }} />
          </View>
          <View className='flex-col'>
            <Text className="text-base font-semibold">Depressão PHQ-9</Text>
            <Text className="text-xs">Status Atual: Saudável</Text>
          </View>
        </View>
      </View>
      <View className="mt-5">
        <View className='flex-row items-center gap-2'>
          <View className='w-16 h-16 bg-yellow-500 rounded-full items-center justify-center'>
            <Image source={require('@assets/serio.png')} style={{ width: '70%', height: '70%', }} />
          </View>
          <View className='flex-col'>
            <Text className="text-base font-semibold">Ansiedade GAD-7</Text>
            <Text className="text-xs">Status Atual: Moderado</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
