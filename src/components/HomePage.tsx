import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRoutes } from '@routes/app.routes';
import { Center } from 'native-base';
import { Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';


type NavigationType = NavigationProp<AppRoutes>;

export function HomePage() {
  const navigation = useNavigation<NavigationType>();

  const handleButtonPress = (routeName: keyof AppRoutes) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('medicationSchedules')}
        >
          <Center>
            {/* <MaterialIcons name="date-range" /> */}
            <Icon as={MaterialIcons} name="date-range" size={8} m={2}/>
          </Center>
          <Text>Horarios dos medicamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('clientsPathologies')}
        >
          <Icon as={MaterialIcons} name="info-outline" size={8} m={2}/>
          <Text>Patologias</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('dailyReport')}
        >
          <Icon as={MaterialIcons} name="calendar-today" size={8} m={2}/>
          <Text>Relatorio diario</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('patientsMedicalDocuments')}
        >
        <Icon as={MaterialIcons} name="folder-shared" size={8} m={2}/>
          <Text>Gestao de documentos do paciente</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('foodAndMedicineAllergies')}
        >
          <Icon as={MaterialIcons} name="inventory" size={8} m={2}/>
          <Text>Alergias medicas e alimentar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('clientsPathologies')}
        >
          <Icon as={MaterialIcons} name="food-bank" size={8} m={2}/>
          <Text>suprimentos e consumo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 150,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});