import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRoutes } from '@routes/app.routes';
import { Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { DescPageHeader } from './DescPageHeader';
import { HomeButtonOptionTools } from './HomeButtonOptionTools';
import { View } from 'react-native';


type NavigationType = NavigationProp<AppRoutes>;

export function HomePage() {
  const navigation = useNavigation<NavigationType>();

  const handleButtonPress = (routeName: keyof AppRoutes) => {
    navigation.navigate(routeName);
  };

  return (
    <View className='flex-1 justify-center text-center m-auto'>
      <DescPageHeader title="Nome do paciente"/>
      <View className='justify-around mb-1 mt-1 flex-row'>
        <HomeButtonOptionTools 
          desc='Relatorio diario' 
          icon={'perm-contact-calendar'} 
          handleButtonPress={handleButtonPress} 
          parametro={'dailyReport'} 
        />
        <HomeButtonOptionTools 
          desc='Patoligias do cliente' 
          icon={'info-outline'} 
          handleButtonPress={handleButtonPress} 
          parametro={'clientsPathologies'} 
        />
      </View>

      <View className='justify-around mb-1 mt-1 flex-row'>
        <HomeButtonOptionTools 
          desc='Horários da medicação' 
          icon={'timer'} 
          handleButtonPress={handleButtonPress} 
          parametro={'medicationSchedules'} 
        />
        <HomeButtonOptionTools 
          desc='Calendário de consultas' 
          icon={'calendar-today'} 
          handleButtonPress={handleButtonPress} 
          parametro={'consultationCalendar'} 
        />
      </View>

      <View className='justify-around mb-1 mt-1 flex-row'>
        <HomeButtonOptionTools 
          desc='Alergias alimentares e medicinais' 
          icon={'inventory'} 
          handleButtonPress={handleButtonPress} 
          parametro={'foodAndMedicineAllergies'} 
        />
        <HomeButtonOptionTools 
          desc='Telefones de emergencia' 
          icon={'phone'} 
          handleButtonPress={handleButtonPress} 
          parametro={'emergencyPhones'} 
        />
      </View>
    </View>
  );
}