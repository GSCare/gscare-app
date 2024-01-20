import React from 'react';
import { View, Text as RNText, TouchableOpacity, Text } from 'react-native';


type Props = {
  title: string;
  variant?: "solid" | "outline";
};

export function Button({ title, variant = "solid", ...rest }: Props) {
  const textWithShadowStyle = {
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  };

  return (
    <TouchableOpacity
      className={`
        w-full
        b-1
        h-14
        bg-yellow-600
        border-0
        
        
        justify-center	
        border-orange
        rounded-md
      `}
    
      {...rest}
    >
      <Text
        className='
          w-full
          text-center
          text-white
          font-heading
          text-shadow
          font-bold
          text-base
        '
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
