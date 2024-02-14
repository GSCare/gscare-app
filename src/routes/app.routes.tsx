import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Home } from "@screens/Home";
import { AttendanceCalendar } from "@screens/AttendanceCalendar";
import { ClientsPathologies } from "@screens/ClientsPathologies";
import { ComplaintsAndNotices } from "@screens/ComplaintsAndNotices";
import { DailyReport } from "@screens/DailyReport";
import { EmergencyPhones } from "@screens/EmergencyPhones";
import { FoodAndMedicineAllergies } from "@screens/FoodAndMedicineAllergies";
import { ConsultationCalendar } from "@screens/ConsultationCalendar";
import { PatientsMedicalDocuments } from "@screens/PatientsMedicalDocuments";
import { Profile } from "@screens/Profile";
import { Settings } from "@screens/Settings";
import { SupplyMonitoring } from "@screens/SupplyMonitoring";
import { MedicationSchedules } from "@screens/MedicationSchedules";
import { PatientCalendar } from "@screens/PatientCalendar";
import { Financial } from "@screens/Financial";
import { DailyAppointments } from "@screens/DailyAppointments";

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
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()
// const Tab = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#75c3ff",
        tabBarStyle: {
          backgroundColor: "#3282f9",
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
        name="patientCalendar"
        component={PatientCalendar}
        options={{
          tabBarLabel: "patientCalendar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
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
      <Screen
        name="medicationSchedules"
        component={MedicationSchedules}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="dailyReport"
        component={DailyReport}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="dailyAppointments"
        component={DailyAppointments}
        options={{ tabBarButton: () => null }}
      /> 
      <Screen
        name="foodAndMedicineAllergies"
        component={FoodAndMedicineAllergies}
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
    </Navigator>
  );
}