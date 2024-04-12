import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { UserIcon } from './UserIcon';

const UserCard = () => {
  return (
    <View className="bg-white p-4 rounded-2xl shadow-2xl h-full">
      <View className="flex-row">
        <View className='w-20 h-20 m-auto mr-4'>
          <UserIcon
            name='Jhon Doe'
          />
        </View>
        <View className='flex-1'>
          <Text className="text-lg font-semibold">Jhon Doe</Text>
          <Text>jhondoe@email.com</Text>
          <Text className='mb-2'>1 949 555 0198</Text>
          <Text className="text-gray-600">Rua dos bobos N*0</Text>
          <Text className="text-gray-600">Apartamento Rios de Luz 151C Bloco 3</Text>
        </View>
      </View>
      <View className="flex-row justify-end">
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg mt-2">
          <Text className='text-white text-sm'>Ver Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserCard;
