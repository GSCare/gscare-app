import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRoutes } from '@routes/app.routes';
import { MaterialIcons } from '@expo/vector-icons';
import { DescPageHeader } from './DescPageHeader';
import { HomeButtonOptionTools } from './HomeButtonOptionTools';
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
    <View className='flex-1 justify-center text-center m-auto'>
      {/* <View className='justify-around mb-1 mt-2 flex-row'>
        <HomeButtonOptionTools
          desc='Relatorio diario'
          icon={'perm-contact-calendar'}
          handleButtonPress={handleButtonPress}
          parametro={'dailyReport'}
        />
        <HomeButtonOptionTools
          desc='Patologias do paciente'
          icon={'perm-contact-calendar'}
          handleButtonPress={handleButtonPress}
          parametro={'clientsPathologies'}
        />
      </View>

      <View className='justify-around mb-1 mt-1 flex-row'>
        <HomeButtonOptionTools
          desc='Lista de medicamentos'
          icon={'timer'}
          handleButtonPress={handleButtonPress}
          parametro={'medicationSchedules'}
        />
        <HomeButtonOptionTools
          //desc='Alergias alimentares e medicinais'
          desc='Alergias'
          icon={'inventory'}
          handleButtonPress={handleButtonPress}
          parametro={'foodAndMedicineAllergies'}
        />
      </View> */}
      <View className='items-center flex-1 gap-10'>
        <View>
          <CardPatienteHome />
        </View>
        <View className='h-[230px]'>
          <Text className='text-lg text-orange-500 font-bold ml-3'>Funcionalidades</Text>
          <ScrollingEmployeeHorizontalHome />
        </View>
      </View>
    </View>
  );
}