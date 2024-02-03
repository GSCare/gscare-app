import FilterFinancial from "@components/FilterFinancial";
import { FinancialCards } from "@components/FinancialCards";
import { useState } from "react";
import { View } from "react-native";

export function Financial(){

  return(
    <View className="flex-1">
      <FinancialCards />
      <FilterFinancial />
    </View>
  )
}