import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRoutes } from '@routes/app.routes';
import { Center, HStack, VStack, Pressable, Text, Flex, Box, Heading } from 'native-base';
import { Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { DescPageHeader } from './DescPageHeader';
import { HomeButtonOptionTools } from './HomeButtonOptionTools';


type NavigationType = NavigationProp<AppRoutes>;

export function HomePage() {
  const navigation = useNavigation<NavigationType>();

  const handleButtonPress = (routeName: keyof AppRoutes) => {
    navigation.navigate(routeName);
  };

  return (
    <VStack flex={1} justifyItems="center" alignItems="center" >
      
      <DescPageHeader title="Nome do paciente"/>

      <HStack flexDirection="row" justifyContent="space-around" mt={3} mb={1}>
        <HomeButtonOptionTools 
          desc='Relatorio diario' 
          icon={'calendar-today'} 
          handleButtonPress={handleButtonPress} 
          parametro={'dailyReport'} 
        />
        <HomeButtonOptionTools 
          desc='Patoligias do cliente' 
          icon={'info-outline'} 
          handleButtonPress={handleButtonPress} 
          parametro={'clientsPathologies'} 
        />
      </HStack>

      <HStack flexDirection="row" justifyContent="space-around" mb={1}>
        <HomeButtonOptionTools 
          desc='Horários de medicação' 
          icon={'timer'} 
          handleButtonPress={handleButtonPress} 
          parametro={'medicationSchedules'} 
        />
        <HomeButtonOptionTools 
          desc='Documentos médicos do paciente' 
          icon={'folder-shared'} 
          handleButtonPress={handleButtonPress} 
          parametro={'patientsMedicalDocuments'} 
        />
      </HStack>

      <HStack flexDirection="row" justifyContent="space-around" mb={1}>
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
      </HStack>
    </VStack>
  );
}