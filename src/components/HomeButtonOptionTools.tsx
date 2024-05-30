import { MaterialIcons } from '@expo/vector-icons';
import { AppRoutes } from "@routes/app.routes";
import { Pressable, Text, View } from "react-native";

type AppRouteKey = keyof AppRoutes;

interface Props {
  desc: string;
  handleButtonPress: (parametro: AppRouteKey) => void;
  parametro: AppRouteKey;
  icon: any | string;
  color: "light" | "medium" | "dark";
}

export function HomeButtonOptionTools({ desc, icon, handleButtonPress, parametro, color }: Props) {

  let colorPrimary;
  // let colorSecondary;
  if (color == "dark") {
    colorPrimary = "#447391"
    // colorSecondary = "#3AD1A1"
  }
  if (color == "light") {
    colorPrimary = "#639abf"
    // colorSecondary = "#ffff"
  }
  if (color == "medium") {
    colorPrimary = "#5389ae";
    // colorSecondary = "#F08F67"
  }
  const handleClick = () => {
    handleButtonPress(parametro);
  };

  return (
    <Pressable
      className={`w-40 max-w-max rounded-md box-border m-2 p-4 flex-1 shadow-md shadow-[#000000bd]`}
      onPress={handleClick}
      style={{backgroundColor: colorPrimary}}
    >
      <View className='items-center'>
        <View className='m-2 rounded-full bg-[#fffefe1c] p-4'>
          <MaterialIcons name={icon} size={50} m={2} color={"#ffff"} />
        </View>
        <Text className="text-center overflow-hidden text-white font-bold">{desc}</Text>
      </View>
    </Pressable>
  )
}