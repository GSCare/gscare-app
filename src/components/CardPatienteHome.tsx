import React from 'react';
import { View, Text, Image } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { UserPhoto } from './UserPhoto';

const CardPatienteHome = () => {
  return (
    <View className='bg-[#6A39F1] rounded-xl shadow-2xl shadow-black p-4 mt-10 w-96'>

      <View className='flex-col'>
        <View className='flex-row items-center'>
          <View className='w-12 h-12'>
            <UserPhoto altDescription='Foto Paciente' sourceUrl='https://github.com/luisfelipeprs.png' />
          </View>
          <View>
            <Text className='ml-2 text-white font-bold'>Luís Felipe Silva</Text>
            <View className='flex-row border-[1px] border-white rounded-full items-center w-11 p-[2px] mt-2 ml-2'>
            <AntDesign name="star" size={12} color="yellow" />
            <Text className='text-white text-xs font-bold ml-1'>4.8</Text>
            </View>
          </View>
        </View>
        <View className='border-b-2 border-b-gray-300 rounded-full mt-10 mb-1'></View>
        <View className='flex-row gap-2'>
          <View className='flex-row items-center gap-1'>
            <MaterialCommunityIcons name="account" size={18} color="white" />
            <Text className='mr-4 text-white font-bold text-xs'>(xx) xxxxx-xxxx</Text>
          </View>
          <View className='flex-row items-center gap-1'>
            <FontAwesome5 name="calendar-alt" size={15} color="white" />
            <Text className='mr-4 text-white font-bold text-xs'>DD/MM/YYYY</Text>
          </View>
          <View className='flex-row items-center gap-1'>
            <AntDesign name="clockcircle" size={15} color="white" />
            <Text className='text-white font-bold text-xs'>HH:mm</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardPatienteHome;
