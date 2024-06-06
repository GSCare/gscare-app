import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DailyReport } from '@screens/DailyReport';
import ProfilePaciente from '@screens/ProfilePaciente';



type stackDailyReportProps = {
  stackDailyReport: undefined;
  profilePaciente: undefined;
}

export type StackDailyReportNavigatorRoutesProps = NativeStackNavigationProp<stackDailyReportProps>;

const { Navigator, Screen } = createNativeStackNavigator<stackDailyReportProps>()

export function StackDailyReport() {
  return (
    <Navigator screenOptions={{ headerShown: true }}>
      <Screen
        name="stackDailyReport"
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
      <Screen
        name="profilePaciente"
        component={ProfilePaciente}
        options={() => ({
          title: 'Perfil do Paciente',
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