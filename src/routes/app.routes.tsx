import { Platform } from 'react-native'
import { useTheme } from "native-base"
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/home.svg"
import ClockSvg from "@assets/clock.svg"
import CalendarSvg from "@assets/calendar.svg"

import { Home } from "@screens/Home";
import { AttendanceCalendar } from "@screens/AttendanceCalendar";
import { ClientsPathologies } from "@screens/ClientsPathologies";
import { ComplaintsAndNotices } from "@screens/ComplaintsAndNotices";
import { DailyReport } from "@screens/DailyReport";
import { EmergencyPhones } from "@screens/EmergencyPhones";
import { FoodAndMedicineAllergies } from "@screens/FoodAndMedicineAllergies";
import { PatientsMedicalDocuments } from "@screens/PatientsMedicalDocuments";
import { Profile } from "@screens/Profile";
import { Settings } from "@screens/Settings";
import { SupplyMonitoring } from "@screens/SupplyMonitoring";
import { MedicationSchedules } from "@screens/MedicationSchedules";

type AppRoutes = {
  home: undefined;
  attendanceCalendar: undefined;
  clientsPathologies: undefined;
  complaintsAndNotices: undefined;
  dailyReport: undefined;
  emergencyPhones: undefined;
  foodAndMedicineAllergies: undefined;
  patientsMedicalDocuments: undefined;
  profile: undefined;
  settings: undefined;
  supplyMonitoring: undefined;
  medicationSchedules: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const { sizes, colors } = useTheme()

  const iconSize = sizes[7]

  return (
    <Navigator screenOptions={{ 
      headerShown: false, 
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.blue[600],
      tabBarInactiveTintColor: colors.gray[200],
      tabBarStyle: {
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 'auto' : 96,
        paddingBottom: sizes[10],
        paddingTop: sizes[6]
      }
    }}>
      <Screen 
        name="home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="attendanceCalendar" 
        component={AttendanceCalendar} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="clientsPathologies" 
        component={ClientsPathologies} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="complaintsAndNotices" 
        component={ComplaintsAndNotices} 
        options={{ tabBarButton: () => null }}
      />
      <Screen 
        name="dailyReport" 
        component={DailyReport} 
        options={{ tabBarButton: () => null }}
      />
      <Screen 
        name="emergencyPhones" 
        component={EmergencyPhones} 
        options={{ tabBarButton: () => null }}
      />
      <Screen 
        name="foodAndMedicineAllergies" 
        component={FoodAndMedicineAllergies} 
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
        name="settings" 
        component={Settings} 
        options={{ tabBarButton: () => null }}
      />
      <Screen 
        name="supplyMonitoring" 
        component={SupplyMonitoring} 
        options={{ tabBarButton: () => null }}
      />
      <Screen 
        name="medicationSchedules" 
        component={MedicationSchedules} 
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}