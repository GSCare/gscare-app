import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRoutes } from '@routes/app.routes';
import { MaterialIcons } from '@expo/vector-icons';
import { DescPageHeader } from './DescPageHeader';
import { HomeButtonOptionTools } from './HomeButtonOptionTools';
import { Text, View } from 'react-native';
import { ScrollingEmployeeHorizontalHome } from './ScrollingEmployeeHorizontalHome';
import CardPatienteHome from './CardPatienteHome';
import { FeaturePacientHome } from './FeaturePacientHome';
import { HomeButtonPatient } from './HomeButtonPatient';

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
          <Text className='text-lg text-orange-500 font-bold ml-3'>Funcionalidades</Text>
          <View>
            <ScrollingEmployeeHorizontalHome />
          </View>
        </View>
        <View className=''>
          <Text className='text-lg text-orange-500 font-bold ml-3'>Funcionalidades</Text>
          <View className='items-center'>
            <FeaturePacientHome />
          </View>
        </View>
      </View>
    </View >
  );
}