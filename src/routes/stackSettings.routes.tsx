import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileEmployee } from '@screens/ProfileEmployee';
import { Settings } from '@screens/Settings';



type stackSettingsProps = {
  settings: undefined;
  profileEmployee: undefined;
}

export type StackSettingsNavigatorRoutesProps = NativeStackNavigationProp<stackSettingsProps>;

const { Navigator, Screen } = createNativeStackNavigator<stackSettingsProps>()

export function StackSettings() {
  return (
    <Navigator screenOptions={{ headerShown: true }}>
      <Screen
        name="settings"
        component={Settings}
        options={() => ({
          title: 'Configurações',
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: '#F97316',
            fontSize: 18
          },
          headerStyle: {
            backgroundColor: "#f7fafc"
          }
        })}
      />
      <Screen
        name="profileEmployee"
        component={ProfileEmployee}
        options={() => ({
          title: 'Perfil do Funcionário',
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: '#F97316',
            fontSize: 18
          },
          headerStyle: {
            backgroundColor: "#f7fafc"
          }
        })}
      />
    </Navigator>
  )
}