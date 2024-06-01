import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AddAppointmentScreen } from '@screens/AddAppointment';
import { AddIntercurrence } from '@screens/AddIntercurrence';
import { Alergias } from '@screens/Alergias';
import { ClientsPathologies } from '@screens/ClientsPathologies';
import { DailyReport } from '@screens/DailyReport';
import { Financial } from '@screens/Financial';
import HelpScreen from '@screens/Help';
import { Home } from '@screens/Home';
import { LastRoutine } from '@screens/LastRoutine';
import { MedicamentosPacienteAtual } from '@screens/MedicamentosPacienteAtual';
import { PatientCalendar } from '@screens/PatientCalendar';
import ProfilePaciente from '@screens/ProfilePaciente';
import { ShiftHistory } from '@screens/ShiftHistory';
import ShoppingList from '@screens/ShoppingList';


type stackHomeProps = {
  stackHome: undefined;
  signIn: undefined;
  signUp: undefined;
  patientCalendar: undefined;
  dailyAppointments: undefined;
  clientsPathologies: undefined;
  financial: undefined;
  routine: undefined;
  lastRoutine: undefined;
  addIntercurrence: undefined;
  addAppointment: undefined;
  helpScreen: undefined;
  shiftHistory: undefined;
  shoppingList: undefined;
  profilePaciente: undefined;
  profileEmployee: undefined;
  medicamentosPacienteAtual: undefined;
  alergias: undefined;
  dailyReport: undefined;
}

export type StackHomeNavigatorRoutesProps = NativeStackNavigationProp<stackHomeProps>;

const { Navigator, Screen } = createNativeStackNavigator<stackHomeProps>()

export function StackHome() {
  return (
    <Navigator screenOptions={{ headerShown: true }}>
      <Screen
        name="stackHome"
        component={Home}
        options={() => ({
          title: 'GSCare',
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
        name="patientCalendar"
        component={PatientCalendar}
        options={() => ({
          title: 'Agenda de trabalho',
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
        name="clientsPathologies"
        component={ClientsPathologies}
        options={() => ({
          title: 'Patologias do Paciente',
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
        name="financial"
        component={Financial}
        options={() => ({
          title: 'Financeiro',
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
        name="lastRoutine"
        component={LastRoutine}
        options={() => ({
          title: 'Última Rotina de Cuidado',
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
        name="addIntercurrence"
        component={AddIntercurrence}
        options={() => ({
          title: 'Adicionar Intercorrência',
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
        name="addAppointment"
        component={AddAppointmentScreen}
        options={() => ({
          title: 'Adicionar Atividade',
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
        name="helpScreen"
        component={HelpScreen}
        options={() => ({
          title: 'Me Ajude',
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
        name="shiftHistory"
        component={ShiftHistory}
        options={() => ({
          title: 'Histórico de Plantões',
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
        name="shoppingList"
        component={ShoppingList}
        options={() => ({
          title: 'Lista de Compras',
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

      <Screen
        name="medicamentosPacienteAtual"
        component={MedicamentosPacienteAtual}
        options={() => ({
          title: 'Medicamentos do Paciente',
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
        name="alergias"
        component={Alergias}
        options={() => ({
          title: 'Alergias do Paciente',
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
        name="dailyReport"
        component={DailyReport}
        options={() => ({
          title: 'Relatório diário',
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