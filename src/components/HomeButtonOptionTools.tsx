import { Icon, Pressable, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { AppRoutes } from "@routes/app.routes";

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
      w={150}
      h={150}
      borderRadius={5}
      m={2}
      p={7}
      justifyContent="space-between"
      backgroundColor={'white'}
      alignItems="center"
      onPress={handleClick}
    >
      <Icon as={MaterialIcons} name={icon} size={8} m={2} color={'blue.400'}/>
      <Text textAlign='center' noOfLines={2}>{desc}</Text>
    </Pressable>
  )
}