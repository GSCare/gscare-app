import { HomeHeader } from "@components/HomeHeader";
import { HomePage } from "@components/HomePage";
import { AddModal } from "@components/ModalAddHome";
import { useState } from "react";
import { Button, View } from "react-native";

export function Home() {
  return (
    <View className="flex-1 flex-col">
      <HomeHeader />
      <HomePage />
    </View>
  )
}