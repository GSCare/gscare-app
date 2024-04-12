import React from 'react';
import { View, Text, Image } from 'react-native';
import { UserIcon } from './UserIcon';

export function CardProfilePatient() {
  return (
    <View className='bg-white p-4 rounded-lg shadow-md'>
      <View className='flex-row items-center gap-2'>
        <View className='w-16 h-16'>
          <UserIcon name='Luís Felipe' />
        </View>
        <View className='flex-col'>
          <Text className='text-lg font-bold'>Luís Felipe</Text>
          <View>
            <Text className='text-sm text-gray-300'>20 anos - Belo Horizonte</Text>
          </View>
        </View>

      </View>
    </View>
  );
};