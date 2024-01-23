import { HomeHeader } from "@components/HomeHeader";
import { HomePage } from "@components/HomePage";
import { View } from "react-native";

export function Home() {
  return (
    <View className="flex-1 flex-col">
      <HomeHeader />
      <HomePage />
    </View>
  )
}