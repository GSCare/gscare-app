import { MaterialIcons } from '@expo/vector-icons';
import { AppRoutes } from "@routes/app.routes";
import { Pressable, Text, View } from "react-native";

type AppRouteKey = keyof AppRoutes;

interface Props {
  desc: string;
  handleButtonPress: (parametro: AppRouteKey) => void;
  parametro: AppRouteKey;
  icon: any | string;
  color: "purple" | "orange" | "green";
}

export function HomeButtonOptionTools({ desc, icon, handleButtonPress, parametro, color }: Props) {

  let colorPrimary;
  let colorSecondary;
  if (color == "purple") {
    colorPrimary = "#6A39F1"
    colorSecondary = "#5839F1"
  }
  if (color == "orange") {
    colorPrimary = "#EF7B78";
    colorSecondary = "#F08F67"
  }
  if (color == "green") {
    colorPrimary = "#42DB5D"
    colorSecondary = "#3AD1A1"
  }
  const handleClick = () => {
    handleButtonPress(parametro);
  };

  return (
    <Pressable
      className={`w-40 max-w-max rounded-md box-border m-2 p-4 flex-1`}
      onPress={handleClick}
      style={{backgroundColor: colorPrimary}}
    >
      <View className='items-center'>
        <View className='m-2 rounded-full bg-[#fffefe1c] p-4'>
          <MaterialIcons name={icon} size={50} m={2} color={"#cfc0fa"} />
        </View>
        <Text className="text-center overflow-hidden text-white font-bold">{desc}</Text>
      </View>
    </Pressable>
  )
}