import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface IProps{
  status: "Concluído" | "Disponível" | "Indisponível";
  shift: number;
  start:string;
  end:string;
}

function PlantaoCard({status,shift,start,end}:IProps) {
  let backgroundColor = 'bg-gray-600';
  if (status === 'Disponível') {
    backgroundColor = 'bg-blue-500';
  } else if (status === 'Concluído') {
    backgroundColor = 'bg-green-500';
  }
  return (
    <View className='bg-white rounded-lg shadow-md'>
      <View className='flex-row justify-between items-center mb-2'>
        <View className={`${backgroundColor} w-full py-4 px-2 rounded`}>
          <Text className='text-xl font-bold text-white'>
          {status}
          </Text>
        </View>
      </View>
      <View className='justify-between flex-row p-4'>
        <View>
          <Text className='text-base text-gray-500'>Plantão {shift} horas</Text>
          <Text className='text-base text-gray-500'>Data de início: {start}</Text>
          <Text className='text-base text-gray-500'>Data de fim: {end}</Text>
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
