import { Platform, Pressable, TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from '@expo/vector-icons';

import { Home } from "@screens/Home";
import { AttendanceCalendar } from "@screens/AttendanceCalendar";
import { ClientsPathologies } from "@screens/ClientsPathologies";
import { ComplaintsAndNotices } from "@screens/ComplaintsAndNotices";
import { DailyReport } from "@screens/DailyReport";
import { EmergencyPhones } from "@screens/EmergencyPhones";
import { ConsultationCalendar } from "@screens/ConsultationCalendar";
import { PatientsMedicalDocuments } from "@screens/PatientsMedicalDocuments";
import { Profile } from "@screens/Profile";
import { Settings } from "@screens/Settings";
import { SupplyMonitoring } from "@screens/SupplyMonitoring";
import { PatientCalendar } from "@screens/PatientCalendar";
import { Financial } from "@screens/Financial";
import { DailyAppointments } from "@screens/DailyAppointments";
import { PeopleCare } from "@screens/PeopleCare";
import { Routine } from "@screens/Routine";
import { LastRoutine } from "@screens/LastRoutine";
import { AddIntercurrence } from "@screens/AddIntercurrence";
import { AddAppointmentScreen } from "@screens/AddAppointment";
import Help from "@screens/Help";
import { ShiftHistory } from "@screens/ShiftHistory";
import ShoppingList from "@screens/ShoppingList";
import { useState } from "react";
import { AddModal } from "@components/ModalAddHome";
import ProfilePaciente from "@screens/ProfilePaciente";
import { CardProfileEmployee } from "@components/CardProfileEmployee";
import { ProfileEmployee } from "@screens/ProfileEmployee";
import { MedicamentosPacienteAtual } from "@screens/MedicamentosPacienteAtual";
import { Alergias } from "@screens/Alergias";

export type AppRoutes = {
  // ? rotas que ficaram no rodape
  home: undefined;
  patientCalendar: undefined;
  settings: undefined;

  // ? rotas que ficaram nas divs da home
  attendanceCalendar: undefined;
  clientsPathologies: undefined;
  dailyReport: undefined;
  dailyAppointments: undefined;
  peopleCare: undefined;
  emergencyPhones: undefined;
  supplyMonitoring: undefined;
  medicationSchedules: undefined;
  consultationCalendar: undefined;
  financial: undefined;

  // ! essas rotas abaixo só seram usadas na segunda versao
  patientsMedicalDocuments: undefined;
  foodAndMedicineAllergies: undefined;
  complaintsAndNotices: undefined;
  profile: undefined;
  routine: undefined;
  lastRoutine: undefined;
  addIntercurrence: undefined;
  addAppointment: undefined;
  helpScreen: undefined;
  shiftHistory: undefined;
  shoppingList: undefined;
  addButton: undefined;
  profilePaciente: undefined;
  profileEmployee: undefined;
  medicamentosPacienteAtual: undefined;
  alergias: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()
// const Tab = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#1C13E9",
        tabBarInactiveTintColor: "#75c3ff",
        tabBarStyle: {
          backgroundColor: "#f7fafc",
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 55 : 96,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}
    >

      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="dailyReport"
        component={DailyReport}
        options={{
          tabBarLabel: "dailyReport",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
      {/* <Screen
        name="patientCalendar"
        component={PatientCalendar}
        options={{
          tabBarLabel: "patientCalendar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      /> */}
      <Screen
        name="addButton"
        component={Home}
        options={{
          tabBarLabel: "addButton",
          tabBarIcon: ({ color }) => (
            <AddModal visible={isModalVisible} color={color} />
          ),
        }}
      />
      <Screen
        name="peopleCare"
        component={PeopleCare}
        options={{
          tabBarLabel: "peopleCare",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-heart" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: "settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
      {/* <Screen
        name="dailyReport"
        component={DailyReport}
        options={{ tabBarButton: () => null }}
      /> */}
      <Screen
        name="patientCalendar"
        component={PatientCalendar}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="dailyAppointments"
        component={DailyAppointments}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="consultationCalendar"
        component={ConsultationCalendar}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="attendanceCalendar"
        component={AttendanceCalendar}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="clientsPathologies"
        component={ClientsPathologies}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="financial"
        component={Financial}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="complaintsAndNotices"
        component={ComplaintsAndNotices}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="emergencyPhones"
        component={EmergencyPhones}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="patientsMedicalDocuments"
        component={PatientsMedicalDocuments}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="supplyMonitoring"
        component={SupplyMonitoring}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="routine"
        component={Routine}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="lastRoutine"
        component={LastRoutine}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="addIntercurrence"
        component={AddIntercurrence}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="addAppointment"
        component={AddAppointmentScreen}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="helpScreen"
        component={Help}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="shiftHistory"
        component={ShiftHistory}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="shoppingList"
        component={ShoppingList}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="profilePaciente"
        component={ProfilePaciente}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="profileEmployee"
        component={ProfileEmployee}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="medicamentosPacienteAtual"
        component={MedicamentosPacienteAtual}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="alergias"
        component={Alergias}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}