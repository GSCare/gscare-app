import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";

export function Routes() {
  //  const {colors} = useTheme()


  const theme = DefaultTheme;

  return (
    <View className="flex-1 bg-blue-500">
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}