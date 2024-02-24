import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text as RNText, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
export function ButtonPeopleCare() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleComponent() {
    navigation.navigate('dailyAppointments')
  }
  return (
    <TouchableOpacity
      className={`
        w-32
        b-1
        h-10
        bg-blue-500
        border-0
        border-orange
        rounded-lg
        flex-row
      `}
      onPress={handleComponent}
    >
      <View className='m-auto flex flex-row'>
        <AntDesign name="calendar" size={24} color="white" />
      </View>
      <View className='m-auto flex flex-row'>
        <Text
          className='
          text-center
          text-white
          font-heading
          text-shadow
          font-bold
          text-base
          '
        >
          Plantões
        </Text>
      </View>

    </TouchableOpacity>
  );
}
