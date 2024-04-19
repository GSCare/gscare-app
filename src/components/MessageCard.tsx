import React from 'react';
import { View, Text, Image } from 'react-native';

interface IProps {
  title: string;
  message: string;
  color: "red" | "yellow" | "blue";
}

export function MessageCard({ title, message, color }: IProps) {
  const colorClasses = {
    red: 'bg-red-100',
    yellow: 'bg-yellow-100',
    blue: 'bg-blue-100',
  };

  return (
    <View className={`p-4 rounded-lg shadow-md m-4 ${colorClasses[color]}`}>
      <Text className="text-lg font-bold">{title}</Text>
      <Text className="text-sm my-2">{message}</Text>
      <View className="flex-row items-center mt-3">
        <View className='flex-row gap-1'>
          <Text className='text-gray-500'>Status</Text>
          <View className='w-6 h-6 bg-yellow-500 rounded-full items-center justify-center'>
            <Image source={require('@assets/serio.png')} style={{ width: '70%', height: '70%', }} />
          </View>
          <Text className='font-bold'>Moderado</Text>
        </View>
      </View>
    </View>
  );
}
