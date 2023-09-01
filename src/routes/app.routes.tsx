import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

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
  return (
    <Navigator>
      <Screen 
        name="home" 
        component={Home} 
      />
      <Screen 
        name="attendanceCalendar" 
        component={AttendanceCalendar} 
      />
      <Screen 
        name="clientsPathologies" 
        component={ClientsPathologies} 
      />
      <Screen 
        name="complaintsAndNotices" 
        component={ComplaintsAndNotices} 
      />
      <Screen 
        name="dailyReport" 
        component={DailyReport} 
      />
      <Screen 
        name="emergencyPhones" 
        component={EmergencyPhones} 
      />
      <Screen 
        name="foodAndMedicineAllergies" 
        component={FoodAndMedicineAllergies} 
      />
      <Screen 
        name="patientsMedicalDocuments" 
        component={PatientsMedicalDocuments} 
      />
      <Screen 
        name="profile" 
        component={Profile} 
      />
      <Screen 
        name="settings" 
        component={Settings} 
      />
      <Screen 
        name="supplyMonitoring" 
        component={SupplyMonitoring} 
      />
      <Screen 
        name="medicationSchedules" 
        component={MedicationSchedules} 
      />
    </Navigator>
  )
}