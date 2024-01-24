import { Platform, Text } from 'react-native'
import { Icon } from "native-base"
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/home.svg"
import ProfileSvg from "@assets/profile.svg"
import CalendarSvg from "@assets/calendar.svg"

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
import { PatientCalendar } from '@screens/PatientCalendar';
import { MaterialIcons } from '@expo/vector-icons';


export type AppRoutes = {
  // ? rotas que ficaram no rodape
  home: undefined;
  patientCalendar: undefined;
  settings: undefined;
  // ? rotas que ficaram nas divs da home
  attendanceCalendar: undefined;
  clientsPathologies: undefined;
  dailyReport: undefined;
  emergencyPhones: undefined;
  supplyMonitoring: undefined;
  medicationSchedules: undefined;
  consultationCalendar: undefined;
  // ! essas rotas abaixo só seram usadas na segunda versa
  patientsMedicalDocuments: undefined;
  foodAndMedicineAllergies: undefined;
  complaintsAndNotices: undefined;
  profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  return (
    // <Navigator
    //   screenOptions={{
    //     headerShown: false,
    //     tabBarShowLabel: false,
    //     tabBarStyle: {
    //       backgroundColor: 'blue', // Set your desired background color
    //       borderTopWidth: 0,
    //       height: Platform.OS === 'android' ? 'auto' : 96,
    //       paddingBottom: 30, // Adjust as needed
    //       paddingTop: 30, // Adjust as needed
    //     },
    //   }}
    // >
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#ffffff",
      tabBarInactiveTintColor: "#75c3ff",
      tabBarStyle: {
        backgroundColor: "#3282f9",
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 'auto' : 96,
        paddingBottom: 40,
        paddingTop: 30,
      }
    }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            // <HomeSvg fill={color} width={iconSize} height={iconSize}/>
            <Icon as={MaterialIcons} name="home" size={6} m={2} color={color} />
          )
        }}
      />
      <Screen
        name="patientCalendar"
        component={PatientCalendar}
        options={{
          tabBarIcon: ({ color }) => (
            // <ProfileSvg fill={color} width={iconSize} height={iconSize}/>
            <Icon as={MaterialIcons} name="date-range" size={6} m={2} color={color} />
          )
        }}
      />
      <Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            // <ProfileSvg fill={color} width={iconSize} height={iconSize}/>
            <Icon as={MaterialIcons} name="menu" size={6} m={2} color={color} />
          )
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
  )
}