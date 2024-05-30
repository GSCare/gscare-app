import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DailyReport } from '@screens/DailyReport';



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