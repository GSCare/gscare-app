import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DailyAppointments } from '@screens/DailyAppointments';
import { PeopleCare } from '@screens/PeopleCare';
import { Routine } from '@screens/Routine';


type stackPeopleCareProps = {
  stackPeopleCare: undefined;
  dailyAppointments: undefined;
  routine: undefined;
}

export type StackPeopleCareNavigatorRoutesProps = NativeStackNavigationProp<stackPeopleCareProps>;

const { Navigator, Screen } = createNativeStackNavigator<stackPeopleCareProps>()

export function StackPeopleCare() {
  return (
    <Navigator screenOptions={{ headerShown: true }}>
      <Screen
        name="stackPeopleCare"
        component={PeopleCare}
        options={() => ({
          title: 'Pacientes',
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
        name="dailyAppointments"
        component={DailyAppointments}
        options={() => ({
          title: 'Consultas do Dia',
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
        name="routine"
        component={Routine}
        options={() => ({
          title: 'Rotina do Paciente',
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