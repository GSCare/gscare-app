import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRoutes } from '@routes/app.routes';
import { Text, View } from 'react-native';
import { ScrollingEmployeeHorizontalHome } from './ScrollingEmployeeHorizontalHome';
import CardPatienteHome from './CardPatienteHome';
import { ScrollingPatientHorizontalHome } from './ScrollingPatientHorizontalHome';

type NavigationType = NavigationProp<AppRoutes>;

export function HomePage() {
  const navigation = useNavigation<NavigationType>();

  const handleButtonPress = (routeName: keyof AppRoutes) => {
    navigation.navigate(routeName);
  };

  return (
    <View className='flex-1'>
      <View className='gap-10'>
        <View className='items-center '>
          <CardPatienteHome />
        </View>
        <View className='h-[230px]'>
          <Text className='text-lg text-[#8f8989] font-bold ml-3'>Ferramentas do Paciente</Text>
          <View>
            <ScrollingEmployeeHorizontalHome />
          </View>
        </View>
        <View className=''>
          <Text className='text-lg text-[#8f8989] font-bold ml-3'>Ferramentas do Funcionário</Text>
          <View className='items-center'>
            <ScrollingPatientHorizontalHome />
          </View>
        </View>
      </View>
    </View >
  );
}