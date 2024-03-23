import { MaterialIcons } from '@expo/vector-icons';
import { AppRoutes } from '@routes/app.routes';
import { Pressable, Text, View } from 'react-native';

type AppRouteKey = keyof AppRoutes;

interface Props {
  desc: string;
  handleButtonPress: (parametro: AppRouteKey) => void;
  parametro: AppRouteKey;
  icon: any | string;
  color: 'purple' | 'orange' | 'green';
}

export function HomeButtonPatient({
  desc,
  icon,
  handleButtonPress,
  parametro,
  color,
}: Props) {
  let colorPrimary;
  let colorSecondary;
  if (color === 'purple') {
    colorPrimary = '#6A39F1';
    colorSecondary = '#5839F1';
  } else if (color === 'orange') {
    colorPrimary = '#EF7B78';
    colorSecondary = '#F08F67';
  } else if (color === 'green') {
    colorPrimary = '#42DB5D';
    colorSecondary = '#3AD1A1';
  }

  const handleClick = () => {
    handleButtonPress(parametro);
  };

  return (
    <Pressable
      style={{
        flex: 1,
        backgroundColor: "#ADD8E6",
        borderRadius: 10,
        margin: 5,
        padding: 10,
        paddingBottom: 30,
      }}
      onPress={handleClick}
    >
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            borderRadius: 999,
            backgroundColor: '#fffefe1c',
            padding: 5,
          }}
        >
          <MaterialIcons name={icon} size={30} color={'#f1f5fb'} />
        </View>
        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 5 }}>
          {desc}
        </Text>
      </View>
    </Pressable>
  );
}