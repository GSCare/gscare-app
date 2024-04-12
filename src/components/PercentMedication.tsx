import React from 'react';
import { View, Text } from 'react-native';

interface UserCardProps {
  progress: number; // Porcentagem de conclusão
}

export function PercentMedication({ progress }: UserCardProps) {
  const getProgressBarColor = (progress: number): string => {
    if (progress < 25) {
      return 'bg-red-500';
    } else if (progress < 50) {
      return 'bg-yellow-500';
    } else if (progress < 75) {
      return 'bg-green-500';
    } else {
      return 'bg-blue-500';
    }
  };

  return (
    <View className='bg-white p-3 rounded-lg shadow-md w-44 h-32'>
      <View className='flex-row items-center justify-between mb-4'>
        <Text className='text-sm text-gray-500 w-22'>Porcentagem da Medicação</Text>
        <Text className='text-lg font-bold mt-6'>{progress}%</Text>
      </View>
      <View className='h-2 bg-gray-200 rounded-full overflow-hidden'>
        <View
          className={`h-full ${getProgressBarColor(progress)}`}
          style={{ width: `${progress}%` }} // Ajusta a largura da barra de progresso
        />
      </View>
    </View>
  );
};
