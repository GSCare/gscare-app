import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AddAppointmentScreen } from '@screens/AddAppointment';
import { AddIntercurrence } from '@screens/AddIntercurrence';
import { Alergias } from '@screens/Alergias';
import { ClientsPathologies } from '@screens/ClientsPathologies';
import { DailyAppointments } from '@screens/DailyAppointments';
import { DailyReport } from '@screens/DailyReport';
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
import { Settings } from '@screens/Settings';
import { ShiftHistory } from '@screens/ShiftHistory';
import ShoppingList from '@screens/ShoppingList';

import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'


type stackDailyReportProps = {
  dailyReport: undefined;
}

export type StackDailyReportNavigatorRoutesProps = NativeStackNavigationProp<stackDailyReportProps>;

const { Navigator, Screen } = createNativeStackNavigator<stackDailyReportProps>()

export function StackDailyReport() {
  return (
    <Navigator screenOptions={{ headerShown: true }}>
      <Screen
        name="dailyReport"
        component={DailyReport}
        options={() => ({
          title: 'Relatório Diário',
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