import React from 'react';
import { View, Text, Image } from 'react-native';
import { UserIcon } from './UserIcon';
import { FontAwesome } from '@expo/vector-icons';

interface IProps {
  rating: number; // Adicionado para representar a classificação do funcionário
}

export function CardProfileEmployee({ rating }: IProps) {

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={i <= rating ? 'star' : 'star-o'} // 'star-o' é o ícone de estrela vazia
          size={16}
          color={i <= rating ? 'orange' : 'grey'} // Estrelas vazias em cinza
        />
      );
    }
    return stars;
  };
  return (
    <View className='bg-white p-4 rounded-lg shadow-lg shadow-black'>
      <View className='flex-row items-center gap-2'>
        <View className='w-16 h-16'>
          <UserIcon name='Luís Felipe' />
        </View>
        <View className='flex-col'>
          <Text className='text-lg font-bold'>Luís Felipe</Text>
          <View>
            <Text className='text-sm text-gray-300'>20 anos - Belo Horizonte</Text>
          </View>
          <View className='flex-row mt-2 w-full'>
            <View className="flex-col ">
              <View className='flex-row items-center gap-1'>
                <Text className='font-bold text-sm'>4.98</Text>
                <FontAwesome
                  name='star'
                  size={12}
                  color='blackD'
                />
              </View>
              <Text className='text-gray-400 text-xs w-20'>Avaliação</Text>
            </View>
            <View className='flex-col m-auto'>
              <Text className='font-bold text-sm'>3.5</Text>
              <Text className='text-gray-400 text-xs w-20'>Experiência</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};