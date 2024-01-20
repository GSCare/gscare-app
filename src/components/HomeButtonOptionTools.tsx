import { MaterialIcons } from '@expo/vector-icons';
import { AppRoutes } from "@routes/app.routes";
import { Pressable, Text } from "react-native";

type AppRouteKey = keyof AppRoutes;

interface Props {
  desc: string;
  handleButtonPress: (parametro: AppRouteKey) => void;
  parametro: AppRouteKey;
  icon: string;
}

export function HomeButtonOptionTools({desc, icon, handleButtonPress, parametro}: Props) {
  const handleClick = () => {
    handleButtonPress(parametro);
  };

  return (
    <Pressable 
      className="w-150 h-150 max-w-max rounded-md box-border m-2 p-7 justify-between bg-blue-500 items-center"
      onPress={handleClick}
    >
      <MaterialIcons className='' name="perm-contact-calendar" size={60} m={2} color='blue'/>
      {/* <Text className="text-center overflow-hidden">{desc}</Text> */}
    </Pressable>
  )
}