import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

export function HomePage() {
  const navigation = useNavigation<any>();

  const handleButtonPress = (routeName: any) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('home')}
        >
          <Text>Botão 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('medicationSchedules')}
        >
          <Text>Botão 2</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('dailyReport')}
        >
          <Text>Botão 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('foodAndMedicineAllergies')}
        >
          <Text>Botão 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('attendanceCalendar')}
        >
          <Text>Botão 5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('clientsPathologies')}
        >
          <Text>Botão 6</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
