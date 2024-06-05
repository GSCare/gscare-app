import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Home } from "@screens/Home";


import { useState } from "react";
import { AddModal } from "@components/ModalAddHome";
import { StackHome } from "./stackHome.routes";
import { StackPeopleCare } from "./stackPeopleCare.routes";
import { StackSettings } from "./stackSettings.routes";
import { StackDailyReport } from "./stackDailyReport.routes";

export type AppRoutes = {
  // ? rotas que ficaram no rodape
  home: undefined;
  patientCalendar: undefined;
  settings: undefined;

  // ? rotas que ficaram nas divs da home
  clientsPathologies: undefined;
  dailyReport: undefined;
  dailyAppointments: undefined;


  financial: undefined;

  // ! essas rotas abaixo só seram usadas na segunda versao
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
  peopleCare: undefined;
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
        component={StackHome}
        options={{
          tabBarLabel: "home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="dailyReport"
        component={StackDailyReport}
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
            <AddModal visible={isModalVisible} color={color}/>
          ),
        }}
      />
      <Screen
        name="peopleCare"
        component={StackPeopleCare}
        options={{
          tabBarLabel: "peopleCare",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-heart" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="settings"
        component={StackSettings}
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
     
    </Navigator>
  );
}