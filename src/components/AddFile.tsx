import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from './Button';

export function AddFile() {

  return (
    <View className=''>
      <View className='w-28 h-28 m-auto'>
        <Image source={require('@assets/adicionar-ficheiro.png')} style={{ width: '100%', height: '100%' }} />
      </View>
      <View className='items-center mt-6'>
        <Text className='text-gray-600 w-64 text-center'>Configure um processo de tratamento para este paciente específico</Text>
      </View>
      <View className='w-40 h-40 justify-center m-auto '>
        <TouchableOpacity
          className={`
        w-40
        b-1
        h-12
        bg-gray-200
        border-0
        border-orange
        rounded-lg
        flex-row
      `}
        >
          <View className='m-auto flex flex-row'>
            <Text
              className='
          text-center
          text-black
          font-heading
          text-shadow
          font-bold
          text-base
          '
            >
              Upload Files
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
