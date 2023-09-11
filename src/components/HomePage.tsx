import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRoutes } from '@routes/app.routes';
import { Center, HStack, VStack, Pressable, Text } from 'native-base';
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
          p={7}
          justifyContent="space-between"
          backgroundColor={'white'}
          alignItems="center"
          onPress={() => handleButtonPress('dailyReport')}
        >
          <Icon as={MaterialIcons} name="calendar-today" size={8} m={2} color={'blue.400'}/>
          <Text textAlign='center' noOfLines={2}>Relatorio diario</Text>
        </Pressable>

        <Pressable
          w={150}
          h={150}
          borderRadius={5}
          m={2}
          p={7}
          justifyContent="space-between"
          backgroundColor={'white'}
          alignItems="center"
          onPress={() => handleButtonPress('clientsPathologies')}
        >
          <Icon as={MaterialIcons} name="info-outline" size={8} m={2} color={'blue.400'}/>
          <Text textAlign='center' noOfLines={2}>Patologias do paciente</Text>
        </Pressable>
      </HStack>

      <HStack flexDirection="row" justifyContent="space-around" mb={1}>
        <Pressable
          w={150}
          h={150}
          borderRadius={5}
          m={2}
          p={7}
          justifyContent="space-between"
          backgroundColor={'white'}
          alignItems="center"
          onPress={() => handleButtonPress('medicationSchedules')}
        >
          <Center>
            {/* <MaterialIcons name="menu" /> */}
            <Icon as={MaterialIcons} name="timer" size={8} m={2} color={'blue.400'}/>
          </Center>
          <Text textAlign='center' noOfLines={2}>Horarios dos medicamentos</Text>
        </Pressable>

        <Pressable
          w={150}
          h={150}
          borderRadius={5}
          m={2}
          p={7}
          justifyContent="space-between"
          backgroundColor={'white'}
          alignItems="center"
          onPress={() => handleButtonPress('patientsMedicalDocuments')}
        >
        <Icon as={MaterialIcons} name="folder-shared" size={8} m={2} color={'blue.400'}/>
          <Text textAlign='center' noOfLines={2}>Gestao de documentos do paciente</Text>
        </Pressable>
      </HStack>

      <HStack flexDirection="row" justifyContent="space-around" mb={1}>
        <Pressable
          w={150}
          h={150}
          borderRadius={5}
          m={2}
          p={7}
          justifyContent="space-between"
          backgroundColor={'white'}
          alignItems="center"
          onPress={() => handleButtonPress('foodAndMedicineAllergies')}
        >
          <Icon as={MaterialIcons} name="inventory" size={8} m={2} color={'blue.400'}/>
          <Text textAlign='center' noOfLines={2}>Alergias medicas e alimentar</Text>
        </Pressable>

        <Pressable
          w={150}
          h={150}
          borderRadius={5}
          m={2}
          p={7}
          justifyContent="space-between"
          backgroundColor={'white'}
          alignItems="center"
          onPress={() => handleButtonPress('emergencyPhones')}
        >
          <Icon as={MaterialIcons} name="phone" size={8} m={2} color={'blue.400'}/>
          <Text textAlign='center' noOfLines={2}>telefones de emergencia</Text>
        </Pressable>
      </HStack>
    </VStack>
  );
}