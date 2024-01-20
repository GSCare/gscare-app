import { Text, View } from "react-native";

interface Props {
  title: String
}

export function PageHeader({title}: Props) {
  return (
    <View className="bg-blue-500 pt-16 pb-5 items-center flex-row justify-center">
      <Text className="text-gray-100 text-lg">
        {title}
      </Text>
    </View>
  )
}