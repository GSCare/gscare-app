import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRoutes } from '@routes/app.routes';
import { Center, HStack, VStack, Pressable } from 'native-base';
import { Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';


type NavigationType = NavigationProp<AppRoutes>;

export function HomePage() {
  const navigation = useNavigation<NavigationType>();

  const handleButtonPress = (routeName: keyof AppRoutes) => {
    navigation.navigate(routeName);
  };

  return (
    <VStack flex={1} justifyItems="center" alignItems="center" >
      <HStack flexDirection="row" justifyContent="space-around" mt={6} mb={1}>
        <Pressable
          w={150}
          h={150}
          borderRadius={5}
          m={2}
          backgroundColor={'#ffffff'}
          alignItems="center"
          justifyContent="center"
          onPress={() => handleButtonPress('dailyReport')}
        >
          <Icon as={MaterialIcons} name="calendar-today" size={8} m={2}/>
          <Text>Relatorio diario</Text>
        </Pressable>

        <Pressable
          w={150}
          h={150}
          borderRadius={5}
          m={2}
          backgroundColor={'#ffffff'}
          alignItems="center"
          justifyContent="center"
          onPress={() => handleButtonPress('clientsPathologies')}
        >
          <Icon as={MaterialIcons} name="info-outline" size={8} m={2}/>
          <Text>Patologias</Text>
        </Pressable>
      </HStack>

      <HStack flexDirection="row" justifyContent="space-around" mb={1}>
        <Pressable
          w={150}
          h={150}
          borderRadius={5}
          m={2}
          backgroundColor={'#ffffff'}
          alignItems="center"
          justifyContent="center"
          onPress={() => handleButtonPress('medicationSchedules')}
        >
          <Center>
            {/* <MaterialIcons name="menu" /> */}
            <Icon as={MaterialIcons} name="timer" size={8} m={2}/>
          </Center>
          <Text>Horarios dos medicamentos</Text>
        </Pressable>

        <Pressable
          w={150}
          h={150}
          borderRadius={5}
          m={2}
          backgroundColor={'#ffffff'}
          alignItems="center"
          justifyContent="center"
          onPress={() => handleButtonPress('patientsMedicalDocuments')}
        >
        <Icon as={MaterialIcons} name="folder-shared" size={8} m={2}/>
          <Text>Gestao de documentos do paciente</Text>
        </Pressable>
      </HStack>

      <HStack flexDirection="row" justifyContent="space-around" mb={1}>
        <Pressable
          w={150}
          h={150}
          borderRadius={5}
          m={2}
          backgroundColor={'#ffffff'}
          alignItems="center"
          justifyContent="center"
          onPress={() => handleButtonPress('foodAndMedicineAllergies')}
        >
          <Icon as={MaterialIcons} name="inventory" size={8} m={2}/>
          <Text>Alergias medicas e alimentar</Text>
        </Pressable>

        <Pressable
          w={150}
          h={150}
          borderRadius={5}
          m={2}
          backgroundColor={'#ffffff'}
          alignItems="center"
          justifyContent="center"
          onPress={() => handleButtonPress('emergencyPhones')}
        >
          <Icon as={MaterialIcons} name="phone" size={8} m={2}/>
          <Text>telefones de emergencia</Text>
        </Pressable>
      </HStack>
    </VStack>
  );
}