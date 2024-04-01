import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

interface UserIconProps {
  url?: string;
  name: string;
}

export function UserIcon({ url, name }: UserIconProps) {
  const [imageLoaded, setImageLoaded] = useState(true);

  function getInitials(name: string) {
    return name.split(' ').map((n) => n[0]).join('');
  }

  return (
    <View className='flex justify-center items-center'>
      {url && imageLoaded ? (
        <Image
          source={{ uri: url }}
          className='w-12 h-12 rounded-full'
          onError={() => setImageLoaded(false)}
        />
      ) : (
        <View className='w-12 h-12 rounded-full bg-indigo-600 justify-center items-center'>
          <Text className='text-white text-xl'>
            {getInitials(name)}
          </Text>
        </View>
      )}
    </View>
  );
}
