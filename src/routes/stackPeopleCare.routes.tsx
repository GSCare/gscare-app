import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AddAppointmentScreen } from '@screens/AddAppointment';
import { AddIntercurrence } from '@screens/AddIntercurrence';
import { Alergias } from '@screens/Alergias';
import { ClientsPathologies } from '@screens/ClientsPathologies';
import { DailyAppointments } from '@screens/DailyAppointments';
import { Financial } from '@screens/Financial';
import HelpScreen from '@screens/Help';
import { Home } from '@screens/Home';
import { LastRoutine } from '@screens/LastRoutine';
import { MedicamentosPacienteAtual } from '@screens/MedicamentosPacienteAtual';
import { PatientCalendar } from '@screens/PatientCalendar';
import { PeopleCare } from '@screens/PeopleCare';
import { ProfileEmployee } from '@screens/ProfileEmployee';
import ProfilePaciente from '@screens/ProfilePaciente';
import { Routine } from '@screens/Routine';
import { ShiftHistory } from '@screens/ShiftHistory';
import ShoppingList from '@screens/ShoppingList';

import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'

type stackPeopleCareProps = {
  peopleCare: undefined;
  dailyAppointments: undefined;
  routine: undefined;
}

export type StackPeopleCareNavigatorRoutesProps = NativeStackNavigationProp<stackPeopleCareProps>;

const { Navigator, Screen } = createNativeStackNavigator<stackPeopleCareProps>()

export function StackPeopleCare() {
  return (
    <Navigator screenOptions={{ headerShown: true }}>
      <Screen
        name="peopleCare"
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