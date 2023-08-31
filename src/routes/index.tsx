import { Box } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";

export function Routes() {

  const theme = DefaultTheme;
  theme.colors.background = "#084BB3"

  return (
    <Box flex={1} bg="navyBlue">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}